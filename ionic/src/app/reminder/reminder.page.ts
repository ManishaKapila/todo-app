import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage implements OnInit {

  constructor(private main:MainService) {}
  contact;
  unique1:any;
sereminder()
{
  this.contact=localStorage.getItem("contact");
  console.log(this.contact);
  this.main.srem(this.contact).subscribe((res)=>
  {
    console.log(res);
    this.unique1=res;
  });
}
 
ionViewWillEnter()
{
  this.sereminder(); 
}

  ngOnInit() {
  }

}
