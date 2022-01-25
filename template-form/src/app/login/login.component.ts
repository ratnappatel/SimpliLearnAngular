import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public user!:Account;

  constructor(private route:Router) { this.user=new Account(); }

  ngOnInit(): void {
  }

  onSubmit()
  {
    if(this.user.email=='abc' && this.user.password=='abc')
      this.route.navigate(['home']);
    else
      this.route.navigate(['error']);
  }
}
