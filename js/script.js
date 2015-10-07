'use strict';
$(function(){

	hover();




	//takes an argument to specify the name of the container
	function hover(){
		var containers = "facebook twitter github codepen g-plus".split(" ");
		var animators = "fb-ic twitter-inner github-inner codepen-inner gplus-inner".split(" ");
		for (var x in containers){
			$('.'+containers[x]).hover(function(ed){
				var c = $(this).children();
				$(c[0]).toggleClass('bounce');
			});
			$('.'+containers[x]).click(function(ed){
				var c = $(this).children();
				$(c[0]).toggleClass('bounce');
			});
		}
	}
});