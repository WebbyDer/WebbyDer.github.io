$('.fa-toggle-on').on('click', function(){
 $(".fixed-background i").toggleClass("fa-flip-horizontal");
 $("header").toggleClass("change");
});

$('#showModal').on('click', function(){
	$('.modal').css('display', 'flex').hide().fadeIn();
	$("body").addClass("modal-open");
});

$('.close').on('click', function(){
	$('.modal').fadeOut();
	$("body").removeClass("modal-open");
});