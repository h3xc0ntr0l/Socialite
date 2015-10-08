$(function(){
	var otherAnimConts = ["slide-down-anim"];
	$(window).scroll(function(){
		var current, target;
		current = scrollY+(screen.height/2);
		target = $('.roll-right-anim').offset().top;
		if (current >= target){
			if (!($('.roll-right-anim').hasClass('roll-right'))){
				$('.roll-right-anim').toggleClass('roll-right');

			}
		} 
	});


});