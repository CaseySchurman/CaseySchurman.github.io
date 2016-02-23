$(document).ready(function(){
	$('nav a').on('click', function(){
		//Current class assignment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');
		
		//Set heading text
		$('h1#heading').text($(this).text());
		
		//Get and filter link text
		var category = $(this).text().toLowerCase().replace(' ', '-');
		
		//Remove hidden class if 'all-projects' is selected, slide down aboutme section
		if(category == 'all-projects'){
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
			$('section#aboutme').slideDown('slow');
		} else {
			//Since not on 'All Projects', slide up aboutme section
			$('section#aboutme').slideUp('slow');
			//For each 'category' in list
			$('ul#gallery li').each(function(){
				if(!$(this).hasClass(category)){
					//If item isn't the category selected, hide it
					$(this).hide().addClass('hidden');
				} else {
					//Else item is the category selected, fade it in
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		//Stop link behavior
		return false;
	});
	
	//Mouseenter Overlay Effect
	$('ul#gallery li').on('mouseenter',function(){
		// Get data attribute values
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');
		
		//Validation
		if(desc == null){
			desc = 'Click To Enlarge';
		}

		if(title == null){
			title = '';
		}

		//Create an overlay div
		$(this).append('<div class="overlay"></div>');

		//Get the overlay div
		var overlay = $(this).children('.overlay');

		//Add html to overlay
		overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>');
		
		//Fade in overlay
		overlay.fadeTo(600, 0.9);
	});

	//Mouseleave Overlay Effect
	$('ul#gallery li').on('mouseleave',function(){
		//Create an overlay div
		$(this).append('<div class="overlay"></div>');

		//Get the overlay div
		var overlay = $(this).children('.overlay');

		//Fade out overlay
		overlay.fadeOut(600, function(){
			//Remove overlay div so doesn't get recreated
			$(this).remove();
		});
	});
});