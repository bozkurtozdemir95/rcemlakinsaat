

$('.owl-carousel').owlCarousel({
	loop:true,
	item:1,
	navText:["",""],
	margin:10,
	autoplay: true,
	animateIn: 'bounceInLeft',
	animateOut: 'bounceOutRight',
	nav:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
})

$(function () {
	$('.sliderTitle1').textillate({
		loop:true,
		autoStart: true,
	}
	);

	$('.sliderTitle2').textillate({
		loop:true,
		autoStart: true,
	}
	);

	$('.sliderTitle3').textillate({
		loop:true,
		autoStart: true,
	}
	);
	
})