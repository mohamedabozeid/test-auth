import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
function duplicatePassword(input: any) {

  if (!input.root.controls) {
    return null;
  }

  const exactMatch = input.root.controls.password.value === input.value;
  return exactMatch ? null : { mismatchedPassword: true };
}

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private form : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['',Validators.required],
        confirmPassword:['',[Validators.required, duplicatePassword]]

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  submit(){
    console.log(JSON.stringify(this.form.value));
  }

}


