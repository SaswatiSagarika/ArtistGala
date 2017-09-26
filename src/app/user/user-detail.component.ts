import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { UserService} from './user.service';
import {User} from './user';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
 
@Component({
  
  templateUrl: './user-detail.component.html',
 // providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
  
})
export class UserDetailComponent implements OnInit{
 public userId:string;
 public user:User;
  constructor(private _userService:UserService, private _router: Router) {
    
      this.userId=localStorage.getItem("userId");
    }
  ngOnInit(): void { 
        this._userService.getUserDetail(this.userId).subscribe((user: User) => this.user = user);
    
    }
      doblock(){
     this._userService.blockme(this.userId).
       subscribe((x) =>{alert("your  account is blocked");})
  }
}