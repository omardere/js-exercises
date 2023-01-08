const reduce=(list, reduceFn,initialValue)=>{
    let result=undefined;
    if(!list) return result;
     result=initialValue;   
    for(let item of list){
        result=reduceFn(result,item);
    }
    return result;
}
module.exports=reduce;
