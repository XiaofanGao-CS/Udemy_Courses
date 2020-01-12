// function printReverse(arr){
// 	for(var i=arr.length-1; i>=0; i--){
// 		console.log(arr[i]);
// 	}
// }

// printReverse([1,2,3,4,5])

// function isUniform(arr){
// 		var tempEle=arr[0];
		
// 	for(var i =1;i<arr.length;i++){
		
// 		if( arr[i]!==tempEle){
// 			return false;
// 		}
// 		}
	
// 	return true;
// }


// console.log(isUniform([1,1,"a","a"]));

// function sumArray(arr){
// 	var sum=0;
// 	for(var i=0;i<arr.length;i++){
// 		sum= arr[i]+sum;
// 	}
// 	return sum;
// }

// console.log(sumArray([1,2,4,4])); 

// function max(arr){
// 	var max= arr[0];
// 	for (var i =1; i<arr.length;i++){
		
		
// 		if (arr[i]>=max) {
// 			max=arr[i];
// 		}
// 		}
// 		return max;

// 	}



// console.log(max([3,3,1]));

// var post=[
// 	{
// 		title:"Cats are mediocre",
// 		author:"Colt",
// 		comments:["Awesome post","Terrible post"]
// 	},
// 	{
// 		title:"Cats are actually Awesome",
// 		author: "Cat Luvr",
// 		comments:["<3","Go to hell I hate you "]
// 	}
// ]

// var someObject={
// 	friends:[
// 	{name:"Malfoy"},
// 	{name:"Crabbe"},
// 	{name:"Goyle"}
// 	],
// 	color:"baby blue",
// 	isEvil:true
// };
// *************************************
 var movieDB=[
 {
 	title: "In Bruges",
 	rating: 5,
 	hasWatched:true
 },
{
 	
	title: "Frozen",
 	rating: 4.5,
 	hasWatched:false
}
  ]

// movieDB.forEach(function(movie){
// 	var result="You have ";
// 	if(movie.hasWatched==true){
// 		result+="watched";
// 	}else{
// 		result+="not seen";
// 	}
// 	result+="\""+movie.title+"\" - " + movie.rating+"stars";
// 	// result+=movie.rating+"stars";
// 	console.log(result);
// })

function buildString(movie){
	var result="You have ";
	if(movie.hasWatched==true){
		result+="watched";
	}else{
		result+="not seen";
	}
	result+="\""+movie.title+"\" - " + movie.rating+"stars";
	// result+=movie.rating+"stars";
	// console.log(result);
	return result;

}

movieDB.forEach(function(movie){

	console.log(buildString(movie));
})


// ****************************

// var result1=movieDB[0].title[0] ;
// console.log(result1);
// var result2=movieDB[1].rating[0];
// console.log(result2);


