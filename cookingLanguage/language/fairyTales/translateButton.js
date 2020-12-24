console.log("hello world!");

const button = document.getElementsByClassName('chunkButton');
let i;
for(i=0; i < button.length; i++) {
	button[i].onclick = function() {
		this.classList.toggle("turnRed");
		this.nextElementSibling.classList.toggle("show");
		
	}
}
