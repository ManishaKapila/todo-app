import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'addtask',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'first', loadChildren: './first/first.module#FirstPageModule' },
  { path: 'reminder', loadChildren: './reminder/reminder.module#ReminderPageModule' },
  { path: 'addreminder', loadChildren: './addreminder/addreminder.module#AddreminderPageModule' },
  { path: 'sort', loadChildren: './sort/sort.module#SortPageModule' },
  { path: 'theme', loadChildren: './theme/theme.module#ThemePageModule' },
  { path: 'hidetask', loadChildren: './hidetask/hidetask.module#HidetaskPageModule' },
  { path: 'addtask', loadChildren: './addtask/addtask.module#AddtaskPageModule' },
  { path: 'completetask', loadChildren: './completetask/completetask.module#CompletetaskPageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
