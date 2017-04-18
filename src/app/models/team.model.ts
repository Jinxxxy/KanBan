export class team{
    public name: string;
    public members: Array<string>;
    public functionName: string;
    constructor(
        _name:string, _function: string
    ){
        this.name = _name;
        this.functionName = _function;
    }
}