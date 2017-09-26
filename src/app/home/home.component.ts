import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
 
@Component({
  
  templateUrl: './home.component.html',
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public isCollapsed:boolean = false;
 
  public collapsed(event:any):void {
    console.log(event);
  }
 
  public expanded(event:any):void {
    console.log(event);
  }
}