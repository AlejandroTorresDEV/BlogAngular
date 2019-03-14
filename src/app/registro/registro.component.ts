import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAuthService } from "../servicios/servicio-auth.service";
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  username : string;
  password : string;
  image ;

  registerForm: FormGroup;
  submitted = false;

  //Variables para manejar el fichero del certificado
  file;
  fileByte;
  rutaFichero; 

  constructor(private formBuilder: FormBuilder,private router: Router,private authService: ServicioAuthService ) { }

  ngOnInit() {
    this.generateRegisterFormModel();
  }


  //Modelo del formulario, especificamos las caracteristicas que van a tener cada grupo del formulario.
  generateRegisterFormModel() {
    this.registerForm = this.formBuilder.group({
      file: [null, Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //Método para validar el formulario de registro
  registerUser(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.image = this.registerForm.value.file;
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;

    console.log(this.fileByte);


    //Si todo es correcto llamamos al metodo del servicio
    const newUser: Users = {
      username : this.username,
      password : this.password
    };

    this.authService.registerUser(newUser);
  }

   //Capturamos el evento del input file para recoger los datos del usuario.
   changeListener($event): void {
    this.readThis($event.target);
  }

   //Método para leer los datos del certificado
   readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    //Obtenemos el nombre del fichero.
    this.rutaFichero = file.name;
    
    myReader.readAsDataURL(file);

    //Obtenemos el certificado como bytes.
    myReader.onloadend = (e) => {
      this.file = myReader.result;
      //this.fileByte = this.file.split(',')[1];
      this.fileByte = this.file;
    };
  }


  getFormsControls(): any {
    return this.registerForm.controls;
  }

}
