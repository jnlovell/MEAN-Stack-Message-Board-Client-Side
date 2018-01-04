import { Router } from '@angular/router';
import { RegisterService } from './../register/register.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.registerService.logout();
    this.router.navigateByUrl('/');        
  }

}
