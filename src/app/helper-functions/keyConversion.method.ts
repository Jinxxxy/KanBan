import {cardItem} from '../Models/card-item.model'
import {userProfile} from '../Models/owners.model'
import {projectModel} from '../Models/project.model'

export class keyConverter{
    public static getUsername(_id: number, ownersList: Array<userProfile> ): string{
        var getUserProfile: userProfile = ownersList.filter((user: userProfile)=>{
        return user["userId"] === _id;
        })[0];
        return getUserProfile.username;
    }
    public static getProjectName(_id: number, projectList: Array<projectModel>): string{
        var getProjectModel: projectModel = projectList.filter((proj: projectModel)=>{
        return proj.projectId === _id
        })[0];
        return getProjectModel.name;
    }
    public static getTask(_id: number, cardList: Array<cardItem>){
        var getTaskItem: cardItem = cardList.filter((card: cardItem)=>{
        return card.id === _id
        })[0]
        return getTaskItem;
    }
    public static viewTask(_any: any){
        alert(_any)
    }
}