import {Http, Response} from '@angular/http';
import {Observable} from 'rxJs';
import {serverRequest} from '../../models/server-request.model';
import {serverConfig} from '../../config-files/serverdetails.config';
import {Injectable} from '@angular/core';

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
    }
    constructor(private __http: Http){
        this._http = __http;
    }
}