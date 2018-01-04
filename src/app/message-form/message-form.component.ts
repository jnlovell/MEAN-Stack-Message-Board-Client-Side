import { MessageService } from './../message-list/message.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Community } from './../models/community.model';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessageFormComponent implements OnInit {
  @Input() communityId;
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }


  onSubmit(){
    const message = new Message(
      this.myForm.value.message,
      '',
      this.communityId,
      localStorage.getItem('userId').toString(),
    );
    

    this.messageService.createNewMessage(message)
      .subscribe(response => {
        console.log(response);
      }); 
    this.myForm.reset();
    console.log(message);
  }


  ngOnInit() {
    this.myForm = this.fb.group({
      message: [null, Validators.required]
    }); 
  }

}
