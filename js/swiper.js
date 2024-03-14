const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    650: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1050: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },
  //   // And if we need scrollbar
});
