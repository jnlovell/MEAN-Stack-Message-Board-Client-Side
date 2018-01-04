import { Observable } from 'rxjs/Rx';
import { Community } from './../models/community.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommunitiesService {
  baseUri = "http://localhost:3000/community"
  
  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Community>(this.baseUri + "/")
      .catch((error: Response) => {
        return Observable.throw(error)});
  }

  getCommunity(communityId){
    return this.httpClient.get<Community>(this.baseUri + "/" + communityId)
    .catch((error: Response) => {
      return Observable.throw(error)});
  }

  getByUserId(userId){
    return this.httpClient.get<Community>(this.baseUri + "/getByUserId/" + userId)
    .catch((error: Response) => {
      return Observable.throw(error)});
  }

  create(community: Community){
    return this.httpClient.post<Community>(this.baseUri, community)
      .catch((error: Response) => {
        return Observable.throw(error)});
  }

  addUser(userId, communityId){
    return this.httpClient.get<Community>(this.baseUri + '/addUser/' + userId + "/" + communityId)
    .catch((error: Response) => {
      return Observable.throw(error)});
  }

  removeUser(userId, communityId){
    return this.httpClient.get<Community>(this.baseUri + '/removeUser/' + userId + "/" + communityId)
    .catch((error: Response) => {
      return Observable.throw(error)});
  }

  checkNameUniqueness(name){
    return this.httpClient.get(this.baseUri + '/checkName/' + name);
  }
}
