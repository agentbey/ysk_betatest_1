/*! HTML JS Functions v1.0 2016-09 | (c) deznx foundation - David Bey | agentbey.com */
/* Script for Mobile Menu */
$(document).ready(function() {
	$("#toggle").click(function() {
		$("#navbar").toggle();
		$('#toggle').toggleClass('on');
	});
});

/* Script for Smooth Scrolling */
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

/*  Script for ScrollToTop */
$(document).ready(function() {
	//Check to see if the window is top if not then display button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});

// ADD ROTATOR ANIMATION
(function($) {
	$.fn.extend({
		rotaterator: function(options) {
			var defaults = {
				fadeSpeed: 700,
				pauseSpeed: 6000,
				child: null
			};
			var options = $.extend(defaults, options);
			return this.each(function() {
				var o = options;
				var obj = $(this);
				var items = $(obj.children(), obj);
				items.each(function() {
					$(this).hide();
				})
				if (!o.child) {
					var next = $(obj).children(':first');
				} else {
					var next = o.child;
				}
				$(next).fadeIn(o.fadeSpeed, function() {
					$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
						var next = $(this).next();
						if (next.length == 0) {
							next = $(obj).children(':first');
						}
						$(obj).rotaterator({
							child: next,
							fadeSpeed: o.fadeSpeed,
							pauseSpeed: o.pauseSpeed
						});
					})
				});
			});
		}
	});
})(jQuery);
$(document).ready(function() {
	$('#rotate').rotaterator({
		fadeSpeed: 700,
		pauseSpeed: 5000
	});
});
