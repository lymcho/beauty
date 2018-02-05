
var book = document.querySelectorAll(".book");
var overlay = document.querySelector("#overlay");


book[0].addEventListener("click", function(){
	//pull up overlay
	overlay.style.opacity="0.5";
	overlay.style.zIndex="2";
	
});

overlay.addEventListener("click", function(){
	//pull up overlay
	overlay.style.opacity="0";
	overlay.style.zIndex="-1";

});