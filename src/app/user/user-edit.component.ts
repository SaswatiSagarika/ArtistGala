import { Component, TemplateRef, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {UserService} from "./user.service";
import {User} from "./user";
import { Router } from '@angular/router';

@Component({
  selector: 'edit-modal',
  templateUrl: 'User-edit.component.html'
})

export class UserEditComponent {
    public userId:string;
 public user:User;
  constructor(private _userService:UserService, private _router: Router) {
    
      this.userId=localStorage.getItem("userId");
    }
  ngOnInit(): void { 
        this._userService.getUserDetail(this.userId).subscribe((user: User) => this.user = user);
    
    }
    doEdit()
    {
        //alert(this.userId);
        //alert(this.user.id);
        this._userService.editUser(this.user).
   subscribe((x)=>{
     
     
     alert("You have sucessfully edited the blog");
     //this.openModal(this.sriya);
     this._router.navigate(["\detail"]); 
      
    });
    }
}