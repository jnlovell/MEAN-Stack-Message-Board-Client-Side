import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from './../register.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  failedLogin = false;
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required)
  });
  }

  onSubmit(){
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    this.registerService.signin(user)
      .subscribe(
        data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('name', data.name);
            this.router.navigateByUrl('/');
            this.myForm.reset();            
        },
        error => {
          console.error(error);
          this.failedLogin = true;
          this.myForm.get('password').reset();
        });
  }

}
