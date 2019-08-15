import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private http:HttpClient) { }
  url='http://localhost:3002/';
  count()
	{
		return this.http.post(this.url+'count',{});
  }
  users()
	{
		return this.http.post(this.url+'showusers',{});
  }
  updateuser(contact)
	{
		console.log("hello"+contact);
		return this.http.post(this.url+'update-users',{"contact":contact});

  }
  editPro(name,newcontact,gender,oldcontact)
	{
		return this.http.post(this.url+'edit-profile',{
			"name":name, "newcontact":newcontact, "gender":gender, "oldcontact":oldcontact
		});
	}
}
