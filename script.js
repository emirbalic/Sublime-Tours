$(document).ready(function () {

  var smallScreen = window.matchMedia("(max-width: 480px)");
  if (smallScreen.matches){
    $('nav-links, a').attr('style', 'color: white');
  };
  //toggle button
  $('.btn').click(function () {
    // changed from 3000 because were slow
    $('.nav-links').slideToggle(1000);
    $('.btn').toggleClass('change');

  });
  //transparent background

  $(window).scroll(function () {

    let position = $(window).scrollTop();


    var smallScreen = window.matchMedia("(max-width: 480px)");
    if (smallScreen.matches){
      $('nav-links, a').attr('style', 'color: white');
    }

    if (position >= 100) {
      $('.btn').addClass('btnchange');
      $('.bar1').attr('style', 'background: white');
      $('.bar2').attr('style', 'background: white');
      $('.bar3').attr('style', 'background: white');

      $('.logo4').attr('src', '/img-pages/logo4white.png');
      $('nav-links, a').attr('style', 'color: white');
      $('nav, nav-container').addClass('navBackground');
      $('nav-icons, path').attr('style', 'color: white');
    } else {

      $('.btn').removeClass('btnchange');
      $('.bar1').attr('style', 'background: #03243e');
      $('.bar2').attr('style', 'background: #03243e');
      $('.bar3').attr('style', 'background: #03243e');

      $('.logo4').attr('src', '/img-pages/logo4.png');
      $('nav, nav-container').removeClass('navBackground')
      $('nav-icons, path').attr('style', 'color: #03243e');
      if (smallScreen.matches){
        $('nav-links, a').attr('style', 'color: white');
      } else {
        $('nav-links, a').attr('style', 'color: #03243e');
      }
      
      
      

    }

  })
  //smooth scroll

  $('.nav-links a').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000);
  })
})
