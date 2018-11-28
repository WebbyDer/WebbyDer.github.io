$('.fa-toggle-on').on('click', function(){
 $(".fixed-background i").toggleClass("fa-flip-horizontal");
 $("header").toggleClass("change");
});

$('.close').on('click', function(){
	$('.model').fadeOut();
	$("body").removeClass("model-open");
});


