import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { ClienteService } from 'src/app/services/modules/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  lstClientes: any = [];

  constructor(private clienteService: ClienteService, private api: ApiserviceService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clienteService.ObtenerClientes().subscribe(data => {
      let response:any = this.api.ProcesarRespuesta(data);
      if (response.tipo == 0) {
        this.lstClientes = response.result;
      }
    })
  }

}
