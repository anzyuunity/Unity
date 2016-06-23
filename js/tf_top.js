$(document).ready(function(){

	$('#header #loading').show();
	$('#header #main_img').css({opacity:'0'});
	$('#header #main_title').css({opacity:'0'});
	$('#main_menu li').css({opacity:'0'});

});

$(window).load(function () {

	$('#header #loading').fadeOut();
	setTimeout(function(){
		$('#header #main_title').stop().animate({opacity:'1'},500);
	},500);
	setTimeout(function(){
		$('#main_menu li').stop().animate({opacity:'1'},500);
	},700);
	setTimeout(function(){
		$('#header #main_img').stop().animate({opacity:'1'},500);
	},900);

});