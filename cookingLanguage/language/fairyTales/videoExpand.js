console.log("iframe working");

const expandButton = document.getElementsByClassName('iframeExpand');
const iframeContainer = document.getElementsByClassName('stickyIframe');
let a;
for(a=0; a < expandButton.length; a++) {
	expandButton[a].onclick = function() {
		this.parentElement.classList.toggle("hide");
	}
}

