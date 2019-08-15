import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { MainService } from '../main.service';
import {PopoverController, ToastController} from '@ionic/angular';
import {PopComponent} from '../pop/pop.component';
@Component({
  selector: 'app-completetask',
  templateUrl: './completetask.page.html',
  styleUrls: ['./completetask.page.scss'],
})
export class CompletetaskPage implements OnInit {
  today = Date.now();
  constructor(public actionSheetController: ActionSheetController,private main:MainService,public popcontrol:PopoverController) {this.find();}
  async popover(e1:any){
    const p1=await this.popcontrol.create({
      component:PopComponent,
      event:e1,
    });
    return await p1.present();
  }
  async p1() {
    const actionSheet = await this.actionSheetController.create({
      header: 'share',
      buttons: [{
        text: 'Gmail',
        icon: 'mail',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'whatsapp',
        icon: 'logo-whatsapp',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Facebook',
        icon: 'logo-facebook',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Messages',
        icon: 'chatboxes',
        handler: () => {
          console.log('Favorite clicked');
        }
      }]
    });
    await actionSheet.present();
  }

contact;
task;
find(){
  this.contact=localStorage.getItem("contact");
    console.log(this.contact);
     this.main.showcomplete(this.contact).subscribe((res)=>{ 
     console.log(res);
    //  this.addt=this.t;
     this.task=res;
     }); 
  }


  ngOnInit() {
    
  }

}
