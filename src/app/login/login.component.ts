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
    if (this.username !== undefined && this.password !== undefined){
      const {username,password} = this;

    }
  }

 

}
