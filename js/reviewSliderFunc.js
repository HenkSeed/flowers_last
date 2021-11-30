function reviewSliderFunc() {
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
}
