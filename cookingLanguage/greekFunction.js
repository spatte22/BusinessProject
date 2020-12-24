function greekFunction () {
	var checkBox = document.getElementById('checkbox');
	var english = document.getElementById('englishMode');
	var greek = document.getElementById('greekMode');
	
	if (checkBox.checked == true){
		english.style.display = "none";
	} else {
		english.style.display = "block";
	}
	if (checkBox.checked == true) {
		greek.style.display = "block";
	} else {
		greek.style.display = "none";
	}
}