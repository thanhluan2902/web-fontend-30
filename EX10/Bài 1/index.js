var slider = document.querySelector('.slider');
var buttons = document.querySelectorAll('.btn');
var options = document.querySelectorAll('.option');
var slides = document.querySelectorAll('.img');

var index = 1;
var opIndex = 0;
var size = slides[index].clientWidth;

update();

function update(){
	slider.style.transform = "translateX(" +(-size * index) + "px)";

	options.forEach(op => op.classList.remove('colored'));
	options[opIndex].classList.add('colored');

}

function slide(){
	slider.style.transition = "transform .5s ease-in-out";
	update();
}

function optionFunc(){
	let i = Number(this.getAttribute('option-index'));
	index = i + 1;
	opIndex = i;
	slide();
}

function btnCheck(){
	if(this.id === "prev"){
		index--;

		if(opIndex == 0){
			opIndex = 5;
		}
		else{
			opIndex--;
		}
	}
	else if(this.id === "next"){
		index++;

		if(opIndex == 5){
			opIndex = 0;
		}
		else{
			opIndex++;
		}
	}
	
	slide();
}

slider.addEventListener('transitionend', () => {
	if(slides[index].id === "last"){
		slider.style.transition = "none";
		index = slides.length - 2;
		slider.style.transform = "translateX(" +(-size * index) + "px)";
	}

	else if(slides[index].id === "first"){
		slider.style.transition = "none";
		index = 1;
		slider.style.transform = "translateX(" +(-size * index) + "px)";
	}
});

buttons.forEach(btn => btn.addEventListener('click', btnCheck));
options.forEach(option => option.addEventListener('click', optionFunc));

setInterval(function() {
	update();
}, 2000);
