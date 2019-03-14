import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServicioAuthService } from '../servicios/servicio-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  username:string;
  password:string;

  constructor(private router:Router, private api:ServicioAuthService) { }

  login(){
     const {username,password} = this
    if (this.username !== undefined && this.password !== undefined){
      this.api.login(username.trim(),password.trim()).then(res=>{
        console.log(res);
        this.router.navigate(['/home']);
      }) .catch(err=>{
        console.log(err);
      })
    }
    
  }

 

}
