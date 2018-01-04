import { MessageService } from './message-list/message.service';
import { UsersService } from './users/users.service';
import { CommunityDetailsComponent } from './communities/community-details/community-details.component';
import { RegisterService } from './register/register.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CommunitiesComponent } from './communities/communities.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './register/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CommunityComponent } from './communities/community/community.component';
import { CommunityFormComponent } from './communities/community-form/community-form.component';
import { FilterComponent } from './communities/filter/filter.component';
import { CommunityListComponent } from './communities/community-list/community-list.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailCardComponent } from './message-detail-card/message-detail-card.component';
import { MessageFormComponent } from './message-form/message-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InfoComponent,
    CommunitiesComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CommunityComponent,
    CommunityFormComponent,
    FilterComponent,
    CommunityDetailsComponent,
    CommunityListComponent,
    UsersComponent,
    UserListComponent,
    MessageComponent,
    MessageListComponent,
    MessageDetailCardComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'info', component: InfoComponent},
      { path: 'communities', component: CommunitiesComponent, children: [
        { path: 'community-list', component: CommunityListComponent},        
        { path: 'community-form', component: CommunityFormComponent},
        { path: 'community-details/:id', component: CommunityDetailsComponent}
      ]},
      { path: 'register', component: RegisterComponent},
      { path: 'profile', component: ProfileComponent},
    ])
  ],
  providers: [RegisterService, UsersService, MessageService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
