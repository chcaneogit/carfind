import { Component, OnInit } from '@angular/core';
import { ServiceUsersService } from 'src/app/api/serviceUsers/users-service.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: Users [] = [];

  constructor(private _usersService: ServiceUsersService) { }

  ngOnInit() {
    this.users = this._usersService.obtener_lista_usuarios();
    console.info(this.users)
  }

}
