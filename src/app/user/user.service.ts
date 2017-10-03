import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { UserDetailComponent } from './user-detail.component';
import {User} from './User';

@Injectable()
export class UserService {
    public user;
 
    constructor(private _http: Http) {
       
     }
    
    getUserDetail(id): Observable<User>{
        let h = new Headers(); 
        h.append("x-access-token",localStorage.getItem('token'));
        return this._http.get("http://localhost:3000/api/Artists/"+id,{headers: h})
            .map((response: Response) => <any> response.json() as User);
    }
        editUser(user) : Observable<string>
    {
      //alert(user.id);
      let h = new Headers(); 
      h.append("x-access-token",localStorage.getItem('token'));
       return this._http.patch("http://localhost:3000/api/Artists/"+user.id,user,{headers: h}).map((response : Response) =>  <string> response.json().Name);
       
          
    }
    blockme(id){
            let h = new Headers(); 
      h.append("x-access-token",localStorage.getItem('token'));
       return this._http.delete("http://localhost:3000/api/Artists/"+id,{headers: h}).map((response : Response) =>  <string> response.json().Name);
    }
    ChangePassword(user){
         if(user.newPassword == user.cPassword){
            let h = new Headers(); 
      h.append("x-access-token",localStorage.getItem('token'));
       return this._http.post("http://localhost:3000/api/Artists/change-password",user,{headers: h});
        }else{
            alert("password and conform password should be same") ;
        }
    }
 }   
