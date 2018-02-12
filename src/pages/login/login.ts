import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {RegisterPage} from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private loginForm : FormGroup;
  registerPage: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder) {

      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['',Validators.required],
      });
      this.registerPage = RegisterPage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submit(){
    console.log(JSON.stringify(this.loginForm.value));
  }

}
