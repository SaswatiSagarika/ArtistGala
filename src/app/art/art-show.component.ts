import { Component,OnInit,TemplateRef,ViewChild, ElementRef } from '@angular/core';
import { ArtService } from './art.service';
import { Art } from './art';

import { Router,ActivatedRoute } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'artshow-root',
  templateUrl: 'Art-edit.component.html'
})
export class ArtShowComponent {
   public userId:string;
 public art:Art;
 public show: boolean = false;
  constructor(private _artService:ArtService, private _activrout:ActivatedRoute, private _router: Router) {
    
      this.userId=localStorage.getItem("userId");
    }
  ngOnInit(): void { 
        let id = +this._activrout.snapshot.params['id'];
        this._artService.getArt(this.userId, id).subscribe((art: Art) => this.art = art);
    
    }
    doEdit()
    {
        this._artService.editArt(this.userId, this.art).
        subscribe((x)=>{
            this.show=true;
            
            alert("You have sucessfully edited the blog");
            //this.openModal(this.sriya);
            this._router.navigate(["\list"]);
            });
    }
}