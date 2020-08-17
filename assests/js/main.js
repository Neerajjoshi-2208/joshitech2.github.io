var nav = document.getElementById('nav');

window.onscroll = function(){
	if (window.pageYOffset > 10) {
		nav.style.background = "rgba(40, 58, 90, 0.9)";
	}
	else{
		nav.style.background = "transparent";
	}
}
if (screen.width >= 968) {
	nav.style.background = "rgba(40, 58, 90, 0.9)";
}
 else{
 	function Function(){
 		nav.style.background = "#6186c3";
 
 	}
 }