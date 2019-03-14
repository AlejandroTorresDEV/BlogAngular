import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioAuthService {
  rutaApi:string = 'prueba'
  constructor(private http:HttpClient) { }

  login(username:string, password:string){
    return this.http.post(this.rutaApi, {username,password}).toPromise();    
  }
}
