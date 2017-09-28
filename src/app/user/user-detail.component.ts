import { Component, OnInit ,TemplateRef} from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { UserService} from './user.service';
import { LoginService} from './../login/login.service';
import {User} from './user';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
 
@Component({
  
  templateUrl: './user-detail.component.html',
 // providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
  
})
export class UserDetailComponent implements OnInit{
 public userId:string;
 public user:User;
 public loggedIn;
 public modalRef: BsModalRef;
  constructor(private _userService:UserService,private log:LoginService, private _router: Router, private modalService: BsModalService) {
    this.loggedIn = this.log.isLoggedIn();
      this.userId=localStorage.getItem("userId");
    }
  ngOnInit(): void { 
        this._userService.getUserDetail(this.userId).subscribe((user: User) => this.user = user);
    
    }
      doblock(){
     this._userService.blockme(this.userId).
       subscribe((x) =>{alert("your  account is blocked");})
  }
      public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    } 
  handleLoginSuccess(): void {
  this.loggedIn = true;
}
}