import { Component, OnInit } from '@angular/core';
import {S1Service} from '../s1.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users;

  constructor(private s1: S1Service) {
  	
  	console.log("res");
  	this.s1.users().subscribe((res)=>{
			this.users=res;
			console.log(res);
		});
  }
  ngOnInit() {
  }

}
