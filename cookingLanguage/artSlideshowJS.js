window.onload = showSlides;

var slide = 0;
var allSlides = new Array("../images/foodShow/instaFood1.jpg","../images/foodShow/instaFood2.jpg","../images/meBioTest.jpg");

function showSlides() {
     slide++;
     if (slide == allSlides.length) {
        slide = 0;
     }
     document.getElementById("slide1").src = allSlides[slide];
	 console.log('allSlides happening');

     setTimeout(showSlides, 4 * 1000);
}