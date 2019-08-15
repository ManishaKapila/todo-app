import { Component } from '@angular/core';
import {MainService} from '../main.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contact;
  constructor(private main:MainService, private router:Router,public toastController: ToastController){}
 
  onSubmit(data)
  {
    
    this.main.addac(data.contact)
    .subscribe((res:any)=>{
      if (res.length>0){
        localStorage.setItem('contact',data.contact)
      this.presentToast();
      this.router.navigate(['/addtask']);
      console.log(res);
      }
      else{
        this.presentToast1();
      }
      
    });
}
async presentToast() {
  const toast = await this.toastController.create({
    message: 'Login Succesfully',
    duration: 2000
  });
  toast.present();
}
async presentToast1() {
  const toast = await this.toastController.create({
    message: 'Number is not registered. Please register',
    duration: 2000
  });
  toast.present();
}

formdata = new FormGroup(
  {
    contact: new FormControl("",
    Validators.compose([
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),

      ])
    ),
  });
  validation_messages = {
    'contact': [
      { type: 'required', message: 'Contact is required.' },
      { type: 'maxlength', message: 'Contact must be 10 digit' },
      { type: 'minlength', message: 'Contact must be 10 digit' },
    ],
  }
}