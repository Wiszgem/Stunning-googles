
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'images/slides/Snapinsta.app_323189277_712073666955881_313082437471727927_n_1080.jpg' },
              { src: 'images/slides/Snapinsta.app_297362375_623234555695729_4466791697534091327_n_1080.png' },
              { src: 'images/slides/Snapinsta.app_297510873_533943081822197_1277398907032049076_n_1080.jpg' },
              { src: 'images/slides/2024111316525539.jpg'},
              { src: 'images/slides/2024111316482057.jpg'},
              { src: 'images/slides/2024111316545088.jpg'}

          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


