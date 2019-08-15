import { Component, OnInit} from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
 
  
  name;
  password;
  contact;
  gender;
  data;
  constructor(private main:MainService,private router:Router,public toastController: ToastController){}

  onSubmit(data)
  {
    
    this.main.register(data.name,data.password,data.contact,data.gender)
    .subscribe((res)=>{
      localStorage.setItem('contact',data.contact);
      console.log(localStorage.getItem('contact'),res);
      this.router.navigate(['/addtask']);
    });
    
  }
  formdata = new FormGroup(
    {
    
      name: new FormControl('', 
        Validators.compose([
          Validators.pattern('[a-zA-Z ]*'), 
          Validators.required
          ])
        ),
    
      pwd: new FormControl('', Validators.compose([
          Validators.minLength(6),
          Validators.required,
          // Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])
      ),
      contact: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
    
          ])
        ),
      gender: new FormControl('',Validators.required),
           
    } 
    );
         validation_messages = {
          'name': [
            { type: 'required', message: 'Name is required.' },
            { type: 'pattern', message: 'Your name must contain only letters.' }
    
          ],
    
          'gender': [
            { type: 'required', message: 'Gender is required.' }
          ],
          
          'contact': [
            { type: 'required', message: 'Contact is required.' },
            { type: 'maxlength', message: 'Contact must be 10 digit' },
            { type: 'minlength', message: 'Contact must be 10 digit' },
          ],
    
          'pwd': [
            { type: 'required', message: 'Password is required.' },
            { type: 'minlength', message: 'Password must be at least 6 characters long.' },
            // { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
       ],   
        }
  


  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
    
