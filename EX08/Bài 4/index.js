var N = prompt('Mời nhập vào N = ');
var M = prompt('Mời nhập vào M = ');
var K = prompt('Mời nhập vào K = ');
var sum = 0;
for(var i=N ; i<=M ; i++){
	if(i%K == 0){
		sum += i;
	}
}

document.write('sum = ',sum);

