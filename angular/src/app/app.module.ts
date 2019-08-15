import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterComponent } from './master/master.component';
import { UpdateComponent } from './update/update.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
const routes:Routes=[
{path:'dashboard',component:DashboardComponent},
{path:'user',component:UserComponent},
{path:'master',component:MasterComponent},
{path:'update/:contact',component:UpdateComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    AdminpanelComponent,
    UserComponent,
    DashboardComponent,
    MasterComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
