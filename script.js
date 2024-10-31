const swiper = new Swiper('.swiper', {

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 10
    },

    1728: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },


    autoplay: {
        delay: 5000,
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

  });