import { Component, TemplateRef, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {LoginService} from "./login.service";
import {Login} from "./login";
import { Router } from '@angular/router';

@Component({
  selector: 'login-modal',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  pageTitle: string = `Log In`;
  
  public login : any;
   public modalRef: BsModalRef;
  constructor(private http:Http, private _loginService:LoginService, private _router: Router) {
      this.login = new Login();
    }

     getmelogged(){
      this._loginService.getmelogin(this.login).
       subscribe((x) =>{
        
         localStorage.setItem('token',x.id);
         localStorage.setItem('userId',x.userId);
        this._router.navigate(['/detail']);
        
        })
     }
    
  doHide()
 {
   this.modalRef.hide();
 } 

 }