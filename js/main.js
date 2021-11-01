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
					src: 'https://images.unsplash.com/photo-1617709391063-18aafa02589f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1936&q=80',
					opts: {
						caption: 'First caption',
						thumb:
							'https://images.unsplash.com/photo-1617709391063-18aafa02589f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1936&q=80/240x160',
					},
				},
				{
					src: 'https://images.unsplash.com/photo-1503652601-557d07733ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1536&q=80/1500x1000',
					opts: {
						caption: 'Second caption',
						thumb:
							'https://images.unsplash.com/photo-1503652601-557d07733ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1536&q=80/240x160',
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
	const hides = document.querySelectorAll('.hide');
	const more = document.querySelector('.more');

	more.addEventListener('click', (event) => {
		event.preventDefault();
		more.classList.toggle('more-up');
		more.classList.toggle('more-down');
		if (more.textContent === 'Все цветы') {
			console.log('more.textContent-1: ', more.textContent);
			more.textContent = 'Скрыть';
		} else {
			console.log('more.textContent-2: ', more.textContent);
			more.textContent = 'Все цветы';
		}
		hides.forEach((hide) => {
			hide.classList.toggle('goods__hidden');
			// hide.classList.toggle('goods__hidden');
		});
	});
});
