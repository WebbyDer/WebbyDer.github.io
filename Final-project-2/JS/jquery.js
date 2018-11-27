$('.fa-toggle-on').on('click', function(){
 $(".fixed-background i").toggleClass("fa-flip-horizontal");
 $("header").toggleClass("change");
});

$('.close').on('click', function(){
	$('.model').fadeOut();
	$("body").removeClass("model-open");
});
///////******Twitter Bird********/////
function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0];
	if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";
	fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");



