$(document).ready(function (){
	$('.arrow_to_top').click(function(){
		$('html,body').animate({scrollTop:0},900);
	});
	$('.burger').click(function(){
		$('.menu_list,.burger,body').toggleClass('active');
	})
});