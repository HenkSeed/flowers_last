// ФАЙЛ НЕ ПОДКЛЮЧЕН !!!

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
$('#review-2').on('click', function () {
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
