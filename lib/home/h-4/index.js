function newsSlide() {
    return new Swiper('.home-4 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 4000
        },
        // navigation: {

        //     nextEl: '.home-3 .swiper-next',
        //     prevEl: '.home-3 .swiper-prev',
        // },
        speed: 1000,
        observer: true,
        observeParents: true,
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            }
        }
    })
}
$(document).ready(function() {
    newsSlide()
})