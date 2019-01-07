$(document).ready(function () {

  //toggle button
  $('.btn').click(function () {
    // changed from 3000 because were slow
    $('.nav-links').slideToggle(1000);
    $('.btn').toggleClass('change');

  });
  //transparent background

  $(window).scroll(function () {

    let position = $(window).scrollTop();


    if (position >= 100) {
      $('.logo4').attr('src', '/img-pages/logo4white.png');
      $('nav-links, a').attr('style', 'color: white');
      $('nav, nav-container').addClass('navBackground');
      $('nav-icons, path').attr('style', 'color: white');
    } else {
      $('.logo4').attr('src', '/img-pages/logo4.png');
      $('nav-links, a').attr('style', 'color: #03243e');
      $('nav, nav-container').removeClass('navBackground')
      $('nav-icons, path').attr('style', 'color: #03243e');

    }

  })
  //smooth scroll

  $('.nav-links a').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
      //also down from 3000
    }, 1000);

  })

  //owl team
  // $('.team-center').owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   smartSpeed: 4000,
  //   nav: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 5
  //     }
  //   }
  // })
  //owl customers
  // $('.customers-center').owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   smartSpeed: 4000,
  //   nav: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     600: {
  //       items: 1
  //     },
  //     1000: {
  //       items: 3
  //     }
  //   }
  // })

})
