import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsersService {

  private lista_de_usuarios: Users[] =[
    {
      rut: 111111,
      dv: '1',
      name: 'Aaaaa asaaa',
      password: 'hola123',
      email: 'hola@hola.com',
      phone: '+561212121',
      birth: '11/11/2000',
    },
    {
      rut: 0,
      dv: '',
      name: '',
      password: '',
      email: '',
      phone: '',
      birth: ''
    }
  ]

  constructor() { }

  public obtener_lista_usuarios(): Users[]{
    return this.lista_de_usuarios;
  }
}
