import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData =  {} as any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }



  registerUser() {
    this.userService.create(this.registerUserData)
    .subscribe(
      res => {
        this.router.navigate(['/login']);
      },
      err => console.log(err)
    );

  }
}
