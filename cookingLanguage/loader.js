const loadingPage = document.querySelector('.loading-page');

function init() {
	if(localStorage.getItem("hasVisited") === null){
		setTimeout(() => {
			loadingPage.style.opacity = 0;
			loadingPage.style.display = 'none';
			localStorage.setItem("hasVisited", "yes");
		}, 4050);
	}else {
		loadingPage.style.opacity = 0;
		loadingPage.style.display = 'none';
		console.log("yes!");
		
	}
}

init();
