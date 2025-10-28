const swiper = new Swiper(".multiple-slide-carousel", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".multiple-slide-carousel .swiper-button-next",
    prevEl: ".multiple-slide-carousel .swiper-button-prev",
  },
});
