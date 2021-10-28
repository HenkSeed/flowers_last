$(document).ready(function () {
	const flowersSlider = new Swiper('.flowers-slider', {
		// Optional parameters
		// direction: 'vertical',
		loop: true,
		slidesPerView: 1,
		// slidesPerGroup: 4,

		// If we need pagination
		// pagination: {
		// 	el: '.swiper-pagination',
		// },

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },

		// Настройки адаптивной версии
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 5,
				spaceBetween: 40,
			},
			// when window width is >= 952px
			952: {
				slidesPerView: 6,
				spaceBetween: 40,
			},
		},
	});

	const reviewsSlider = new Swiper('.reviews-slider', {
		// Optional parameters
		// direction: 'vertical',
		loop: true,
		slidesPerView: 1,
		// slidesPerGroup: 4,

		// If we need pagination
		// pagination: {
		// 	el: '.swiper-pagination',
		// },

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	});
	$('#review-1').on('click', function () {
		$.fancybox.open(
			[
				{
					src: 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
					opts: {
						caption: 'First caption',
						thumb: 'https://source.unsplash.com/IvfoDk30JnI/240x160',
					},
				},
				{
					src: 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
					opts: {
						caption: 'Second caption',
						thumb: 'https://source.unsplash.com/0JYgd2QuMfw/240x160',
					},
				},
			],
			{
				loop: true,
				thumbs: {
					autoStart: true,
				},
			}
		);
	});
});
