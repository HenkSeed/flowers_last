// Обрабатываем нажатие на строчки "Посмотреть фотографии букета" в слайдере
const viewBouquet = document.querySelectorAll('.review-link');
// Перебираем сообщение "Посмотреть фотографии букета" для каждого отзыва
viewBouquet.forEach((bouquet) => {
	console.log('bouquet: ', bouquet);
	bouquet.addEventListener('click', () => {
		fancyNew();
	});
});

// Имитируем нажатие на миникартинку, которая скрыта через display: none;
function fancyNew() {
	document.getElementById('bouquet-1').click();
}

// Функция Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
	Thumbs: {
		Carousel: {
			fill: false,
			center: true,
		},
	},
});
