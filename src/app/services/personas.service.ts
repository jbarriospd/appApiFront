import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  public url:string;
  constructor(public http:HttpClient) { 
    this.url = environment.endpoint;
  }
  

  getCuenta():Observable<any>{
    return this.http.get(this.url+'ListadoEntradas/1');
  }


  login(user):Observable<any>{
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url+'Login', params, {headers: headers});
  }
}
