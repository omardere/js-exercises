const find=(list, findFn)=>{
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
module.exports=find;
