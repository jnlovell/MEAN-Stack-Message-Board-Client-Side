import { Router } from '@angular/router';
import { CommunitiesService } from '../communities.service';
import { Community } from './../../models/community.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-community-form',
  templateUrl: './community-form.component.html',
  styleUrls: ['./community-form.component.css'],
  providers: [CommunitiesService],
  encapsulation: ViewEncapsulation.None
})
export class CommunityFormComponent implements OnInit {
  myForm: FormGroup;
  nameTaken = false;
  constructor(private fb: FormBuilder, private communitiesService: CommunitiesService, private router: Router) { }

  onSubmit(){
    const community = new Community(
      this.myForm.value.name,
      localStorage.getItem('userId').toString(),
      this.myForm.value.topic,
      this.myForm.value._public
    );
    this.communitiesService.create(community)
      .subscribe(response => {
        console.log(response);
        this.router.navigateByUrl('/communities/community-list');        
      });
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: [null, Validators.required],
      topic: [null, Validators.required],
      _public: false,
    }); 
  }


  checkNameUniqueness(){
    var nameValue = this.myForm.get('name').value;
    this.communitiesService.checkNameUniqueness(nameValue)
      .subscribe(response => {
        this.nameTaken = response['exists'];
        console.log(this.nameTaken);
      });
  }

}
