function homeTab() {
    $('.home-2 .showed').on('click', function() {
        $(this).siblings('.main-nav').toggleClass('active')
    })
    $('.home-2 .main-nav .item').on('click', function() {
        let active = $(this).attr('data-tab')
        $('.home-2 .showed').text($(this).text())
        $(this).parent().removeClass('active')
        $('.home-2 .main-nav .item').removeClass('active')
        $(this).addClass('active')
        $('.home-2 .main-content .content-item').removeClass('active')
        $('.home-2 .main-content .content-item[data-content=' + active + ']').addClass('active')
    })
}
$(document).ready(function() {
    homeTab()
})