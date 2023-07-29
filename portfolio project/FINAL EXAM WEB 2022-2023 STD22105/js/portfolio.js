//This is a navbar modification on scroll 
const navbar = document.getElementById('navbar');  
const hamburger = document.getElementById('hamburger');  
const navhover = document.getElementById('navhover');  
window.addEventListener('scroll' ,function(){
    var scroll = window.scrollY;
		if (scroll > 50) {
		     navbar.classList.add('fixed');
		     navhover.classList.add('navhoverFixed');  
		} else {
            navbar.classList.remove('fixed');
            navhover.classList.remove('navhoverFixed');
		}
	hamburger.addEventListener('click', function(){
		navbar.classList.remove('fixed');
	})
})

