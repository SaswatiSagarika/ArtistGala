import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {RegistrationService} from "./registration.service";
import {Registration} from "./registration";
@Component({
  selector: 'registration-modal',
  templateUrl: 'registration.component.html'
})
export class RegistrationComponent {
  pageTitle: string = `New User`;
  public registration : any;
  constructor(private http:Http, private _registrationService:RegistrationService) {
      this.registration = new Registration();
    }

     getmeregistered(){
      this._registrationService.getmeregistered(this.registration).
       subscribe((x) =>{alert("you are registrered");})
     }
  
}