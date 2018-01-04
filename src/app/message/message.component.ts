import { RegisterService } from './../register/register.service';
import { User } from './../models/user.model';
import { UsersService } from '../users/users.service';
import { Message } from './../models/message.model';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessageComponent implements OnInit {
  @Input() message = new Message('','','','');
  @Output() emitter: EventEmitter<Message> = new EventEmitter<Message>();  
  user = new User('','', '','', [],'');
  messageSummary = '';

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.registerService.getUser(this.message.user)
      .subscribe(response => {
        this.user = response['obj'];
        this.messageSummary = this.message.message.substring(0, 50);
        if(this.messageSummary.length == 50){
          this.messageSummary = this.messageSummary + "...";
        }
      },
      error => console.error(error)
      );
  }

  emmitMessage(){
    this.emitter.emit(this.message);    
  }

}
