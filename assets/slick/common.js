
$(document).ready(function() {
   //
			// Sticky Navigation
			//
			
	$('.responsive').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
		arrows: true,
      
  }
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
		arrows: true
      }
    },
  ]
});



 });	
