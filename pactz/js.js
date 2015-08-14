




var minWidth = 800;
if ($(window).width() >= minWidth) {
$(function() {
			$("html, body").mousewheel(function(event, delta) {
				this.scrollLeft -= (delta * 0.5);
				event.preventDefault();
			});
		});




$(function() {
  $("#btnClick").click(function() {
    $("#overlay").fadeIn();
  });
  $("#clsBox").click(function() {
    $("#overlay").fadeOut();
  });
});







var parallaxScroll = {
	init: function() {
		var self = this;
		$(function(){
			self.$sections = $('div.section').each(function(index){
				$(this).data('sectionIndex', index);
			});
			self.handleEvents();
			self.initParallax();
		});
	},
	initParallax: function() {
		var isHomePage = $('body').hasClass('home'),
			$main = $('div.main');
		
		if (isHomePage) {
			$main.width($main.width() + $(window).width() - 10000);
		}
		
		$(window).stellar({
			horizontalOffset: 40,
			verticalScrolling: !isHomePage
		});
	},
	handleEvents: function() {
		var self = this,
			debounce = function(func, wait) {
				var timeout;
				return function() {
					var context = this, args = arguments;
					var later = function() {
						timeout = null;
						func.apply(context, args);
					};
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
				}
			},
			handleScroll = function() {
				var scrollLeft = $(window).scrollLeft(),
					sectionIndex = Math.round((scrollLeft - 40) / self.$sections.first().outerWidth()),
					$activeSection = self.$sections.eq(sectionIndex);

				if ($activeSection.length === 0) {
					$activeSection = self.$sections.last();
				}
				

				if ($activeSection.length === 0) return;
				
				$(window).unbind('scroll.stellarsite');

				if (scrollLeft === 0) {
					$(window).unbind('scroll.stellarsite').bind('scroll.stellarsite', debounce(handleScroll, 400));
				} else {
					$('html,body').animate({
						scrollLeft: $activeSection.offset().left - 40
					}, 300, 'easeOutQuad', function() {
						setTimeout(function(){
							$(window).unbind('scroll.stellarsite').bind('scroll.stellarsite', debounce(handleScroll, 400));
						}, 300);
					});
				}	
				$(window).bind('mousewheel', function(){
					$('html,body').stop(true, true);
				});
			};
		if (window.location.href.indexOf('#show-offset-parents-default') === -1) {
			$(window).bind('scroll.stellarsite', debounce(handleScroll, 150));
		}
	}
};


parallaxScroll.init();














}









else {
     




$(function(){
 var shrinkHeader = 300;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('header').addClass('shrink');
           console.log("paska");
        }
        else {
        	console.log("kakka");
            $('header').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

};






jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	}
});

