
(function($) {
    "use strict";

    var swiper = new Swiper(".mySwiper", {
        loop: false,
        spaceBetween: 8,
        grabCursor: true,
        slidesPerView: 1.5,
        breakpoints: {
                1920: {
                    slidesPerView: 5,
                    spaceBetween: 8
                },
                1028: {
                    slidesPerView: 4.5,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 8
                }
            }
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: false,
        spaceBetween: 10,
       
        thumbs: {
          swiper: swiper,
        },
      });
      /*===================================================================*/
    var swiper = new Swiper(".order", {
        loop: false,
        spaceBetween: 8,
        grabCursor: true,
        slidesPerView: 1.5,
        breakpoints: {
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 8
                },
                1028: {
                    slidesPerView: 4,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 8
                }
            }
      });
      var swiper2 = new Swiper(".order2", {
        loop: false,
        spaceBetween: 10,
       
        thumbs: {
          swiper: swiper,
        },
      });
      /*===================================================================*/
      var swiper = new Swiper(".invoice", {
        loop: false,
        spaceBetween: 8,
        grabCursor: true,
        slidesPerView: 1.5,
        breakpoints: {
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 8
                },
                1028: {
                    slidesPerView: 4,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 8
                }
            }
      });
      var swiper2 = new Swiper(".invoice2", {
        loop: false,
        spaceBetween: 10,
       
        thumbs: {
          swiper: swiper,
        },
      });
})(jQuery);