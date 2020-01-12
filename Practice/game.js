// var secretNum=4;

// var guess=Number(prompt("Enter your guess"));


// if (guess===secretNum){
// 	alert("You got it right");
// }
// else if (guess>secretNum){
// 	alert("You are too high");
// }
// else {
// 	alert("You are too low")
// }
console.log("Print number between 10 and 19")
var num=-10;
while(num>=-10 && num<=19){
    console.log(num);
    num++;
}
console.log("Print even number between 10 and 40")
var num=10;
while(num>=10 && num <=40){
	console.log(num);
	num+=2;
}
console.log("Print odd number between 300 and 333")
var num=301;
while(num>=301 && num <=334){
	console.log(num);
	num+=2;
}
console.log("Print all number divisible by 5 AND 3 between 5 and 50")
var num=5;
while(num>=5 && num <=50){
	if(num%5==0 && num%3==0){
		console.log(num);
	}
	num++;
}

