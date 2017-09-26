import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'app';

  loggedIn= false;

  constructor(private log: LoginService, private router: Router) {
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
  

}
