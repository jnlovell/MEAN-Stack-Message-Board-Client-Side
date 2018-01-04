import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {
  baseUri = "http://localhost:3000/user"

  constructor(private httpClient: HttpClient) { }

  registerUser(user: User){
    return this.httpClient.post<User>(this.baseUri, user)
      .catch((error: Response) => {
        return Observable.throw(error)});
  }


  signin(user: User){
    return this.httpClient.post<User>('http://localhost:3000/user/signin', user)
        .catch((error: Response) => {
            return Observable.throw(error)}
          );
  }

  logout(){
    localStorage.clear();
  }

  loggedIn(){
    if(localStorage.getItem("userId") != null)
    {
      return true;
    }  
    return false;
  }

  getUser(userId: String){
    return this.httpClient.get<User>('http://localhost:3000/user/' + userId)
    .catch((error: Response) => {
        return Observable.throw(error)}
      );
  }

  currentUser() {
    if(localStorage.getItem("name") != null)
      return localStorage.getItem("name").toString();
    else
      return "";
  }

  checkEmailUniqueness(email){
    return this.httpClient.get(this.baseUri + '/checkEmail/' + email);
  }
}
