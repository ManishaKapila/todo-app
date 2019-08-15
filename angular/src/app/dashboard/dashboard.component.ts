import { Component, OnInit } from '@angular/core';
import {S1Service} from '../s1.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private s1: S1Service) {
  	
  	this.s1.count().subscribe((res)=>{
			this.userCtr=res;
			console.log(res);
		});}

userCtr:any={data:null};

  ngOnInit() {
  }

}
