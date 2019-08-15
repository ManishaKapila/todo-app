import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopComponent} from '../pop/pop.component';
import { MainService } from '../main.service';
@Component({
  selector: 'app-sort',
  templateUrl: './sort.page.html',
  styleUrls: ['./sort.page.scss'],
})
export class SortPage implements OnInit {
  today = Date.now();
  constructor(public popcontrol:PopoverController,private main:MainService) {}
  async popover(e1:any){
    const p1=await this.popcontrol.create({
      component:PopComponent,
      event:e1,
    });
    return await p1.present();
  }
unique:any;
contact;

find(){
this.contact=localStorage.getItem("contact");
  console.log(this.contact);
   this.main.stask(this.contact).subscribe((res:any)=>{
   console.log(res);
  //  var sortarray:any;
  //  sortarray=res;
  //  this.addt=this.t;
   // 
   // this.add=null;
res.sort(function(a, b){
  var xa=a.task.toLowerCase(), xb=b.task.toLowerCase();
  if(xa < xb)
    return -1
  if (xa > xb)
    return 1
  return 0
})
console.log(res);
this.unique=res;
});
}


ionViewWillEnter(){
  this.find();
}
  ngOnInit() {
  }

}
