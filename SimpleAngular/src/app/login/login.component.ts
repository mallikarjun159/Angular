import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  name=new FormGroup(
   { firstname: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,  Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)])
   },
//    ^ - start of string (implicit in string regex pattern)
// (?=\D*\d) - there must be 1 digit
// (?=[^a-z]*[a-z]) - there must be 1 lowercase ASCII letter
// (?=[^A-Z]*[A-Z]) - there must be 1 uppercase ASCII letter
// .{8,30} - any 8 to 30 chars other than line break chars
// $ - end of string (implicit in string regex pattern).
  ) 
  onSubmit(){
   // console.log(this.name.value.firstname) // get firstname from the form data;
   localStorage.setItem('name', 'Mallikarjun'); // set locallstorage after login
   
   console.log(this.name.value)
  }

}
 