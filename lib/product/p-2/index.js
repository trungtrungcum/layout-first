$(function() {
    if ($('.carousel-product .owl-carousel').length) {
        $('.carousel-product .owl-carousel').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 1,
            loop: false,
            center: false,
            padding: 10,
            margin: 20,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: true,
            dots: true,
            autoplay: false,
            autoplayTimeout: 5000,
			autoplayHoverPause: true,
            callbacks: true,
            responsive: {
                480: {
                    items: 2
                },
                768: {
                    items: 3,
					nav: true,
					dots: false
                },
                992: {
                    items: 4
                }
            }
        });
    }

});


///tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
  });
