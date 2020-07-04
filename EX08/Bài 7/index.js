
for (var i=0; i<8; i++)
{
	for (var j=0; j<i; j++)
	{
		document.write('*');
	}
	document.write('<br/>');
}

document.write('<br/>');

for (var i=0; i<8; i++)
{
	for (var j=0; j<8; j++)
	{
		document.write('*');
	}
	document.write('<br/>');
}

document.write('<br/>');

for(var i=0; i<8; i++) {
	for(var j=0;j<8;j++){
		if(i==0 || i==7 || j==0 || j==7){
			document.write('*');
			if(j==7){
				document.write('<br/>');	
			}
		}
		else
			document.write('&nbsp;&nbsp;');
	}
}
document.write('<br/>');

for(var i=0; i<8 ; i++){
	for(var j=i; j<8;j++){
		if(i<=j){
			document.write('*');}
		}
		document.write('<br/>');
	}



