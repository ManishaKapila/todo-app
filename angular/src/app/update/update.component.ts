import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private s1: S1Service,private parameter: ActivatedRoute,private router: Router) 
  {this.s1.updateuser(this.parameter.snapshot.params.contact).subscribe((res)=>{
    
      this.name=res[0].name;
      this.contact=res[0].contact;
      this.gender=res[0].gender;
      

      console.log(res);
    });

  }

name;
contact;
gender;
oldcontact;

Save()
  {
    this.oldcontact =this.parameter.snapshot.params.contact;    
    this.s1.editPro(this.name,this.contact,this.gender,this.oldcontact).subscribe((res:any)=>{
      //this.saved=res;
      // localStorage.setItem("username", this.email);
      alert("Details Updated!!!");
      console.log(res);
      this.router.navigate(['/user']);
    });
  }

  ngOnInit() {
  }

}
