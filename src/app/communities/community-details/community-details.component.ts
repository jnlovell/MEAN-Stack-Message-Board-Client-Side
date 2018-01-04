import { error } from 'util';
import { User } from './../../models/user.model';
import { RegisterService } from '../../register/register.service';
import { Message } from '../../models/message.model';
import { Community } from './../../models/community.model';
import { CommunitiesService } from './../communities.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-community-details',
  templateUrl: './community-details.component.html',
  styleUrls: ['./community-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CommunityDetailsComponent implements OnInit {
  communityId = "";
  community = new Community('', '', '', false);
  messageDetail = new Message('', '', '', '');
  toggleMessageDetail = false;

  constructor(private route: ActivatedRoute, private communitiesService: CommunitiesService) { }

  async ngOnInit() {
    await this.route.params.subscribe( params => this.communityId = params['id']);
    await this.communitiesService.getCommunity(this.communityId)
      .subscribe(response => this.community = response['obj']);
  }

  emmitMessage(message: Message){
    console.log(message);
    this.messageDetail = message;
    this.toggleMessageDetail = true;
  }

}
