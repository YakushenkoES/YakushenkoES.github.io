$(document).ready(function () {

  $('.popup-btn').on('click', function(event){
    event.preventDefault();
    $('body').addClass('popup-opened');
    $('.popup').fadeIn();
  });
  $('.popup-close-btn').on('click', function(event){
    event.preventDefault();
    $('body').removeClass('popup-opened');
    $('.popup').fadeOut();
  });

  $(".feature-slider").slick({
    slidesToShow: 4,
    infinite: true,
    dots: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
          nextArrow: '<button type="button" class="slick-next slick-btn"></button>'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
          nextArrow: '<button type="button" class="slick-next slick-btn"></button>'

        }
      }
    ]
  });
});