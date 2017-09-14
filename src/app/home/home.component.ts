import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
 
@Component({
  
  templateUrl: './home.component.html',
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})
export class HomeComponent {
}