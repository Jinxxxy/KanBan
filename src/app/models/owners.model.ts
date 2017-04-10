export class userProfile{
    fullName: string;
    username: string;
    userId: number;
    createdDate: Date;
    constructor(_fullName: string, _userName: string, _userId: number){
        this.fullName = _fullName;
        this.username = _userName;
        this.userId = _userId;
    }
}