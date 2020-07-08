
var button = document.getElementsByClassName('button');
var info = document.getElementsByClassName('info');
function showInfo(infoindex,colorcode) {
	for(var i=0;i<button.length;i++){
		button[i].style.backgroundColor = "";
		button[i].style.color = "";
	}
	button[infoindex].style.backgroundColor = colorcode;
	button[infoindex].style.color = "white";
	for(var i=0;i<info.length;i++){
		info[i].style.display = "none";
	}
	info[infoindex].style.display = "block";
	info[infoindex].style.backgroundColor = colorcode;
}
showInfo(0,'#f44336');