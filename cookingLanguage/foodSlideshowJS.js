console.log('Shout out to GSAP!');

foodpic1();
setTimeout(foodpic2, 5000);
setTimeout(foodpic3, 10000);
setTimeout(foodpic4, 15000);

foodpic5();
setTimeout(foodpic6, 7000);
setTimeout(foodpic7, 14000);
setTimeout(foodpic8, 21000);

foodpic9();
setTimeout(foodpic10, 11000);
setTimeout(foodpic11, 22000);
setTimeout(foodpic12, 33000);

function foodpic1(){
	gsap.to("#foodpic1", {duration: 15, ease: "none", y: -1200, repeat: -1});
};
function foodpic2(){
	gsap.to("#foodpic2", {duration: 15, ease: "none", y: -1200, repeat: -1});
};
function foodpic3(){
	gsap.to("#foodpic3", {duration: 15, ease: "none", y: -1200, repeat: -1});
};
function foodpic4(){
	gsap.to("#foodpic4", {duration: 15, ease: "none", y: -1200, repeat: -1});
};
function foodpic5(){
	gsap.to("#foodpic5", {duration: 21, ease: "none", y: 1200, repeat: -1});
};
function foodpic6(){
	gsap.to("#foodpic6", {duration: 21, ease: "none", y: 1200, repeat: -1});
};
function foodpic7(){
	gsap.to("#foodpic7", {duration: 21, ease: "none", y: 1200, repeat: -1});
};
function foodpic8(){
	gsap.to("#foodpic8", {duration: 21, ease: "none", y: 1200, repeat: -1});
};
function foodpic9(){
	gsap.to("#foodpic9", {duration: 33, ease: "none", y: -1200, repeat: -1});
};
function foodpic10(){
	gsap.to("#foodpic10", {duration: 33, ease: "none", y: -1200, repeat: -1});
};
function foodpic11(){
	gsap.to("#foodpic11", {duration: 33, ease: "none", y: -1200, repeat: -1});
};
function foodpic12(){
	gsap.to("#foodpic12", {duration: 33, ease: "none", y: -1200, repeat: -1});
};

const openFoodInsta1 = document.getElementById('foodshow-column1');
const openFoodInsta2 = document.getElementById('foodshow-column2');
const openFoodInsta3 = document.getElementById('foodshow-column3');

document.getElementById('foodshow-column1').addEventListener("click", function() {
	window.open("https://www.instagram.com/margaritaines/")
});

document.getElementById('foodshow-column2').addEventListener("click", function() {
	window.open("https://www.instagram.com/margaritaines/")
});

document.getElementById('foodshow-column3').addEventListener("click", function() {
	window.open("https://www.instagram.com/margaritaines/")
});


//GREEKMODE

foodpic1gr();
setTimeout(foodpic2gr, 5000);
setTimeout(foodpic3gr, 10000);
setTimeout(foodpic4gr, 15000);

foodpic5gr();
setTimeout(foodpic6gr, 7000);
setTimeout(foodpic7gr, 14000);
setTimeout(foodpic8gr, 21000);

foodpic9gr();
setTimeout(foodpic10gr, 11000);
setTimeout(foodpic11gr, 22000);
setTimeout(foodpic12gr, 33000);

function foodpic1gr(){
	gsap.to("#foodpic1gr", {duration: 15, ease: "none", y: -1200, repeat: -1});
};
function foodpic2gr(){
	gsap.to("#foodpic2gr", {duration: 15, ease: "none", y: -1200, repeat: -1});
};
function foodpic3gr(){
	gsap.to("#foodpic3gr", {duration: 15, ease: "none", y: -1200, repeat: -1});
};
function foodpic4gr(){
	gsap.to("#foodpic4gr", {duration: 15, ease: "none", y: -1200, repeat: -1});
};
function foodpic5gr(){
	gsap.to("#foodpic5gr", {duration: 21, ease: "none", y: 1200, repeat: -1});
};
function foodpic6gr(){
	gsap.to("#foodpic6gr", {duration: 21, ease: "none", y: 1200, repeat: -1});
};
function foodpic7gr(){
	gsap.to("#foodpic7gr", {duration: 21, ease: "none", y: 1200, repeat: -1});
};
function foodpic8gr(){
	gsap.to("#foodpic8gr", {duration: 21, ease: "none", y: 1200, repeat: -1});
};
function foodpic9gr(){
	gsap.to("#foodpic9gr", {duration: 33, ease: "none", y: -1200, repeat: -1});
};
function foodpic10gr(){
	gsap.to("#foodpic10gr", {duration: 33, ease: "none", y: -1200, repeat: -1});
};
function foodpic11gr(){
	gsap.to("#foodpic11gr", {duration: 33, ease: "none", y: -1200, repeat: -1});
};
function foodpic12gr(){
	gsap.to("#foodpic12gr", {duration: 33, ease: "none", y: -1200, repeat: -1});
};

const openFoodInsta1gr = document.getElementById('foodshow-column1gr');
const openFoodInsta2gr = document.getElementById('foodshow-column2gr');
const openFoodInsta3gr = document.getElementById('foodshow-column3gr');

document.getElementById('foodshow-column1gr').addEventListener("click", function() {
	window.open("https://www.instagram.com/margaritaines/")
});

document.getElementById('foodshow-column2gr').addEventListener("click", function() {
	window.open("https://www.instagram.com/margaritaines/")
});

document.getElementById('foodshow-column3gr').addEventListener("click", function() {
	window.open("https://www.instagram.com/margaritaines/")
});

/*window.onload = showSlides;

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
}*/

