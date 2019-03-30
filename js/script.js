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