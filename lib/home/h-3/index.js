function productSlide() {
	$('[data-slide]').each(function(){
		return new Swiper($(this).find('.swiper-container'), {
			slidesPerView: 5,
			spaceBetween: 30,
			autoplay: {
				delay: 4000
			},
			navigation: {
	
				nextEl: $(this).find('.swiper-next'),
				prevEl: $(this).find('.swiper-prev'),
			},
			speed: 1000,
			observer: true,
			observeParents: true,
			breakpoints: {
				992: {
					slidesPerView: 3
				},
				768: {
					slidesPerView: 2
				},
				576: {
					slidesPerView: 1
				}
			}
		})
	})
   
}
$(document).ready(function() {
    productSlide()
})
