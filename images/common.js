$(document).ready(function() {
  function scroll(){
    $("html, body").animate({
      scrollTop: $(document).height() }
      , 1700);
  }
	// setTimeout(scroll,2500);

  $('.text-block, .girl-block').addClass('animated');
});