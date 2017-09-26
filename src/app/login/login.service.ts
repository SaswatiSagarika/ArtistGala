import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { LoginComponent } from './login.component';
import { Login } from './login';

@Injectable()
export class LoginService {
  
    // change loggedIn to a subject
    private loggedIn: Subject<boolean> = new Subject<boolean>();

    // make isLoggedIn public readonly
    // isLoggedIn() {
    //     return this.loggedIn.asObservable();
    // }
    isLoggedIn(){
        return !!localStorage.getItem('token');
        
    }
    constructor(private _http: Http) {
        this.loggedIn.next(!!localStorage.getItem('token'));
     }

    getmelogin(login : Login): Observable<any> {
        return this._http.post("http://localhost:3000/api/Artists/login",{"email":login.email, "password":login.password})
            .map((response: Response) => <any> response.json());
    }
        logOut(): Observable<any>
    {
        
        
        return this._http.post("http://localhost:3000/api/Artists/logout",null)
       .map( (response : Response) => <any> response.json() );
   }

 }   
