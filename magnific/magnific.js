$(document).ready(function () {
    $('.skills-center').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        // gallery: {
        //     enabled: 'false',
        //     navigateByImgClick: true,
		// 	preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        // },
        image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Sublime Tours Rome</small>';
			}
		}
      });
      $('.projects').magnificPopup({
        delegate: 'article',
        type: 'image',
        gallery: {
            enabled: 'true'
        }
      });
}); 