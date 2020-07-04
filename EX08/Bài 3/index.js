var i;
function giaiThua(i){
	if(i == 1)
		return 1;
	return i*giaiThua(i-1);
}

var n = prompt('Mời nhập vào n = '); 
var s=0;
for(var i=1 ; i<=n ; i++){
	s += i/(giaiThua(i)); 
}
document.write('s = ',s);