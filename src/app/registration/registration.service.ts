import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { RegistrationComponent } from './registration.component';
import { Registration } from './registration';

@Injectable()
export class RegistrationService {
   

    constructor(private _http: Http) { }

    getmeregistered(registration : Registration): Observable<any> {
        if(registration.password === registration.password2){
            return this._http.post("http://localhost:3000/api/Artists",{"username":registration.username,"email":registration.email, "password":registration.password})
            .map((response: Response) => <any> response.json());
        } else {
            alert("password and conform password should be same") ;
        }
    }

 }   
