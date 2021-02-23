console.log('Hello world!');




// Drop-down function
var ddValue = document.getElementById('ddBioContent');

function ddBio() {
	if(ddValue.classList.contains('ddBioHidden')) {
		ddValue.classList.add('ddBioVisible');
		ddValue.classList.remove('ddBioHidden');
	}else if(ddValue.classList.contains('ddBioVisible')) {
		ddValue.classList.add('ddBioHidden');
		ddValue.classList.remove('ddBioVisible');
	}
}

function contactEmail() 
{
    window.open("mailto:margaritainesp@hotmail.com?subject=Contact:%20Margarita%20Papakosta&body=Hi%20Marg,%0A%0A%0A");
}

function contactTutorEmail() {
	window.open("mailto:margaritainesp@hotmail.com?subject=Tutor%20Inquiry&body=Hi%20Marg,%0A%0AMy%20Name:%0ADesired%20Language:%0ACurrent%20Level:%0AMy%20Availability:%0APotential%20Tutor%20Package:%0A%0A%0A");
}

//language tutor slides

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  
}


//instagram slideshow



