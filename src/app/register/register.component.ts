import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { PasswordValidation } from './password-validation';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import 'rxjs/Rx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  emailTaken = false;
  myForm: FormGroup;  
  passwordLength = 5;
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }

  onSubmit(){
    const user = new User(
      this.myForm.value.email,
      this.myForm.value.password,
      this.myForm.value.firstName,
      this.myForm.value.lastName
    );
    this.registerService.registerUser(user)
      .subscribe(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('name', data.name);
        this.router.navigateByUrl('/');
    });
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(this.passwordLength)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(this.passwordLength)]]
    }, {
      validator: PasswordValidation.MatchPassword
    }); 
  }

  checkEmailUniqueness(){
    console.log(this.myForm.get('email').value);
    var emailValue = this.myForm.get('email').value;
    this.registerService.checkEmailUniqueness(emailValue)
      .subscribe(response => {
        this.emailTaken = response['exists'];
        console.log(this.emailTaken);
      });
  }

}
