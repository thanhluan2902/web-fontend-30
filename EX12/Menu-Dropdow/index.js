$(function() {
	$('.menu li').hover(
		function() {
			$('>ul.menu-tab',this).slideDown(500);		
		},
		function() {
			$('>ul.menu-tab',this).slideUp(300);		
		}
	);

	$('.menu-tab li').hover(
		function() {
			$('>ul.menu-con',this).slideDown(500);		
		},
		function() {
			$('>ul.menu-con',this).slideUp(300);		
		}
	);
});