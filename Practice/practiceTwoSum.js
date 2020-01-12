array={1,3,6,9} ; target=15;

function twoSum(array, target){
	for(var i=0; i<array.length;i++){
		for (var j=i+1;j<array.length;j++){
			if(array[i]+array[j]===15){
				newArray={i,j};
				return newArray;
			}
		}
	}
}

twoSum(array, target);