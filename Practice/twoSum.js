 array = {1,4,8,10} target = 12 

function twoSum(array, target) {
	// body...

for (var i=0; i<array.length; i++){
	for(var j=i+1; j<array.length; j++){
		if (array[i]+array[j]===12) {
			newArray={i,j};
			return newArray;
		}
	}

}
}

twoSum(array, target);