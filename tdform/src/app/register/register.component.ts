import { Component, OnInit } from '@angular/core';
import { Profiles } from '../profiles';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname!:string;
  lastname!:string;
  email!:string;
  phone!:string;
  male!:string;
  female!:string;
  profile!:string;

  profiles:Profiles[]=[
    new Profiles(1,"Java Fullstack"),
    new Profiles(2,"MEAN Stack"),
    new Profiles(3,"MERN Stack")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(registerForm: { value: any; })
  {
    console.log(registerForm.value);
  }

}
