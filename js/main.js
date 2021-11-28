 //tab content//


 $(document).ready(function(){

 	$('#content-one').show();
 	$('#content-two').hide();
 	$('#content-three').hide();

 	$('#tab-one').click(function(){
 		$('#tab-one').addClass('active');
 		$('#tab-two').removeClass('active');
 		$('#tab-three').removeClass('active');

 		$('#content-one').show();
	 	$('#content-two').hide();
	 	$('#content-three').hide();
 	})

 	$('#tab-two').click(function(){
 		$('#tab-one').removeClass('active');
 		$('#tab-two').addClass('active');
 		$('#tab-three').removeClass('active');

 		$('#content-one').hide();
	 	$('#content-two').show();
	 	$('#content-three').hide();
 	})

 	$('#tab-three').click(function(){
 		$('#tab-one').removeClass('active');
 		$('#tab-two').removeClass('active');
 		$('#tab-three').addClass('active');
 		
 		$('#content-one').hide();
	 	$('#content-two').hide();
	 	$('#content-three').show();
 	})

 	// demo color changer 
 	$('span.red-color').click(function(){
 		$('body').addClass('red-color-bar');
 	})

 	// var cursor = document.querySelector(".cursor");
 	// var cursor2 = document.querySelector(".cursor2");
 	// document.addEventListnere("mousemove" ,function(e){
 	// 	cursor.css/styleshteet.cssText = cursor2.css/styleshteet.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
 	// });

 });