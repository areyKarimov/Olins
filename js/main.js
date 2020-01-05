$(document).ready(function(){
	$('.header__slider').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	});
	
	$('.main__team-slider').slick({
		nextArrow: '<button type="button" class="main__team-btn main__team-btn-next"></button>',
		prevArrow: '<button type="button" class="main__team-btn main__team-btn-prev"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1800,
			  settings: {
				slidesToShow: 2,
			  }		  
			},
			{
				breakpoint: 665,
				settings: {
				  slidesToShow: 1,
				}
			},
		  ]
	});

  });