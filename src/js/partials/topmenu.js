window.width = jQuery(window).width();

/* Scroll To Top */

window.scrollTop 	= 0;

jQuery(window).scroll(function() {
	_toTop();
});

function _toTop() {
	_scrollTop = jQuery(document).scrollTop();
	
	if(_scrollTop > 100) {

		if(jQuery("#toTop").is(":hidden")) {
			jQuery("#toTop").show();
		}

	} else {

		if(jQuery("#toTop").is(":visible")) {
			jQuery("#toTop").hide();
		}

	}

}

// Drop Downs - do not hide on click
jQuery("#topMain li.dropdown, #topMain a.dropdown-toggle").bind("click", function(e) {
	e.stopPropagation();
});

// Search
jQuery('.search i.fa').click(function () {
	if(jQuery('.search .search-box').is(":visible")) {
		jQuery('.search .search-box').fadeOut(300);
	} else {
		jQuery('.search-box').fadeIn(300);
		jQuery('.search .search-box form input').focus();

		// hide quick cart if visible
		if (jQuery('.header .quick-cart .quick-cart-box').is(":visible")) {
			jQuery('.header .quick-cart .quick-cart-box').fadeOut(300);
		}
	}
}); 

// close search box on body click
if(jQuery('.search i.fa').size() != 0) {
	jQuery('.search .search-box, .search i.fa').on('click', function(e){
		e.stopPropagation();
	});

	jQuery('body').on('click', function() {
		if(jQuery('.search .search-box').is(":visible")) {
			jQuery('.search .search-box').fadeOut(300);
		}
	});
}

jQuery(document).bind("click", function() {
	if(jQuery('.search .search-box').is(":visible")) {
		jQuery('.search .search-box').fadeOut(300);
	}
});


// Quick Cart
jQuery('.quick-cart > a').click(function (e) {
	e.preventDefault();
	
	var _quick_cart_box = jQuery('.quick-cart .quick-cart-box');

	if(_quick_cart_box.is(":visible")) {
		_quick_cart_box.fadeOut(300);
	} else {
		_quick_cart_box.fadeIn(300);

		// close search if visible
		if(jQuery('.search .search-box').is(":visible")) {
			jQuery('.search-box').fadeOut(300);
		}
	}
});

// close quick cart on body click
if(jQuery('.quick-cart > a').size() != 0) {

	jQuery('.quick-cart').on('click', function(e){
		e.stopPropagation();
	});

	jQuery('body').on('click', function() {
		if (jQuery('.quick-cart .quick-cart-box').is(":visible")) {
			jQuery('.quick-cart .quick-cart-box').fadeOut(300);
		}
	});
}