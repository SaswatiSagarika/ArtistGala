import { Component,OnInit,TemplateRef,ViewChild, ElementRef } from '@angular/core';
import { ArtService } from './art.service';
import { Art } from './art';

import { Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'artlist-root',
  templateUrl: 'Art-List.component.html'
})
export class ArtListComponent implements OnInit {
 public artObj : any;
  public _art:Art[];
  public userId;
  public modalRef: BsModalRef;
  art:Art;
   @ViewChild('AddnewModal') AddnewModal;
  public config = {
    
    backdrop: true,
    ignoreBackdropClick: true
  };
  constructor( private _artService : ArtService, private _router : Router, private modalService: BsModalService)
  {
     this.userId=localStorage.getItem("userId");  
    this.artObj = new Art();
  } 
 ngOnInit()
 {
   let data=this._artService.getlistDetail(this.userId).subscribe((art:Art) => this.art = art);
   alert(JSON.stringify(data));
   return data;
 }

 doEdit(x){
   this._router.navigate(["edit",x.id]);
 }
  newArtopen(){
      this.openModal(this.AddnewModal);
  }
  addNewArt(){
    this._artService.addArt(this.userId, this.artObj).
       subscribe((x) =>{alert("New Art is added");})
       this.doHide();
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,this.config);
    console.log(this.modalRef);
  }
  doHide()
 {
   this.modalRef.hide();
 }
}
