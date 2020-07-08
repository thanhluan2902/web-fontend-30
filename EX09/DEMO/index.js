var element = document.getElementById('myText');
console.log(element);

element.innerHTML = '<h1>Hello baay bee</h1>';
// var contentHTML = element.innerHTML;

var elements = document.getElementsByClassName('myH5');
console.log(elements[0]);

var elements2 = document.getElementsByTagName('h5');
console.log(elements2[1]);

var  element3 = document.getElementById('linkFb');
element3.href = 'https://google.com';
console.log(element3.href);
console.log(element3.parentNode);

element3.style.color = "red";
element3.style.fontSize = "30px";

function buttonClick() {
	element3.style.color = "blue";
}
var button  = document.getElementById('button');
button.addEventListener('click', buttonClick, false);
function buttonClick1(){
	element.style.color = "red";
}
button.addEventListener('click', buttonClick1, false);
function mouseover(element){
	element.style.color = "green";
}
function mouseout(element){
	element.style.color = "pink";
}

function loadPage(){
	alert('He lo may cung');
}

function onBlurTest(element) {
	var val = element.value;
	val = val.toUpperCase();
	element.value = val;
}

function onFocusTest(element) {
	element.style.background = "red";
}

function onChangeTest(element){
	var val = element.value;
	alert(val);
}

function myFunctionSubmit() {
	alert('Ngay tho vvvvvv');
}

var element_a = document.getElementById('linkFb');
console.log(element_a.parentNode);

var element_body = document.getElementsByTagName('body')[0];
console.log(element_body.children[0].style.color = "red");
