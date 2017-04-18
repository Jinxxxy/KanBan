import {cardItem} from '../Models/card-item.model'

export class dbAndDataMethods{
    public static sortByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
    public static getId(_array: Array<cardItem>): number{
        console.log(_array)
        var _sortedArray = dbAndDataMethods.sortByKey(_array, "id")
        var idPlusOne: number = _sortedArray[_sortedArray.length]["id"] + 1
        console.log(idPlusOne)
        return idPlusOne;
    }
}