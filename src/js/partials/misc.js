$(document).ready(function () {

    $('.filters-drawer').each(function() {
        var $d = $(this);
        $('.filters-drawer-trigger').click(function() {
            var $content = $($d.children('.filters-drawer-content'));
            $content.slideToggle(500);
        });
    });

    $("#main-banner").owlCarousel({
        animateOut: 'fadeOut',
        loop:true,
        margin:10,
        nav:true,
        navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
        items:1
    });

    $("#social-banner").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $("#magazine-banner").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $("#product-related").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });

    $("#mag-head-banner").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $(".select2").select2({
        minimumResultsForSearch: Infinity
    });

    $("input[name='quanitySniper']").TouchSpin({
        buttondown_class: "btn btn-link",
        buttonup_class: "btn btn-link"
    });

    $('#zoomContent').zoom();
    $(".zoomThumb a").click(function () {
        var largeImage = $(this).find("img").attr('data-large');
        $(".zoomImage1").attr('src', largeImage);
        $(".zoomImg").attr('src', largeImage);
        $(".gall-item").attr('href', largeImage);
    });

});
