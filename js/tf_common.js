$(document).ready(function(){
	
	//RollOver1
	$('#sp_contents a img, .member li a img, .ro img')
	.mouseover(function(){
		$(this).animate({opacity: 0.7}, 'fast');
		return false;
	})
	.mouseout(function(){
		$(this).animate({opacity: 1.0}, 'fast');
		return false;
	});

	//RollOver2
	$('#header h1 a[href] img, nav ul li a[href] img, .ro2 img')
	.mouseover(function(){
		$(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
		return false;
	})
	.mouseout(function(){
		$(this).attr("src",$(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
		return false;
	})
	.each(function(){
		$("<img>").attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
		return false;
	});
	
	//RollOver3
	$('a.link_area').css({opacity: 0});
	$('a.link_area')
	.mouseover(function(){
		$(this).animate({opacity: 0.5}, 'fast');
	})
	.mouseout(function(){
		$(this).animate({opacity: 0}, 'fast');
	});

	//Scroll anchor
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset}, 500);
				return false;
			}
		}
	});

	//pageTop
	var topBtn = $('#pagetop');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });

	//Object Height
	//http://kyasper.com/jquery-tips-5/
	var wH = $(window).height(); 
	var divH = $('div#title_area div.inner, div#trial2 div.inner, div#trial3 div.inner').innerHeight();
	if(wH > divH){
		$('div#title_area div.inner, div#trial2 div.inner, div#trial3 div.inner').css('height', wH+'px'); 
	}
	
	//navi fixed
    var tab = $('#sp_menu .nav'),
    offset = tab.offset();
    $(window).scroll(function () {
        if($(window).scrollTop() > offset.top) {
            tab.addClass('fixed');
        } else {
            tab.removeClass('fixed');
        }
    });

	//Colorbox
	$("a[rel='fade']").colorbox({transition:"fade"});
	$("a[rel='bugs1']").colorbox({transition:"fade"});
	$("a[rel='bugs2']").colorbox({transition:"fade"});
	$("a[rel='default']").colorbox();
	$("a[rel='sizefix']").colorbox({width:"90%",height:"90%"});
	$(".youtube").colorbox({
		iframe:true, innerWidth:640, innerHeight:360,
		onOpen:function(){ $('#new .youtube iframe').hide(); },
		onClosed:function(){ $('#new .youtube iframe').show(); }
	});
	$(".ajax").colorbox();
	
});
