if ($('.collections-items__item').length > 3) {
  $('.jsSliderProduct').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/arrow_next.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/images/arrow_next.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}
