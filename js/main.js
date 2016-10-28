// var overlay = document.getElementById("overlay");

// window.addEventListener('load', function() 
// {
// 	overlay.style.display = 'none';
// })

  
//------- SITE LOADER ---//

jQuery(window).load(function() { 
    jQuery(".spinner").delay(400).fadeOut("slow");
    jQuery(".title-load").delay(400).fadeOut("slow");
    jQuery("#overlay").delay(800).fadeOut("slow"); 


});

//----- Menu bar ---//
$(window).scroll(function(){
  var sticky = $('#headerbar'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('scrollView');
  else sticky.removeClass('scrollView');
});
