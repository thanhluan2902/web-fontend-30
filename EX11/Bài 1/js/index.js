$(document).on('click', '.top-1', function(event) {
	$(this).addClass("active");
	var panel = this.nextElementSibling;
	if (panel.style.display === "block") {
		$(this).removeClass('active');
		panel.style.display = "none";
	} else {
		panel.style.display = "block";
	}
});
