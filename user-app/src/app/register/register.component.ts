import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registrationForm=new FormGroup({
    name:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.pattern("^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$")),
    email:new FormControl('',Validators.email),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    cpassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
    country:new  FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    tc:new FormControl('',Validators.requiredTrue)
  });

  getNameControl()
  {
    return this.registrationForm.get('name');
  }

getNameErrors()
{
    const nameControl=<FormControl>this.getNameControl();
    if(nameControl.invalid && (nameControl.dirty || nameControl.touched ))
      return 'Name Must not Left Blank';
      else
        return ''
    
}

}
