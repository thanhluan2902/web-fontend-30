var check = document.getElementsByClassName('checkBox');
var input = document.getElementsByClassName('input');
var info = document.getElementsByClassName('info');

function checkBox(index,color){
	input[index].checked = true;
	check[index].style.backgroundColor = color;
	info[index].style.backgroundColor = color;
	info[index].style.color = "white";
}

function checkAll(){
	for(var i=0;i<10;i++){
		checkBox(i,'#4bdc67');
	}
}

function unCheckAll(){
	for(var i=0;i<check.length;i++){
		input[i].checked = false;
		check[i].style.backgroundColor = "pink";
		info[i].style.backgroundColor = "#adbddf";
		info[i].style.color = "black";
	}
}




