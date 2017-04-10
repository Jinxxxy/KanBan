import {cardItem} from '../Models/card-item.model'
import {userProfile} from '../Models/owners.model'
import {projectModel} from '../Models/project.model'
import {keyConverter} from '../helper-functions/keyConversion.method'
export class dataStore{
    public static cardList: Array<cardItem> = [];
    public static ownersList: Array<userProfile> = [];
    public static projectList: Array<projectModel> = []   
    public static swimLanesList: Array<string> = ["Awaiting Approval", "Awaiting Development","In Development", "Awaiting Testing", "Ready For Testing", "In Testing", "Awaiting Release", "Completed"]; 
}