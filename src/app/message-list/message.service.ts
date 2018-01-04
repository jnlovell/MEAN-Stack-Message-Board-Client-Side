import { Observable } from 'rxjs/Rx';
import { Message } from '../models/message.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  baseUri = "http://localhost:3000/message"
  
  constructor(private httpClient: HttpClient) { }

  getMessagesByCommunityId(communityId){
    return this.httpClient.get<Message>(this.baseUri + '/' + communityId)
      .catch((error: Response) => {
        return Observable.throw(error)});
  }

  createNewMessage(message: Message){
    return this.httpClient.post<Message>(this.baseUri, message)
      .catch((error: Response) => {
        return Observable.throw(error)});
  }

}