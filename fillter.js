function filter(list, filterFn){
	let newArray=[];
	if(!list) return newArray;
	for(let item of list){
		if(filterFn(item)){
			newArray.push(item);
		}
	}
	return newArray;
}