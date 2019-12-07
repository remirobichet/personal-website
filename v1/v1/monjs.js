 $(document).ready(function(){
    $('a[href^="#"]').on('click', function(evt){
      evt.preventDefault(); 
	var target = $(this).attr('href');
	$('html, body')
       .stop()
       .animate({scrollTop: $(target).offset().top}, 1000 );
    });
});
        
$(document).ready(function() {
	$("#lightGallery").lightGallery();
	$("#lightGallery2").lightGallery();
	$("#lightGallery3").lightGallery();
	$("#lightGallery4").lightGallery();
	$("#lightGallery5").lightGallery();
	$("#lightGallery6").lightGallery();
	$("#lightGallery7").lightGallery();
});


$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 9000);
 
});