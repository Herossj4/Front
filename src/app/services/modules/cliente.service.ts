import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiserviceService } from '../apiservice.service';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiObtenerClientes = this.api.getBaseUrl + "cliente/ObtenerClientes";

  constructor(private http: HttpClient, private api: ApiserviceService) { }

  public ObtenerClientes(): Observable<any> {
    return this.http.get<any>(this.apiObtenerClientes, this.api.getOptions('g'))
    .pipe(retry(1), catchError(this.api.errorHandle));
  }
}
