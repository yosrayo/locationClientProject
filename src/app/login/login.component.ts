import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u = {} as any;
  user: User = new User;
  users: User[] = [];
  h: any;
  i!: string;
  b=false;
  email!: string;
  password!: string;
  id!: number;
  constructor( private router: Router,private userService:UserService) { }

  ngOnInit(): void {
    this.user= new User();
    this.userService.getUsers().subscribe((res) => {
      this.u = res;
      
    });
    this.getUsers();
   
  }

  getUsers()
  {
    this.userService.getUsers().subscribe((res) => {
      this.u = res;
     
    });  
  }


  connexion() {
    for(let us of this.u)
    {
      console.log("loop");
      if((this.user.email==us.email)&&(this.user.password==us.password))
     { 
    this.b=true;
      this.h = us ;
    localStorage.setItem("id",JSON.stringify(this.h.id));
    localStorage.setItem("user",JSON.stringify(this.h));
  
    window.location.replace("biens");
   
    localStorage.setItem("name",this.i);
    
    
     }
    
    }
        
      
        if(!this.b)
        {
          alert("compte non reconnu!");
        }
      
    }
  }


