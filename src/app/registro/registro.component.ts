import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAuthService } from "../servicios/servicio-auth.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  username : string;
  email : string;
  password : string;

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router,private authService: ServicioAuthService ) { }

  ngOnInit() {
    this.generateRegisterFormModel();
  }


  //Modelo del formulario, especificamos las caracteristicas que van a tener cada grupo del formulario.
  generateRegisterFormModel() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //Método para validar el formulario de registro
  registerUser(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.email = this.registerForm.value.email;
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;

    console.log("Email -> "+this.email+" Username -> "+this.username+" Password ->"+this.password);

    //Si todo es correcto llamamos al metodo del servicio
    this.authService.registerUser();
  }

  getFormsControls(): any {
    return this.registerForm.controls;
  }

}
