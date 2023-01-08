const map=(list, mapFn)=>{
    let newArray=[];
    if(!list) return newArray;
    for(let item of list){
        newArray.push(mapFn(item));      
    }
    return newArray;
}
module.exports=map;
