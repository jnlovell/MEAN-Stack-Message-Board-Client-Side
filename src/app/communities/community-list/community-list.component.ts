import { RegisterService } from './../../register/register.service';
import { CommunitiesService } from './../communities.service';
import { Community } from './../../models/community.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CommunityListComponent implements OnInit {

  communities: Community[] = [];
  
    constructor(private communitesService: CommunitiesService, private registerService: RegisterService) { }
  
    ngOnInit() {
      /*this.communitesService.getAll()
        .subscribe(response => {
          this.communities = response['obj'];
        });*/
    }
  
    applyFilter(event){
      console.log(event);
      this.communities = event;
    }

}
