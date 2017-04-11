export class cardItem{
    public id: number;
    public name: string;
    public project: number;
    public owner: number;
    public dateCreated: Date;
    public dateCompleted: Date;
    public status: string;
<<<<<<< HEAD
    public lastModifiedDate: Date;
    public lastModifiedBy: number;
=======
    public description: string;
>>>>>>> 2f3ba0482171b446f0edacf4facf56abc63e1b0b
    constructor(_id: number, _name: string, _project: number, _owner: number, _status: string){
        this.id = _id;
        this.name = _name;
        this.project = _project;
        this.owner = _owner; 
        this.status = _status;
    }
}