export class cardItem{
    public id: number;
    public name: string;
    public project: string;
    public owner: string;
    public dateCreated: Date;
    public dateCompleted: Date;
    public status: string;
    public lastModifiedDate: Date;
    public lastModifiedBy: number;
    public description: string;

    constructor(_id: number, _name: string, _project: string, _owner: string, _status: string){
        this.id = _id;
        this.name = _name;
        this.project = _project;
        this.owner = _owner; 
        this.status = _status;
    }
}