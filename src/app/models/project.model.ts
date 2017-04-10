import {cardItem} from './card-item.model'
import {brd} from './brd.model'

export class projectModel{
    name: string;
    projectId: number;
    children: Array<number> = [];
    targetCompletionDate: Date;
    creationDate: Date;
    actualCompletionDate: Date;
    description: string;
    brdList: Array<brd>;

    constructor(_name: string, _id: number){
        this.name = _name;
        this.projectId = _id;
    }
}