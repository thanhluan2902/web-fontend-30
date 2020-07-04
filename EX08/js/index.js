// alert('Hello babe');
// var cf = confirm('Hello con trai');
// var name = prompt('al0 alo', 'Luân');
// alert(name);

var alo = 'Bạn biết tôi là ai ko?';
var myName = 'Luân đẹp trai';
alert(alo);
document.write(myName);

console.log('Tong 2 so: ',2+4);
console.log('Hieu 2 so: ',2-4);
console.log('Tich 2 so: ',2*4);
console.log('Thuong 2 so: ',2/4);
console.log('Du 2 so: ',5%3);

var a=10;
console.log('a++ =', a++);
console.log('Gia tri cua a = ',a);
console.log('a-- =', a--);
console.log('Gia tri cua a = ',a);
console.log('++a =', ++a);
console.log('Gia tri cua a = ',a);
console.log('--a =', --a);
console.log('Gia tri cua a = ',a);

var b=18

console.log('x=', a-- + b++ - ++b - ++a);
console.log('a==b =>', a==b);
console.log('a!=b =>', a!=b);
console.log('!(a==b) =>', !(a==b));

var result = 10;
var result = a ? "yes" : "no";
console.log(result);

if(a==b){
	console.log('Ngon lanh canh dao!');
} else {
	console.log('Sai cmnr bn ei!');
}

var date= prompt('Moi nhap vao thu: ');
switch (parseInt(date)) {
	case 2:
	alert('thu 2');
	break;
	case 3:
	alert('thu 3');
	break;
	case 5:
	alert('thu 5');
	break;
	default:
	alert('Sai cmnr!!!!!');
	break;
}

console.log('Vòng lặp for');
for(var i=0;i<10;i++){
	console.log('lặp lần thứ: ',i);
}

var j=1;

console.log('Vòng lặp while');
while (j<5) {
	console.log('lặp lần thứ: ',j);
	j++;
}

console.log('Vòng lặp do-while');
var k=0;
do{
	console.log('k=',k);
	k++;
}while(k<5);



console.log('Vòng lặp for');
s=0;
for(var i=0;i<10;i++){
	s += i;
}
console.log(s);

console.log('Vòng lặp while');
var s1=0;
while (j<1) {
	s1 = s1 + j;
	j++;
}
console.log(s1);
console.log('Vòng lặp do-while');
var s2=0;
var k=1;
do{
	s2 = s2 + k;
	k++;
}while(k<1);
console.log(s2);



for(var i=0;i<10;i++){
	if(i==5){
		break;
	}
	console.log(' i = ',i);
}
for(var i=0;i<10;i++){
	
	if(i==5){
		continue;
	}
	console.log('i = ',i);
}

function showMegess() {
	console.log('Hello babe');
}

showMegess();

function tinhTong(a, b) {
	return a+b;
}

console.log(tinhTong(2,5));

function soSanh(a,b){
	return a>b;
}
console.log(soSanh(2,5));