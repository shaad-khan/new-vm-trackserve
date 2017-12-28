import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CustomService {

  constructor(private _http:Http) { }
  prcs_count_info(x:String,token?:string|number)
  {

 if(token==null)
      {
      return this._http.get('http://40.112.219.53:30012/sqlcheck/Advantage/'+x)
      .map((res:Response)=>res.json());
    }
    /*else{
      return this._http.get('http://40.112.219.53:30012/cpu/'+x+'/'+token)
      .map((res:Response)=>res.json());
    }*/

  }
  prcs_info(x:String,token?:string|number)
  {

 if(token==null)
      {
      return this._http.get('http://40.112.219.53:30012/sqlcheck/all/'+x)
      .map((res:Response)=>res.json());
    }
    /*else{
      return this._http.get('http://40.112.219.53:30012/cpu/'+x+'/'+token)
      .map((res:Response)=>res.json());
    }*/

  }


}
