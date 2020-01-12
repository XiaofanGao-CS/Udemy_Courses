// alert("Hello From The JS File!")
// var firstName= prompt("What is your first name?");
// var lastName=prompt("What is your last name?");
// var age=prompt("What is your age?");
// console.log("Your full name is "+firstName +" " + lastName);
// console.log("You are "+ age+ " years old"); 

// var age=prompt("What is your age?");
// var Day= age*365.25;
// alert("About "+ Day);
var age=prompt("What is your age?")
if (age<0) {
	console.log("Age can not less than zero ");
}
else if (age==21){
	console.log("Happy 21st birthday");
}
else if (age%2==1){
	console.log("Your age is odd");
}
else if (age%Math.sqrt(age)==0){
	console.log("Perfect Square");
}
else{
	console.log("Your age is "+ age);
}