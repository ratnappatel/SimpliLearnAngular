import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  public username!:string;
  public password!:string;
  public error!:string;

  ngOnInit(): void {
    // will contain code logic to be executed during an instantiation of the component class
  }
  submit(){
    this.auth.login(this.username,this.password).pipe(first())
    .subscribe(result=>this.router.navigate(['todos']),err=>this.error='could not authenticate..');
  }

}
