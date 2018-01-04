import { RouterLink } from '@angular/router';
import { RegisterService } from './../register/register.service';
import { Community } from './../models/community.model';
import { CommunitiesService } from './communities.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css'],
  providers: [CommunitiesService],
  encapsulation: ViewEncapsulation.None
})
export class CommunitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*this.communitesService.getAll()
      .subscribe(response => {
        this.communities = response['obj'];
      });*/
  }



}
