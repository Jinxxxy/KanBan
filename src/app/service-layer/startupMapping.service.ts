import {getData} from './inout/getData.service'
import {dataStore} from './datastore.service'



export class startUpMapper{
    private _ds = dataStore
    public mapStartupData(responseObject: Object){
        dataStore.cardList = responseObject["cards"];
        dataStore.ownersList = responseObject["users"];
        dataStore.swimLanesList = responseObject["swimlanes"][0].names;
        dataStore.projectList = responseObject["projects"];
        console.log(dataStore.cardList);
        console.log(dataStore.ownersList);
        console.log(dataStore.swimLanesList);
        console.log(dataStore.projectList);
    }
}