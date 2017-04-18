import {cardItem} from '../Models/card-item.model'
import {userProfile} from '../Models/owners.model'
import {projectModel} from '../Models/project.model'
import {keyConverter} from '../helper-functions/keyConversion.method'
import {team} from '../Models/team.model'
import {Observable, BehaviorSubject, Subject} from 'rxJs'
import 'rxJs'
import {xArray} from '../helper-functions/observableArray.method'

declare global {
    interface Array<T> {
        oPush(elem: T): Array<T>;
    }
}


export class dataStore{
    public static handler = {
        get: function(value, other){
            alert("handler")
            return value[other]
        },
        set: function(target, property, value){
            alert("Handler")
            target[property] = value;
            return true;
        }
    } 
    public static cardList: xArray<cardItem> = new xArray<cardItem>();
    public static ownersList: xArray<userProfile> = new xArray<userProfile>();
    public static projectList: xArray<projectModel> = new xArray<projectModel>(); 
    public static swimLanesList: Array<string>;
    public static teamList: Array<team> = [];
    public static setPrototypeExtensions(){
        Array.prototype.oPush = function(_value){
            alert('Saving The Data...')
            return this.push(_value);
        }
    }
}