import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CommonProvider } from '../../providers/common/common';
import { BackendProvider } from '../../providers/backend/backend';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  details: FormGroup;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private common: CommonProvider,
    private backend: BackendProvider
  ) { }

  ionViewWillLoad() {
    this.details = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });
  }

  goToLogin() {
    this.navCtrl.setRoot('LoginPage');
  }

  register() {
    if (!this.details.valid) {
      return this.common.getToast('Please fill fields correctly!').present();
    }

    this.backend.register(this.details.value.email, this.details.value.password).then(res => {
      if (res.user) {
        this.common.getToast('User registered', 1000).present();
        this.navCtrl.setRoot('LoginPage');
      }
    }).catch(error => {
      if (error.code == 'auth/email-already-in-use') {
        this.common.getToast('User with given email already registered!').present();
      } else if (error.code == 'auth/weak-password') {
        this.common.getToast('Password should be at least 6 characters').present();
      }
    });

  }

}