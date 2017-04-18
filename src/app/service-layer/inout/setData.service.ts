import {Http, Response} from '@angular/http';
import {Observable} from 'rxJs';
import {serverRequest} from '../../models/server-request.model';
import {serverConfig} from '../../config-files/serverdetails.config';
import {Injectable} from '@angular/core';
import {cardItem} from '../../models/card-item.model'

@Injectable()

export class setData{
    private _http: Http;
    public update(_id: number, data: Object, _table: string): Observable<Response>{
        var updateRequest: serverRequest = new serverRequest(
            "UPDATE",            
            _id,
            data,
            _table
        );  
        var getObservable: Observable<Response> = this._http.post(
            serverConfig.serverLocation + 
            serverConfig.serverParameterSeparator +
            JSON.stringify(updateRequest),""
        )
        return getObservable
    };
    public saveAll(){
    };
    public saveAllCards(_cardArray: Array<cardItem>){
        var responseArray: Array<Response> = [];
        console.log(_cardArray)
        for(var item in _cardArray){
            var thisCard = _cardArray[item];
            console.log(thisCard)
            this.update(
                thisCard.id,
                thisCard, 
                "Tasks"
            ).map((resp: Response)=>{
                responseArray.push(resp);
                console.log("Returning the value: " + resp)
            }).subscribe()
        }
    };
    public insert(_cardItem: cardItem){
        var insertRequest: serverRequest = new serverRequest(
            "INSERT", 
            _cardItem.id,
            _cardItem,
            "Tasks"
        );
       var getObservable = this._http.post(
            serverConfig.serverLocation + 
            serverConfig.serverParameterSeparator +
            JSON.stringify(insertRequest),""
        );
        return getObservable
    };
    public delete(_id: number){
        var deleteRequest: serverRequest = new serverRequest(
            "DELETE",
            _id,
            {}, 
            "Tasks"
        );
        var getObservable = this._http.post(
            serverConfig.serverLocation + 
            serverConfig.serverParameterSeparator +
            JSON.stringify(deleteRequest),""
        );
        return getObservable;
    }
    constructor(private __http: Http){
        this._http = __http;
    };
}