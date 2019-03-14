import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class ServicioAuthService {

  dataUsers: { Users: Array<Users> } = {
    Users: [
      {
        username : "Alejandro",
        password : "123456"
      }
    ]
  }

  constructor() { }

  registerUser(newUser : Users){
      this.dataUsers.Users.push(newUser);
      console.log(this.dataUsers);
  }
  
}
