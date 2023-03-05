import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from 'src/app/services/ImageService/image-service.service';

declare var Swal:any;
declare var saveAs:any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent{

  maxSize = 4096; // 4MB
  compressedImageSrc: any | undefined;

  imageUrl: string = "";

  @Input() image: Blob | undefined;
  @Output() imageChange = new EventEmitter<Blob>();

  constructor(private imageService: ImageService,private sanitizer: DomSanitizer) {
    console.log(this.compressedImageSrc);
  }

  onImageCompressed(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        Swal.fire({
          icon: 'error',
          title: 'Error al cargar imagen',
          text: 'El archivo seleccionado no es una imagen'
        });
        return;
      }
      Swal.fire({
        title: 'Comprimiendo imagen',
        text: 'Por favor, espere mientras se comprime la imagen...',
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
        }
      });
      this.imageService.compressImage(file, this.maxSize).subscribe(
        (result) => {
          this.compressedImageSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(result));
          this.image = result;
          this.imageChange.emit(result);
          Swal.close();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error al comprimir imagen',
            text: error.message
          });
        }
      );
    }
  }

  downloadImage(): void {
    if (this.image) {
      const blob = new Blob([this.image], { type: 'image/jpeg' });
      saveAs(blob, 'compressed-image.jpeg');
    }
  }
}

