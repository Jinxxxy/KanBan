export class serverRequest{
    public requestType: string;
    public _id: number;
    public dataObject: Object;
    public tableReference: string;

    constructor(
        _requestType: string,
        __id: number,
        _dataObject: Object,
        _tableReference: string
        ){
            this.requestType = _requestType;
            this._id = __id;
            this.dataObject = _dataObject;
            this.tableReference = _tableReference;
        }
}