var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector("nav")
var sticky = navbar.offsetTop;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		navbar.style.top='0' 
	} else {
		navbar.style.top='-25%'
		navbar.style.background='rgb(0,0,0)'
		navbar.style.padding='0'
	}
	if (currentScrollPos==sticky) {
		navbar.style.background='transparent'
		navbar.style.padding='20px 0 0 0' 
	}
	prevScrollpos = currentScrollPos;
}


function readMore(id1,id2,id3){
	var dots = document.getElementById(id1);
	var moreText = document.getElementById(id2);
	var btnText = document.getElementById(id3);

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
	}
}

document.getElementById("myBtn").onclick = function(){readMore("dots","more","myBtn")}
document.getElementById("myBtn2").onclick = function(){readMore("dots2","more2","myBtn2")}
document.getElementById("myBtn3").onclick = function(){readMore("dots3","more3","myBtn3")}