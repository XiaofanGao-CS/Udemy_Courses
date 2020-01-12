
var button=document.querySelector("button");
var body=document.querySelector("body");
var isPurple=false;
button.addEventListener("click",function(){

 	if (isPurple){
		body.style.background="purple";
	}else{
		body.style.background="orange";
	}
	isPurple= !isPurple;
});


// *******************************************

// var button=document.querySelector("button");

// button.addEventListener("click", function(){
// 	document.body.classList.toggle("purple");
// });