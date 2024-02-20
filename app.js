Fancybox.bind("[data-fancybox]", {
  // Your custom options
  contentClick: 'close',
  Toolbar: {
    display: {
      left: [],
      middle: ["infobar"],
      right: ["thumbs", "close"],
    },
  },
  Images: {
    protected: true,
    zoomOpacity: true
  },
});

const swiper = new Swiper('#swiper-1', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  lazyLoading: true,
  loop: true,
  keyboard:{
    enabled:true
  }
});