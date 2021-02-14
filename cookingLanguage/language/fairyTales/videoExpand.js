console.log("iframe working");

const expandButton = document.getElementsByClassName('iframeExpand');
const iframeContainer = document.getElementsByClassName('stickyIframe');

window.onscroll = scrollFunction;
function scrollFunction () {
	if (window.pageYOffset > 200){
		console.log('scrolling!');
		document.getElementById('videoButton').style.display = 'block';
	}
};

let a;
for(a=0; a < expandButton.length; a++) {
	expandButton[a].onclick = function() {
		this.parentElement.classList.toggle("hide");
	}
};

