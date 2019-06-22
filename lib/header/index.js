function mobileWrapHideShow(){
	$('header .menu-moblie-header .content-header .button-moblie').on('click',function(){
		$('header .menu-hidden-mobi').addClass('active')
		$('header .backdrop').addClass('active')
	})
	$('header .backdrop').on('click',function(){
		$('header .menu-hidden-mobi').removeClass('active')
		$('header .backdrop').removeClass('active')
	})
};
function dropdownmoblie(){
	$('header .menu-hidden-mobi .menu-moblie-big .link-list-mobi .ct-mobi .menu .fa-plus').on('click',function(){
		$('header .menu-hidden-2').addClass('active')
		$('header .menu-hidden-mobi .menu-moblie-big .link-list-mobi .ct-mobi .menu .fa-plus').addClass('active')
		
	})
	$('header .menu-hidden-mobi .menu-moblie-big .link-list-mobi .ct-mobi .menu .fa-minus').on('click',function(){
		$('header .menu-hidden-2').removeClass('active')
		$('header .fa-plus').removeClass('active')
	})
};
function dropdownmoblie2(){
	$('header .menu-hidden-mobi .menu-moblie-big .link-list-mobi .ct-mobi .menu .menu-hidden-2 .menu-m-2 .fa-minus').on('click',function(){
		$('header .menu-hidden-3').addClass('active')
		// $('header .menu-hidden-mobi .menu-moblie-big .link-list-mobi .ct-mobi .menu .fa-plus').addClass('active')
		
	})
	// $('header .menu-hidden-mobi .menu-moblie-big .link-list-mobi .ct-mobi .menu .fa-minus').on('click',function(){
	// 	$('header .menu-hidden-2').removeClass('active')
	// 	$('header .fa-plus').removeClass('active')
	// })
};
$(document).ready(function(){
	
	mobileWrapHideShow()
	dropdownmoblie()
})
