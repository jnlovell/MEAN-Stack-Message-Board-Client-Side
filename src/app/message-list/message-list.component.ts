import { element } from 'protractor';
import { Message } from './../models/message.model';
import { MessageService } from './message.service';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessageListComponent implements OnInit {
  @Input() communityId = "";
  @Output() emitter: EventEmitter<Message> = new EventEmitter<Message>();  
  
  messages: Message[] = [];
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessages();
    setInterval(() => {
      this.getMessages();
    }, 1000);
  }

  private getMessages(){
    this.messageService.getMessagesByCommunityId(this.communityId)
    .subscribe(response =>  { this.updateMessageArray(response['obj'])},
      error => console.error(error)
    )
  }

  private updateMessageArray(response: any[]){
    response.forEach(element => {
      let itemIndex = this.messages.findIndex(item => item._id == element._id);
      if(itemIndex == -1){
        this.messages.unshift(element);
      }
    });
  }

  emmitMessage(message: Message){
    this.emitter.emit(message);    
  }

}
