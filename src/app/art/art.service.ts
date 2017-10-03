import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ArtListComponent } from './art-list.component';
import { Art } from './Art';

@Injectable()
export class ArtService {
  public art;
    constructor(private _http: Http) {
       
     }
    getlistDetail(id){
         let h = new Headers(); 
        h.append("x-access-token",localStorage.getItem('token'));
        let data =this._http.get("http://localhost:3000/api/Artists/"+id+"/Arts",{headers: h})
            .map((response: Response) => <any> response.json() as Art);
            
            return data;
    }
    
    editUser(id){
        let h = new Headers(); 
        h.append("x-access-token",localStorage.getItem('token'));
        return this._http.get("http://localhost:3000/api/Artists/"+id+"/Arts",{headers: h})
        .map((response: Response) => <any> response.json() as Art);
    }
    getArt(pid, fid) : Observable<Art>{
        let h = new Headers(); 
        h.append("x-access-token",localStorage.getItem('token'));
        return this._http.get("http://localhost:3000/api/Artists/"+pid+"/Arts"+fid,{headers: h})
        .map((response: Response) => <any> response.json() as Art);
    }
    editArt(id, art) : Observable<string>
    {
        let h = new Headers(); 
        h.append("x-access-token",localStorage.getItem('token'));
        return this._http.patch("http://localhost:3000/api/Artists/"+id+"/Arts"+art.id,art,{headers: h})
        .map((response: Response) => <any> response.json() as Art)
        .catch(this.errorHandle); ;
    }
      
    deleteArt(id, art) : Observable<Number>
    {
      
      let h = new Headers(); 
      h.append("x-access-token",localStorage.getItem('token'));
       return this._http.delete("http://localhost:3000/api/Artists/"+id+"/Arts"+art.id,{headers: h}).map((response : Response) =>  <string> response.json().count)
       .catch(this.errorHandle); 
    }
    addArt(id, art) : Observable<string>
    {
      
      let h = new Headers(); 
      h.append("x-access-token",localStorage.getItem('token'));
      console.log(JSON.stringify(h));
       return this._http.post("http://localhost:3000/api/Artists/"+id+"/Arts",art,{headers: h}).map((response: Response) => <any> response.json()); 
          
    }
    private errorHandle(error:Response)
    {
      
      console.error(error);
      return Observable.throw(error.json().error||'Server Error');
    }
 }   
