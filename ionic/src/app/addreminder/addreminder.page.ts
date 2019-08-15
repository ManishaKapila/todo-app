import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-addreminder',
  templateUrl: './addreminder.page.html',
  styleUrls: ['./addreminder.page.scss'],
})
export class AddreminderPage implements OnInit {

contact;  
title;
date;
time;
// location;

  constructor(private main:MainService,private router:Router){}
  addremm()
  {
    var b=localStorage.getItem("contact")

    console.log(b,this.title,this.date,this.time);
    this.main.addreminder(b,this.title,this.date,this.time)
    .subscribe((res)=>{
      this.router.navigate(['/reminder']);
      console.log(res);
      this.title=null;
      this.date=null;
      this.time=null;

    });
}

  ngOnInit() {
    // this.sereminder();
  }

}
