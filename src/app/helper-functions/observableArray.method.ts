declare global {
    interface Array<T> {
        oPush(elem: T): Array<T>;
    }
}

export class xArray<T> extends Array<T> {
    public xPush = Array.prototype.push
    public xFilter = Array.prototype.filter
    public oPush(_value: any):any[]{
        alert("Happening!")
        this.push(_value)
        return this
    }
}
