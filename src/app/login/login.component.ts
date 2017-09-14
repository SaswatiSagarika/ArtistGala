import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
 
@Component({
  selector: 'demo-modal-service-static',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  pageTitle: string = `Log In`;
  public modalRef: BsModalRef;
  public modalRef2: BsModalRef;
   constructor(private modalService: BsModalService) {}
 
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  public openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, {class: 'second'});
  }
}