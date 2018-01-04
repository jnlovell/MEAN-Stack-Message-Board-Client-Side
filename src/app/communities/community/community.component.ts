import { error } from 'util';
import { Router } from '@angular/router';
import { CommunitiesService } from './../communities.service';
import { User } from './../../models/user.model';
import { RegisterService } from '../../register/register.service';
import { Community } from '../../models/community.model';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers: [CommunitiesService],
  encapsulation: ViewEncapsulation.None
})
export class CommunityComponent implements OnInit {
  @Input() community: Community;
  owner = new User(" ", " ", " ", " ", []," ");
  belongsToCurrentUser = false;
  userAlreadyAdded = false;
  constructor(private registerService: RegisterService,private communitiesService: CommunitiesService, private router: Router) { }

  ngOnInit() {
    var currentUserId = localStorage.getItem('userId');
    this.registerService.getUser(this.community.owner)
      .subscribe(response => {
        this.owner = response['obj'];
        if(currentUserId == response['obj']['_id']){
          this.belongsToCurrentUser = true;
        }
        var findUser = this.community.members.find(function(id){
          return id == currentUserId;
        });
        if(findUser != null)
          this.userAlreadyAdded = true;
      },
      error => console.log(error));
  }

  joinCommunity(){
    var userId = localStorage.getItem('userId');
    var communityId = this.community._id;
    this.communitiesService.addUser(userId, communityId)
      .subscribe(response => {
        console.log(response);
        this.router.navigateByUrl('/communities/community-list');
        this.userAlreadyAdded = true;
        this.community = response['obj'];        
      },
      error => console.log(error));
  }

  leaveCommunity(){
    var userId = localStorage.getItem('userId');
    var communityId = this.community._id;
    this.communitiesService.removeUser(userId, communityId)
      .subscribe(response => {
        console.log(response);
        this.router.navigateByUrl('/communities/community-list');
        this.userAlreadyAdded = false;
        this.community = response['obj'];        
      },
      error => console.log(error));
  }

  

}
