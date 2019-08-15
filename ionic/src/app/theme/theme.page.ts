import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopComponent} from '../pop/pop.component';
import { ThemeService } from '../theme.service';

const themes = {
  autumn: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876'
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'
  }
};
@Component({
  selector: 'app-theme',
  templateUrl: './theme.page.html',
  styleUrls: ['./theme.page.scss'],
})
export class ThemePage implements OnInit {
  today = Date.now();

  constructor(public popcontrol:PopoverController,private theme: ThemeService) { }
  async popover(e1:any){
    const p1=await this.popcontrol.create({
      component:PopComponent,
      event:e1,
    });
    return await p1.present();
  }

  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  
  }


  ngOnInit() {
  }

}
