function reduce(list, reduceFn){
    let result=undefined;
    if(!list) return result;
     result=0;   
    for(let item of list){
        result=reduceFn(result,item);
    }
    return result;
}
const array1 = [1, 2, 3, 4];

const sumWithInitial = reduce(
    array1,(previousValue, currentValue) => previousValue + currentValue  
);

console.log(sumWithInitial);
