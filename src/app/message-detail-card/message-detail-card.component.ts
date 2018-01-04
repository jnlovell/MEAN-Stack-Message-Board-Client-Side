import { User } from './../models/user.model';
import { RegisterService } from '../register/register.service';
import { Message } from './../models/message.model';
import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-message-detail-card',
  templateUrl: './message-detail-card.component.html',
  styleUrls: ['./message-detail-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessageDetailCardComponent implements OnInit, OnChanges {
  @Input() message: Message;
  user = new User('', '', '', '', [], '');

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
   this.getUserForMessage();
  }

  ngOnChanges(){
    this.getUserForMessage();
  }

  getUserForMessage(){
    this.registerService.getUser(this.message.user)
    .subscribe(response => this.user = response['obj'],
      error => console.error(error)
    );
  }

}
