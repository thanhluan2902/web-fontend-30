console.log('Số các số chia hết cho 3 hoặc 7 nằm trong đọn từ 1 -> 100 là: ');
var sum = 0;
for(var i=1 ; i<=100 ; i++) {
	if(i % 3 == 0 || i % 7 == 0){
		sum += 1;
	}
}

console.log('sum = ',sum);