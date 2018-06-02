import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {send} from '../send-money/send-mony.model';
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';

@Injectable()

export class moneyServices{

    selectedListeMoney :send;
    moneyList: send[];
    constructor( private http:Http){

    }

 postSendMoney(send :send){
     var body =JSON.stringify(send);
     var HeadersOptions = new Headers({'Content-type':'application/json'});
     var RequestOptions =new RequestOptions({method :RequestMethod.Post,Headers : HeadersOptions})
     return this.http.post('http://localhost:5333/api/Transaction_env',body,RequestOptions).map(X => X.json());
    }

    getMoneyList(){
        this.http.get('http://localhost:5333/api/Transaction_env')
        .map((data : Response)=>{
            return data.json() as send[] ;
        }).toPromise().then( x => {
            this.moneyList = x;
        })
    }
}



