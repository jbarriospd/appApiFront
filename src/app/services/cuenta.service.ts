import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  public url: string;
  constructor(public http:HttpClient) { 
    this.url = environment.endpoint;
  }

  getCuenta(user):Observable<any>{
    return this.http.get(this.url+'consultarCuenta/'+user.identificacion);
  }
}
