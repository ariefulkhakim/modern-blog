// $(document).ready(function(){
    
//     var clickEvent = false;
//     $('#theCarousel').carousel({
//         interval:   4000    
//     }).on('click', '.list-group li', function() {
//             clickEvent = true;
//             $('.list-group li').removeClass('active');
//             $(this).addClass('active');     
//     }).on('slid.bs.carousel', function(e) {
//         if(!clickEvent) {
//             var count = $('.list-group').children().length -1;
//             var current = $('.list-group li.active');
//             current.removeClass('active').next().addClass('active');
//             var id = parseInt(current.data('slide-to'));
//             if(count == id) {
//                 $('.list-group li').first().addClass('active'); 
//             }
//         }
//         clickEvent = false;
//     });
// })

// $(window).load(function() {
//     var boxheight = $('#theCarousel .carousel-inner').innerHeight();
//     var itemlength = $('#theCarousel .item').length;
//     var triggerheight = Math.round(boxheight/itemlength+1);
//     $('#theCarousel .list-group-item').outerHeight(triggerheight);
// });

// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-sizer',
//   percentPosition: true
// });


$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


// Blog Masonry Layout
// -------------------------------------------------- */
initelementsmansonry();

	function initelementsmansonry () {

		var $container = $('.elements-container');
			// init
			$container.isotope({
				// options
				itemSelector: '.elements-selector',
				percentPosition: true
			});
	}
