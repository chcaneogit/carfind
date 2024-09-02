import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ServiceUserslOgin } from 'src/app/api/serviceUsersLogin/service-users-login.service';
import { Login } from 'src/app/models/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userLogin: Login = {
    email: "",
    password: "",
  };

  @ViewChild(IonModal) modal!: IonModal;

  message = 'Christian';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log('Christian');
    }
  }

  constructor(private _userLogin: ServiceUserslOgin, private router: Router) { }

  ngOnInit() {
  }

  login(userLogin: Login) {
    console.log(userLogin);
    const usuarioValido = this._userLogin.encontrar_usuario(userLogin); // Valida si el usuario existe

    if (usuarioValido) {
      // Ir a otra página si el usuario existe
      console.info("existe");
      this.modal.dismiss(this.name, 'confirm');
    } else {
      console.error("No existe");
    }
  }


}
