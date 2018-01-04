import { User } from './../../models/user.model';
import { Community } from '../../models/community.model';
import { UsersService } from './../users.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {
  @Input() community: string;
  @Input() listHeading: string;
  @Input() owner: string;
  private users: User[];
  private currentUser: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsersByCommunity(this.community)
      .subscribe(response => {
        this.users = response['obj'];
      },
      error => console.log(error)
    );

    this.currentUser = localStorage.getItem('userId');
  }

}
