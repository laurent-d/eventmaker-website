var $ = $.noConflict();
$(function() {
  "use strict";

  if ($(".navbar").width() > 1007) {
    $('.nav .dropdown').hover(function() {
      $(this).addClass('open');
    }, function() {
      $(this).removeClass('open');
    });
  };
  // site preloader
  //preloader
  $(window).preloader({
    delay: 500
  });

  $(".search-nav a,.close-search").on("click", function() {
    $(".top-search").hide();
  });
  $(".search-nav a").on("click", function() {
    $(".top-search").show();
  });
  //back to top
  //Check to see if the window is top if not then display button
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').on("click", function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  //animated scroll menu
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $('.navbar-transparent').addClass('shrink');
    }
    if (scroll <= 0) {
      $('.navbar-transparent').removeClass('shrink');
    }
  });
  //smooth scroll
    $('.scroll-to a[href*="#"]:not([href="#"])').on("click", function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 700);
          return false;
        }
      }
    });
  /*****video popup **/
  $('.video-popup').magnificPopup({
    type: 'iframe'
  });
  /*****maginific popup **/
  $('.popup-container').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  });
  //smooth scroll
  $(function() {
    $('.scroll-to a[href*="#"]:not([href="#"])').on("click", function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });

});

function initcookies() {
  Cookies.set('EventMaker', 1, {
    expires: 365
  });
};

$(".cookie a.btn").click(function(event) {
  event.preventDefault();
  initcookies();
  $(".cookie").toggleClass('display');
});

function superinit() {
  var cookies_data = Cookies.get('EventMaker');
  if (Cookies.get('EventMaker')) {
  } else {
    $(".cookie").toggleClass('display');
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  superinit();
});
