import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {valide} from './validationModel';
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';

@Injectable()

export class valideServices{

    selectedValideListe :valide;
    valideList: valide[];
    constructor( private http:Http){

    }

 postValideMoney(valide :valide){
     var body =JSON.stringify(valide);
     var HeadersOptions = new Headers({'Content-type':'application/json'});
     var RequestOptions =new RequestOptions({method :RequestMethod.Post,Headers : HeadersOptions})
     return this.http.post('http://localhost:5333/api/Transaction_valide',body,RequestOptions).map(X => X.json());
    }

    getvalideList(){
        this.http.get('http://localhost:5333/api/Transaction_valide')
        .map((data : Response)=>{
            return data.json() as valide[] ;
        }).toPromise().then( x => {
            this.valideList = x;
        })
    }
}
