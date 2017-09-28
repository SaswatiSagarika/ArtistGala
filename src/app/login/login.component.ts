import { Component, TemplateRef, OnInit, Output, EventEmitter} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {LoginService} from "./login.service";
import {Login} from "./login";
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'login-modal',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  pageTitle: string = `Log In`;
   public modalRef: BsModalRef;
   @Output() loggedInSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  public login : any;
  // change loggedIn to a subject
   private loggedIn: Subject<boolean> = new Subject<boolean>();
    //private loggedIn = false;
    // make isLoggedIn public readonly
    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }  
  constructor(private http:Http, private _loginService:LoginService, private _router: Router, private modalService: BsModalService) {
      this.login = new Login();
        this.loggedIn.next(!!localStorage.getItem('token'));
    }
    public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    }
     getmelogged(){
      this._loginService.getmelogin(this.login).
       subscribe((x) =>{
        
         localStorage.setItem('token',x.id);
         localStorage.setItem('userId',x.userId);
         this.loggedInSuccess.emit(true);
        this._router.navigate(['/detail']);
        this.modalRef.hide();
        },
    error => {
      console.log("error in login = " + JSON.stringify(error));
    })
     }
  
  doHide()
 {
   this.modalRef.hide();
 } 

 }