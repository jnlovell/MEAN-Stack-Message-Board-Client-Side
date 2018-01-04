import { RegisterService } from './../../register/register.service';
import { Community } from '../../models/community.model';
import { CommunitiesService } from './../communities.service';
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [CommunitiesService],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {
  @Output() emitter: EventEmitter<Community[]> = new EventEmitter<Community[]>();
  communities: Community[];
  filterMode = 1;
  constructor(private communitiesService: CommunitiesService, private registerService: RegisterService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.communitiesService.getAll()
    .subscribe(response => {
      console.log(response);
      this.communities = response['obj'];
      this.emitter.emit(this.communities);
      this.filterMode = 1;
    });
  }

  filterByCurrentUser(){
    var currentUserId = localStorage.getItem('userId').valueOf();
    this.communitiesService.getByUserId(currentUserId)
      .subscribe(response => {
        console.log(response);
        this.communities = response['obj'];
        this.emitter.emit(this.communities);
        this.filterMode = 2;
      });
  }

}
