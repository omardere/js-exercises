function map(list, mapFn){
    let newArray=[];
    if(!list) return newArray;
    for(let item of list){
        newArray.push(mapFn(item));      
    }
    return newArray;
}
const array1 = [1, 4, 9];
const map1 = map(array1,(num) => Math.sqrt(num));
console.log(map1);