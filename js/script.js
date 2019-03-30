var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
	var navbar = document.querySelector("nav")
	if (prevScrollpos > currentScrollPos) {
		navbar.classList.remove('navbar-hide'); 
	} else {
		navbar.classList.add('navbar-hide')
	}
	prevScrollpos = currentScrollPos;
}