import { Component, TemplateRef } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'app';

  public loggedIn= false;
public modalRef: BsModalRef;
 public modalRef2: BsModalRef;
  constructor(private log: LoginService, private router: Router, private modalService: BsModalService) {
    this.loggedIn = this.log.isLoggedIn();
    
  }
  doLogOut()
{
  
    
    this.loggedIn= false;
    let token= !!localStorage.getItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    this.router.navigate(["welcome"]);
    return token;
    
} 

handleLoginSuccess(): void {
  this.loggedIn = true;
}
 public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    } 
public openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, {class: 'modal-sm'});
    }
}
