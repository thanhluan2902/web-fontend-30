const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
	image.addEventListener('click', e=> {
		lightbox.classList.add('active');
		const img = document.createElement('img');
		img.src = image.src;
		while(lightbox.firstChild){
			lightbox.removeChild(lightbox.firstChild);
		}

		var span = document.createElement("SPAN");
		var txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		lightbox.appendChild(span);
		lightbox.appendChild(img);

		var myDiv = document.createElement("div");
		myDiv.className = 'caption';
		var myP = document.createElement("p");
		myP.innerHTML = image.alt;
		myDiv.appendChild(myP);

		lightbox.appendChild(myDiv);

	});
});

lightbox.addEventListener('click', e => {
	lightbox.classList.remove('active');
});