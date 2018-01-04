import { Observable } from 'rxjs/Rx';
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  private baseUri = "http://localhost:3000/user"
  
  constructor(private httpClient: HttpClient) { }

  getUsersByCommunity(communityId: string){
    return this.httpClient.get<User>(this.baseUri + "/getByCommunityId/" + communityId )
    .catch((error: Response) => {
      return Observable.throw(error)});
  }
}
