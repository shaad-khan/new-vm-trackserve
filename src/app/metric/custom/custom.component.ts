import { Component, OnInit } from '@angular/core';
import {CustomService} from "./custom.service";
import 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
  providers:[CustomService]
})
export class CustomComponent implements OnInit {
 public nprc;
 public bprc;
 public qprc;
 public iprc;
 public pprc;
 public peprc;
 public prcsinfo;
 public query;
public loadp:boolean=true;
  //<<<---    using ()=> syntax
    //this. = false
  constructor(private _cservice:CustomService) { }

  ngOnInit() {

    this._cservice.prcs_count_info("NoSuccessError")
       // only gets fired once
      .subscribe((data) => {
        this.nprc = data;
        
      });
       this._cservice.prcs_count_info("Pending")
       // only gets fired once
      .subscribe((data) => {
        this.peprc = data;
        
      });
     this._cservice.prcs_count_info("Blocked")
       // only gets fired once
      .subscribe((data) => {
        this.bprc = data;
        
      });
        this._cservice.prcs_count_info("Queued")
       // only gets fired once
      .subscribe((data) => {
        this.qprc = data;
        
      });
       this._cservice.prcs_count_info("Processing")
       // only gets fired once
      .subscribe((data) => {
        this.pprc = data;
        
      });
      this._cservice.prcs_count_info("Initiated")
       // only gets fired once
      .subscribe((data) => {
        this.iprc = data;
        
      });

  }

open(x)
{
  console.log(x);
  this.query=x;
  setTimeout(()=>{    //<<<---    using ()=> syntax
    this.loadp = false;
    console.log(this.loadp);
},3000);

this._cservice.prcs_info("Advantage").subscribe((data)=>{
  this.prcsinfo=data;

});









}




}
