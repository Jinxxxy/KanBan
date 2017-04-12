import {Http, Response} from '@angular/http';
import {Observable} from 'rxJs';
import {serverRequest} from '../../models/server-request.model'
import {serverConfig} from '../../config-files/serverdetails.config'
import {Injectable} from '@angular/core'

@Injectable()

export class getData{
    private _http: Http;
    
    startup(){
        console.log("Starting Up")
        var startupRequest: serverRequest = new serverRequest(
            "STARTUP",
                0,
            {"Hello":"World"},
            "All"
        )
        var getObservable: Observable<Response> = this._http.get(
            serverConfig.serverLocation + 
            serverConfig.serverParameterSeparator + 
            JSON.stringify(startupRequest)
        )
        return getObservable;
    }
    constructor(private __http: Http){
        this._http = __http;
    }
}