import { Component,OnInit,TemplateRef,ViewChild, ElementRef } from '@angular/core';
import { ArtService } from './art.service';
import { Art } from './art';

import { Router, ActivatedRoute} from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";


@Component({
  selector: 'artaddnew-root',
  templateUrl: 'Art-addnew.component.html'
})
export class ArtaddComponent {
     public art : any;
       public userId;
       public modalRef: BsModalRef;
constructor(private http:Http, private _artService:ArtService) {
      this.art = new Art();
       this.userId=localStorage.getItem("userId");  
    }
  addNewArt(){
    this._artService.addArt(this.userId, this.art).
       subscribe((x) =>{alert("New Art is added");});
  }  
     doHide()
 {
   this.modalRef.hide();
 }
}