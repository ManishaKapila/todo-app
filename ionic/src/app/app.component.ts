import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'welcome',
      url: '/welcome',
      icon: 'home'
    },
    {
      title: 'Add Task',
      url: '/addtask',
      icon:'add'
    },
    // {
    //   title: 'Reminder',
    //   url: '/reminder',
    //   icon:'notifications'
    // },
    {
      title: 'Add Reminder',
      url: '/addreminder',
      icon:'add'
    },
    {
      title: 'Show Completed Tasks',
      url: '/completetask',
      icon:'checkmark-circle'
    },
    
    {
      title: 'Log Out',
      url: '/home',
      icon:'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
