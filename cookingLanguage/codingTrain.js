window.onload = rotate;

var theAd = 0;
var adImages = new Array("images/foodShow/instaFood1.jpg","images/foodShow/instaFood2.jpg");

function rotate() {
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }
     document.getElementById("adBanner").src = adImages[theAd];
	 console.log('adImages happening');

     setTimeout(rotate, 4 * 1000);
}
