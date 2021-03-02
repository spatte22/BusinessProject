pic1();
setTimeout(pic2, 5000);
setTimeout(pic3, 10000);
setTimeout(pic4, 15000);

pic5();
setTimeout(pic6, 7000);
setTimeout(pic7, 14000);
setTimeout(pic8, 21000);

pic9();
setTimeout(pic10, 11000);
setTimeout(pic11, 22000);
setTimeout(pic12, 33000);

function pic1(){
	gsap.to("#pic1", {duration: 15, ease: "none", y: -1200, repeat: -1});
};
function pic2(){
	gsap.to("#pic2", {duration: 15, ease: "none", y: -1200, repeat: -1});
};
function pic3(){
	gsap.to("#pic3", {duration: 15, ease: "none", y: -1200, repeat: -1});
};
function pic4(){
	gsap.to("#pic4", {duration: 15, ease: "none", y: -1200, repeat: -1});
};
function pic5(){
	gsap.to("#pic5", {duration: 21, ease: "none", y: 1200, repeat: -1});
};
function pic6(){
	gsap.to("#pic6", {duration: 21, ease: "none", y: 1200, repeat: -1});
};
function pic7(){
	gsap.to("#pic7", {duration: 21, ease: "none", y: 1200, repeat: -1});
};
function pic8(){
	gsap.to("#pic8", {duration: 21, ease: "none", y: 1200, repeat: -1});
};
function pic9(){
	gsap.to("#pic9", {duration: 33, ease: "none", y: -1200, repeat: -1});
};
function pic10(){
	gsap.to("#pic10", {duration: 33, ease: "none", y: -1200, repeat: -1});
};
function pic11(){
	gsap.to("#pic11", {duration: 33, ease: "none", y: -1200, repeat: -1});
};
function pic12(){
	gsap.to("#pic12", {duration: 33, ease: "none", y: -1200, repeat: -1});
};


/*
const tl = gsap.timeline();

tl.to("#pic1", {duration: 15, ease: "none", y: -1200, repeat: -1}, "-=5")
.to("#pic2", {duration: 15, ease: "none", y: -1200, repeat: -1},"-=5")
.to("#pic3", {duration: 15, ease: "none", y: -1200, repeat: -1},"-=5")
.to("#pic4", {duration: 15, ease: "none", y: -1200, repeat: -1},"-=5");

tl.to("#pic5", {duration: 15, ease: "none", y: 1200, repeat: -1}, "-=5")
.to("#pic6", {duration: 15, ease: "none", y: 1200, repeat: -1},"-=5")
.to("#pic7", {duration: 15, ease: "none", y: 1200, repeat: -1},"-=5")
.to("#pic8", {duration: 15, ease: "none", y: 1200, repeat: -1},"-=5");
*/
