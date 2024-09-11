var setLanguage = function (lang) {
    lang = lang.substr(0, 2);
    var from = lang == 'en' ? 'ja' : 'en';
    $('.lang-' + from).hide();
    $('.lang-' + lang).fadeIn();
    $('.redpen-lang')
    .removeClass("active")
    .each(function (i, el) {
	    if ($(el).data("lang") == lang) {
		$(el).addClass("active");
	    }
	});
};

$(document).ready(function ($) {
    new WOW().init();
    jQuery(window).load(function() {
	    jQuery("#preloader").delay(100).fadeOut("slow");
	    jQuery("#load").delay(100).fadeOut("slow");
	});

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
	    if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	    } else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	    }
	});

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
	    $('.navbar-nav li a').bind('click', function(event) {
		    var $anchor = $(this);
		    $('html, body').stop().animate({
			    scrollTop: $($anchor.attr('href')).offset().top
				}, 1500, 'easeInOutExpo');
		    event.preventDefault();
		});
	    $('.page-scroll a').bind('click', function(event) {
		    var $anchor = $(this);
		    $('html, body').stop().animate({
			    scrollTop: $($anchor.attr('href')).offset().top
				}, 1500, 'easeInOutExpo');
		    event.preventDefault();
		});
	});

      $(".redpen-lang").click(function () {
	      setLanguage($(this).data("lang"));
      });
      setLanguage(navigator.language || navigator.userLanguage || "en");
});
