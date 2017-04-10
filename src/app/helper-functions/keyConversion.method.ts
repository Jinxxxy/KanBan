import {cardItem} from '../Models/card-item.model'
import {userProfile} from '../Models/owners.model'
import {projectModel} from '../Models/project.model'

export class keyConverter{
    public static getUser(_id: number, ownersList: Array<userProfile> ): userProfile{
        var getUserProfile: userProfile = ownersList.filter((user: userProfile)=>{
        return user["userId"] === _id;
        })[0];
        return getUserProfile;
    };
    public static getProject(_id: number, projectList: Array<projectModel>): projectModel{
        var getProjectModel: projectModel = projectList.filter((proj: projectModel)=>{
        return proj.projectId === _id
        })[0];
        return getProjectModel;
    };
    public static getTask(_id: number, cardList: Array<cardItem>): cardItem{
        var getTaskItem: cardItem = cardList.filter((card: cardItem)=>{
        return card.id === _id
        })[0]
        return getTaskItem;
    }    
    public static viewTask(_any: any){
        alert(_any)
    }
}