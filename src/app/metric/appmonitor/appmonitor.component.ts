import { Component, OnInit } from '@angular/core';
import { PfilterPipe } from "./pfilter.pipe";
import {AppmonitordataService} from './appmonitordata.service';
import {Appmodel} from './appmodel';
import 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appmonitor',
  templateUrl: './appmonitor.component.html',
  styleUrls: ['./appmonitor.component.css'],
  
  providers:[AppmonitordataService],
  
})
export class AppmonitorComponent implements OnInit {
  [x: string]: any;
  public appserverm: Appmodel;
  public sub;
  public client;
  public closeResult;
  public appdata:any;
  public prcf:any;
  //public prcsdata:any;
  public gtype;
  public imodalsub:any;
  public loadf:boolean=true;
  public imain;
  public prcsc:any;
  public prcsdata:any;
  public iprcsinfo:any;
  public moreprcsinfo:any;
  public dbaset;
  constructor(private modalService: NgbModal,private _appdata:AppmonitordataService,private route: ActivatedRoute) { }

  ngOnInit() {
this.sub = this.route.params.subscribe(params => {
       this.client = params['client'];
this.client=capitalizeFirstLetter(this.client);
       function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
       }
});





this._appdata.appserverinfo(this.client)
       // only gets fired once
      .subscribe((data) => {
        this.appserverm = data;
        
      });
      this._appdata.prcsinfo(this.client)
      // only gets fired once
     .subscribe((data) => {
       this.prcsc = data;
       
     });

this.imain=this.getappdata();
this.iprcsc=this.getprcsdata();




  }
/*-------------------------Function Call to IntervalObservable ---*/
getappdata()
{
return IntervalObservable.create(3000) // only fires when component is alive
      .subscribe(() => {
        this._appdata.appserverinfo(this.client)
          .subscribe(data => {
            this.appserverm = data; 
          });
      });
}

getprcsdata()
{
return IntervalObservable.create(3000) // only fires when component is alive
      .subscribe(() => {
        this._appdata.prcsinfo(this.client)
          .subscribe(data => {
            this.prcsc = data; 
          });
      });
}

moreprc(servername){
  console.log(servername);
  this._appdata.prcsmoreinfo('Advantage')
  // only gets fired once
 .subscribe((data) => {
   this.moreprcsinfo = data;
   
 });
}
  openc(type:string)
  {
   this.unsuscribe_service(this.imain);
//this.iprcsc.unsubscribe();
this.unsuscribe_service(this.iprcsc);

     setTimeout(()=>{    //<<<---    using ()=> syntax
      this.loadf = false;
 },3000);
    this.gtype=type;
    this._appdata.appserverinfo(this.client)
       // only gets fired once
      .subscribe((data) => {
        this.appdata = data;
        
      });

this.imodalsub=IntervalObservable.create(3000) // only fires when component is alive
      .subscribe(() => {
        this._appdata.appserverinfo(this.client,type)
          .subscribe(data => {
           // this.zone.run(() => {
             
            this.appdata = data;
           // this.ref.detectChanges();
            //})
            //console.log(this.appData);
          
          });
      });
  }
/*---------------------------------PRCS function -------------------------------------------*/
openprcs(type:string)
{
 
//this.imain.unsubscribe();
this.unsuscribe_service(this.imain);
//this.iprcsc.unsubscribe();
this.unsuscribe_service(this.iprcsc);
   setTimeout(()=>{    //<<<---    using ()=> syntax
    this.loadf = false;
},3000);
 this.prcf=type;
  this._appdata.prcsinfo(this.client,type)
     // only gets fired once
    .subscribe((data) => {
      this.prcsdata = data;
      
    });

this.iprcsinfo=IntervalObservable.create(3000) // only fires when component is alive
    .subscribe(() => {
      this._appdata.prcsinfo(this.client,type)
        .subscribe(data => {
         // this.zone.run(() => {
           
          this.prcsdata = data;
         // this.ref.detectChanges();
          //})
          //console.log(this.appData);
        
        });
    });
}




/*------------------------------------Prcs function End ------------------------------------*/

/*---------------------------------PRCS function -------------------------------------------*/
opendbase(type:number)
{
  this.dbaset=type;
//this.imain.unsubscribe();
this.unsuscribe_service(this.imain);
//this.iprcsc.unsubscribe();
this.unsuscribe_service(this.iprcsc);
   setTimeout(()=>{    //<<<---    using ()=> syntax
    this.loadf = false;
},3000);

 console.log(this.dbaset);
 /*
  this._appdata.prcsinfo(this.client,type)
     // only gets fired once
    .subscribe((data) => {
      this.prcsdata = data;
      
    });

this.iprcsinfo=IntervalObservable.create(3000) // only fires when component is alive
    .subscribe(() => {
      this._appdata.prcsinfo(this.client,type)
        .subscribe(data => {
         // this.zone.run(() => {
           
          this.prcsdata = data;
         // this.ref.detectChanges();
          //})
          //console.log(this.appData);
        
        });
    });*/
}
/*--------------------------------------DB ends here ----------------------------*/






  mcloseprcs()
  {
   
     this.loadf=true;
     console.log("got fired unsuscribe");
  this.unsuscribe_service(this.iprcsinfo);
  this.imain=this.getappdata();
  this.iprcsc=this.getprcsdata();

}
mclose()
  {
   
     this.loadf=true;
  this.unsuscribe_service(this.imodalsub);
  this.unsuscribe_service(this.iprcsinfo);
  this.imain=this.getappdata();
  this.iprcsc=this.getprcsdata();

  }
/*------------------------------- Unsuscribe _ services on page-------------------------- */
unsuscribe_service(ser:any)
{
 ser.unsubscribe();
}




}
