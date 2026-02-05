
(function($) {
    "use strict";
// sticky menu
/*
var header = $('.menu-sticky');
var win = $(window);
win.on('scroll', function() {
   var scroll = win.scrollTop();
   if (scroll < 300) {
       header.removeClass("sticky");
   } else {
       header.addClass("sticky");
   }
});*/
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
      $('.menu-sticky').addClass('sticky')
  } else{
      $('.menu-sticky').removeClass('sticky')
  }
});
/*===========================================================================*/
    const button = document.querySelector('.btn.goto-top');

    const displayButton = () => {
      window.addEventListener('scroll', () => {
      
        if (window.scrollY > 100) {
          button.style.display = "block";
        } else {
          button.style.display = "none";
        }
      });
    };
    
    const scrollToTop = () => {
      button.addEventListener("click", () => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        }); 
        console.log(event);
      });
    };
    
    displayButton();
    scrollToTop();
  
  $(window).on('load', function() { 
    $('#status').fadeOut(); 
          $('#preloader').delay(350).fadeOut('slow'); 
          $('body').delay(550).css({'overflow':'visible'});
  })
  AOS.init({
    duration: 1200,
  })
/*=========================================================================================*/
if ($('.otp')) {
  $(".otp").keyup(function () {
      if (this.value.length == this.maxLength) {
          var $next = $(this).next('.otp');
          if ($next.length)
              $(this).next('.otp').focus();
          else
              $(this).blur();
      }
  });
}
/*=========================================================================================*/

$(".choose-box-with-click").click(function(){
  $(this).toggleClass('active')
  $(this).siblings().removeClass('active')
  $(".show-next-button-with-click").addClass('d-block')
})
/*=========================================================================================*/
  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

})(jQuery);