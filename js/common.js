
$(function () {

  var otsosiUTraktorista = 300,
    $nav = $('.menu__nav ul');

  $('.menu__toggle').on('click', function (event) {

    $nav.slideToggle(otsosiUTraktorista);
    event.stopPropagation();
  });

  $(document).on('click', function () {
    $nav.slideUp(otsosiUTraktorista);

  });
});





$(function(){

	$(window).scroll(function() {

		if($(this).scrollTop() >= 730) {

			$('.menu__common').addClass('stickytop');}

		else{

			$('.menu__common').removeClass('stickytop');}

	});
});


jQuery(document).ready(function(){

  jQuery('.menu__nav a[href^="#"]').click( function(){

    var scroll_el = jQuery(this).attr('href');

    var destination = jQuery(scroll_el).offset().top;

    destination = destination - 90; 

    if (jQuery(scroll_el).length != 0) {

      jQuery('html, body').animate( { scrollTop: destination }, 1100 );

      $('.menu__nav ul').slideToggle(300, function() {

				$(this).removeAttr('style');

			});
    }
  	return false;
  });
})


jQuery(document).ready(function() {

  jQuery('input, select').styler();

});

