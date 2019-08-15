import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url='http://localhost:3002/';


  constructor(public http:HttpClient) { }
register(name,password,contact,gender)
{
  return this.http.post(this.url+'logins',{
    
    "name":name,
    "password":password,
    "contact":contact,
    "gender":gender
  });
}
  find(contact){
    this.http.post(this.url + 'search',{contact});
  }
  add(contact,task)
  {
    return this.http.post(this.url+'add',{
      "contact":contact,
      "task":task
    });
  }
  addreminder(contact,title,date,time)
  {
    return this.http.post(this.url+'addremind',{
      "contact":contact,
      "title":title,
      "date":date,
      "time":time
    });
  }
  addac(contact)
  {
    return this.http.post(this.url+'addacc',{
      "contact":contact
      
    });
  }
  stask(contact)
  {
    console.log("search task"+contact);
    return this.http.post(this.url+'searchtask',{contact});
  }
  srem(contact)
  {
    console.log("search reminder"+contact);
    return this.http.post(this.url+'searchreminder',{contact});
  }
  
  completeTask(contact,task)
    {
      return this.http.delete(this.url+'delete-task?contact='+contact+'&task='+task);
    }
    showcomplete(contact){
      console.log("find task"+contact);
      return this.http.post(this.url+'showcomplete',{contact});
     
    }
}
