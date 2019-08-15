import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopComponent} from '../pop/pop.component';
@Component({
  selector: 'app-hidetask',
  templateUrl: './hidetask.page.html',
  styleUrls: ['./hidetask.page.scss'],
})
export class HidetaskPage implements OnInit {
  today = Date.now();
  constructor(public popcontrol:PopoverController) { }
  async popover(e1:any){
    const p1=await this.popcontrol.create({
      component:PopComponent,
      event:e1,
    });
    return await p1.present();
  }

  ngOnInit() {
  }

}
