document.onscroll = setTimeout(slideshow0, 0);
document.onscroll = setTimeout(slideshow1, 4000);
document.onscroll = setTimeout(slideshow2, 8000);
document.onscroll = setTimeout(slideshow3, 12000);
document.onscroll = setTimeout(slideshow4, 16000);

document.onscroll = setTimeout(endshow0, 4000);
document.onscroll = setTimeout(endshow1, 8000);
document.onscroll = setTimeout(endshow2, 12000);
document.onscroll = setTimeout(endshow3, 16000);
document.onscroll = setTimeout(endshow4, 20000);


	var slide1 = document.getElementById('carouselSlide1');
	var slide2 = document.getElementById('carouselSlide2');
	var slide3 = document.getElementById('carouselSlide3');
	var slide4 = document.getElementById('carouselSlide4');
	
function slideshow0(){
	console.log('slideshow0 has started');
	setInterval(startSlide0, 16000);
};	
	
function startSlide0(){
		var slide0 = document.getElementById('carouselSlide0');
		if (slide0.style.display == 'none'){
			slide0.style.display = 'block';
		}
	};
	
function endshow0(){
	console.log('endshow0 has started');
	setInterval(endSlide0, 4000);
};

function endSlide0(){
	var slide0 = document.getElementById('carouselSlide0');
	if (slide0.style.display == 'block'){
		slide0.style.display = 'none';
	}
};

function slideshow1(){
	console.log('slideshow1 has started');
	setInterval(startSlide1, 16000);
};	
	
function startSlide1(){
		var slide1 = document.getElementById('carouselSlide1');
		if (slide1.style.display == 'none'){
			slide1.style.display = 'block';
		}
	};
	
function endshow1(){
	console.log('endshow1 has started');
	setInterval(endSlide1, 4000);
};

function endSlide1(){
	var slide1 = document.getElementById('carouselSlide1');
	if (slide1.style.display == 'block'){
		slide1.style.display = 'none';
	}
};

function slideshow2(){
	console.log('slideshow2 has started');
	setInterval(startSlide2, 16000);
};	
	
function startSlide2(){
		var slide2 = document.getElementById('carouselSlide2');
		if (slide2.style.display == 'none'){
			slide2.style.display = 'block';
		}
	};
	
function endshow2(){
	console.log('endshow0 has started');
	setInterval(endSlide2, 4000);
};

function endSlide2(){
	var slide2 = document.getElementById('carouselSlide2');
	if (slide2.style.display == 'block'){
		slide2.style.display = 'none';
	}
};

function slideshow3(){
	console.log('slideshow3 has started');
	setInterval(startSlide3, 16000);
};	
	
function startSlide3(){
		var slide3 = document.getElementById('carouselSlide3');
		if (slide3.style.display == 'none'){
			slide3.style.display = 'block';
		}
	};
	
function endshow3(){
	console.log('endshow3 has started');
	setInterval(endSlide3, 4000);
};

function endSlide3(){
	var slide3 = document.getElementById('carouselSlide3');
	if (slide3.style.display == 'block'){
		slide3.style.display = 'none';
	}
};

function slideshow4(){
	console.log('slideshow4 has started');
	setInterval(startSlide4, 16000);
};	
	
function startSlide4(){
		var slide4 = document.getElementById('carouselSlide4');
		if (slide4.style.display == 'none'){
			slide4.style.display = 'block';
		}
	};
	
function endshow4(){
	console.log('endshow4 has started');
	setInterval(endSlide4, 4000);
};

function endSlide4(){
	var slide4 = document.getElementById('carouselSlide0');
	if (slide4.style.display == 'block'){
		slide4.style.display = 'none';
	}
};