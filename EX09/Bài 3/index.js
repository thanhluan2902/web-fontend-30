// function myfunction(){
// 	var x = document.getElementsByClassName('w').value;
// 	document.getElementsByClassName('info').style.fontSize = x + "px";
// }

var font = document.getElementsByClassName('font');
function setFont(index,size){
		document.getElementsByClassName('info')[index].style.fontSize = size;
} 
