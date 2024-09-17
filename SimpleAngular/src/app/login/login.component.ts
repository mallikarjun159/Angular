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
   
  ) 
  onSubmit(){
   // console.log(this.name.value.firstname) // get firstname from the form data;
   localStorage.setItem('name', 'Mallikarjun'); // set locallstorage after login
   
   console.log(this.name.value)
  }

}
