function find(list, findFn){
    let findItem=undefined;
    if(!list) return findItem;
    for(let item of list){
        if(findFn(item)){
            findItem=item;
            return findItem
        }
    }
    return findItem;

}

const array1 = [5, 12, 8, 130, 44];

const found = find(array1,element => element > 10);

console.log(found);