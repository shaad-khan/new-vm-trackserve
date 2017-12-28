import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class AppmonitordataService {

  constructor(private _http:Http) { }
  appserverinfo(x:String,token?:string|number)
  {
    
      if(token==null)
      {
      return this._http.get('http://40.112.219.53:30012/appserver/'+x)
      .map((res:Response)=>res.json());
    }
    else{
      return this._http.get('http://40.112.219.53:30012/appserver/'+x+'/'+token)
      .map((res:Response)=>res.json());
    }
  }
  prcsinfo(x:String,token?:string|number)
  {
    
      if(token==null)
      {
      return this._http.get('http://40.112.219.53:30012/prcs/'+x)
      .map((res:Response)=>res.json());
    }
    else{
      return this._http.get('http://40.112.219.53:30012/prcs/'+x+'/'+token)
      .map((res:Response)=>res.json());
    }
  }
  prcsmoreinfo(x:String,token?:string|number)
  {
    console.log("hit url");
    
      if(token==null)
      {
      return this._http.get('http://40.112.219.53:30012/sqlcheck/all/'+x)
      .map((res:Response)=>res.json());
    }
    /*else{
      return this._http.get('http://40.112.219.53:30012/prcs/'+x+'/'+token)
      .map((res:Response)=>res.json());
    }*/
  }


}
