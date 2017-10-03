import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {UserService} from "./user.service";
import {User} from "./user";
@Component({
  selector: 'password-modal',
  templateUrl: 'user-changepwd.component.html'
})
export class PasschangeComponent {
  pageTitle: string = `Change Password`;
 public user : any;
  constructor(private http:Http, private _UserService:UserService) {
      this.user = new User();
    }

     Changepwd(){
      this._UserService.ChangePassword(this.user).
       subscribe((x) =>{alert("your password is changed");})
     }
  
}