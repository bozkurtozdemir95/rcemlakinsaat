

$('.owl-carousel').owlCarousel({
	loop:true,
	item:1,
	navText:["",""],
	margin:10,
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