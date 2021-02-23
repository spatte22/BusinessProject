


const loadingPage = document.querySelector('.loading-page');

function init() {
	setTimeout(() => {
		loadingPage.style.opacity = 0;
		loadingPage.style.display = 'none';
	}, 4050);
	localStorage.setItem("hasVisited", "true");
}

init();

/*function loaderFunction(localStorage.getItem("hasVisited")) {
	console.log(localStorage);
}
*/
