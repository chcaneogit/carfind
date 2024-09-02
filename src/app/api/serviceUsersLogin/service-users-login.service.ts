import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/userLogin';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserslOgin {

  lista_de_login: Login[] = [
    {
      // rut: 111111,
      // dv: '1',
      // name: 'Aaaaa asaaa',
      password: 'hola123',
      email: 'hola@hola.com',
      // phone: '+561212121',
      // birth: '11/11/2000',
    }

  ]

  constructor() { }

  encontrar_usuario(userInfo: Login) {
    for (let i = 0; i < this.lista_de_login.length; i++){
      if (this.lista_de_login[i].email == userInfo.email && this.lista_de_login[i].password == userInfo.password) {
        return true;
      }
    } return false;
  }
}
