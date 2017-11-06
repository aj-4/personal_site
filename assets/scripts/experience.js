$(document).ready(function(){
	$('.hidden').slideDown(600);
	
	//trying to make icon toggle per each job on hover

	$('.job').hover(function(){
		$(this).find('h2').css('color','black');
		$(this).find('img').css('opacity','1');
		
	},
	function(){
		$(this).find('h2').css('color','#296977');
		$(this).find('img').css('opacity','.85');
	});

	$('.j-tog').on('click', function(){
		$(this).find('.j-desc').slideToggle('fast');
	});

	});