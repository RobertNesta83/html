$(document).on('ready', function() {
  $(".vertical-slider").slick({
  dots: true,
  infinite: false,
  vertical: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1
  
  });
  
  $(".horizontal-slider").slick();
  
  $(".text-slider").slick({
    dots: true,
    infinite: false,
  });
  
  $('.card-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
  });
  
  $('.carousel').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
  });
  });
  
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });