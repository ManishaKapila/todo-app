import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
import {PopoverController, ToastController} from '@ionic/angular';
import {PopComponent} from '../pop/pop.component';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.page.html',
  styleUrls: ['./addtask.page.scss'],
})
export class AddtaskPage implements OnInit {
  today = Date.now();
contact;
task;
  constructor(private main:MainService,private router:Router,public popcontrol:PopoverController, 
    public toastController:ToastController,public actionSheetController: ActionSheetController){}
  async popover(e1:any){
    const p1=await this.popcontrol.create({
      component:PopComponent,
      event:e1,
    });
    return await p1.present();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
        buttons: [{
        text: 'Add Task',
        icon: 'radio-button-on',
        handler: () => {      
         if(this.task==null || this.task=="")
         {
          this.presentToast1();
         }
         else{
          this.addt();
         }
       }
      }]

    });
    await actionSheet.present();
}
  addt()
  {
    var contact=localStorage.getItem("contact");
    console.log(contact,this.task);
    this.main.add(contact,this.task)
    .subscribe((res)=>{
    this.presentToast();
      console.log(res);
    this.setask();
    this.task=null;

      // this.router.navigate(['/addtask']);
    });
}
// doRefresh(event)
// {
//   console.log('begin');
//   setTimeout(() =>{
//     console.log('operation has stop');
//     event.target.complete();
//     this.main.stask(this.contact).subscribe((res) =>
//     {
//       console.log(res);
//       this.unique=res;
//       this.task=null;
//     });
//   },2000);
// }
unique:any;
setask()
{
  this.contact=localStorage.getItem("contact");
  console.log(this.contact);
  this.main.stask(this.contact).subscribe((res)=>
  {
    console.log(res);
    this.unique=res;
  });
}
complete(task)
{
  this.main.completeTask(this.contact,task).subscribe((res)=>
  {
    console.log(res);
    this.setask();
  })
 }
ionViewWillEnter()
{
  var contact=localStorage.getItem("contact");
  if(contact)
  {
    this.setask();
  }
  else
  {
    this.router.navigate(['/home']);
  }
  
}
async presentToast(){
  const toast= await this.toastController.create({
    message: 'Task added successfully!',
    duration:3000,
  });
  toast.present();
}
async presentToast1(){
  const toast= await this.toastController.create({
    message: 'enter data!',
    duration:3000,
  });
  toast.present();
}
  ngOnInit() {
    // this.setask();
  }
}
