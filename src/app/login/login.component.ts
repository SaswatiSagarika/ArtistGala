import { Component, TemplateRef, OnInit, Output, EventEmitter} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {LoginService} from "./login.service";
import {Login} from "./login";
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'login-modal',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  pageTitle: string = `Log In`;
   public modalRef: BsModalRef;
   form: FormGroup;
   @Output() loggedInSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  public login : any;
  // change loggedIn to a subject
   private loggedIn: Subject<boolean> = new Subject<boolean>();
    //private loggedIn = false;
    // make isLoggedIn public readonly
    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }  
  constructor(private http:Http,private formBuilder: FormBuilder, private _loginService:LoginService, private _router: Router, private modalService: BsModalService) {
      this.login = new Login();
        this.loggedIn.next(!!localStorage.getItem('token'));
        this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
    
    }
  
    public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    }
     getmelogged(){
       if (this.form.valid) {
          this._loginService.getmelogin(this.login).
          subscribe((x) =>{
            
            localStorage.setItem('token',x.id);
            localStorage.setItem('userId',x.userId);
            this.loggedInSuccess.emit(true);
            this._router.navigate(['/detail']);
            
            },
        error => {
          console.log("error in login = " + JSON.stringify(error));
        })
       } else {
         //this.validateAllFormFields(this.form);
       }
     }
  
  doHide()
 {
   this.modalRef.hide();
 } 
   isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }
  });
}
reset(){
    this.form.reset();
  }
 }