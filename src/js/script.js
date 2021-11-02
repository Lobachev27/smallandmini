/*Выпадающее меню*/

$(document).ready(function() {
  $('.header_hamburger').click(function(){
    if ($('.header_hamburger').hasClass('active')) {
      $('.header_hamburger').removeClass('active');
      $('.header_mobile').removeClass('active');
      $('body').removeClass('ov-hid');
    } else {
      $('.header_hamburger').addClass('active');
      $('.header_mobile').addClass('active');
      $('body').addClass('ov-hid');
    }
  });
});

/*Плавный скролл по якорным ссылкам*/

$(document).ready(function(){
  $(".header_nav, .header_mobile, .header_btn").on("click","a", function (event) {
    event.preventDefault();
    $('.header_hamburger').removeClass('active');
    $('.header_mobile').removeClass('active');
    $('body').removeClass('ov-hid');
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  15
});

/*Раcкрытие блока с продукцией*/

$(document).ready(function() {
  $('.product_item').click(function(){
    $('.product_main').removeClass('active');
    $('.product_result').addClass('active');
  });
  $('.product_close').click(function(){
    $('.product_main').addClass('active');
    $('.product_result').removeClass('active');
    function remove_hash_from_url()
    {
      var uri = window.location.toString();
      if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("#"));
        window.history.replaceState({}, document.title, clean_uri);
      }
    }
    remove_hash_from_url();
  });
});

/*Модальные окна*/

function open_modal(e) {
  $('#'+ e).addClass('show');
  $('body').addClass('ov-hid');
}
function close_modal(e) {
  $('#'+ e).removeClass('show');
  $('body').removeClass('ov-hid');
}

$(document).click(function(event) {
  if(!$(event.target).closest('.modalDialog_wrapper').length
    && !$(event.target).hasClass('video_link')
    && !$(event.target).hasClass('header_hamburger')){
    $(".modalDialog").removeClass('show');
    $('body').removeClass('ov-hid');
  }
});

/*При клике play открывается соответствующее видео в модальном окне*/

$(function() {
  var videoSrc = '';
  $(".video_slider").on('click', '.video_link', function() {
    console.log($(this).attr('data-src'));
    videoSrc = 'https://www.youtube.com/embed/' + $(this).data('src') + "?autoplay=1";
    $('.videoModal_video').attr('src', videoSrc);
  });
  $('.close, .modalDialog').click(function(){
    videoSrc = '';
    $('.videoModal_video').attr('src', videoSrc);
    console.log($(this).attr('data-src'));
  });
});

/*Cлайдер с продукцией*/

$(document).ready(function() {
  var swiper = undefined;
  function initSwiper() {
    swiper = new Swiper('.product .swiper-container', {
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      autoHeight: true,
      grabCursor: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      /*pagination: {
        el: ".product .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 0
      },*/
      navigation: {
        nextEl: '.product .swiper-button-next',
        prevEl: '.product .swiper-button-prev'
      }
    });
  }

  initSwiper();

  var windowHeight = $(document).height();

  swiper.on("slideChange", function () {
      if(swiper.realIndex == 0){
        window.location.href = "#suhie-korma";
        $("html, body").animate({scrollTop: (windowHeight * 0.15) },"slow");
      }
      if(swiper.realIndex == 1){
        window.location.href = "#konservy";
        $("html, body").animate({scrollTop: (windowHeight * 0.15) },"slow");
      }
      if(swiper.realIndex == 2){
        window.location.href = "#lakomstvo";
        $("html, body").animate({scrollTop: (windowHeight * 0.15) },"slow");
      }
    }
  )

  $(".product_item, .product_box_top .product_box_name").click(function(e){
    e.preventDefault();
    console.log($(this).data('slide'));
    var slide = $(this).data('slide');
    swiper.slideTo(slide);

    var windowHeight = $(document).height();

    if(slide == 1){
      window.location.href = "#suhie-korma";
      $("html, body").animate({scrollTop: (windowHeight * 0.15) },"slow");
    }
    if(slide == 2){
      window.location.href = "#konservy";
      $("html, body").animate({scrollTop: (windowHeight * 0.15) },"slow");
    }
    if(slide == 3){
      window.location.href = "#lakomstvo";
      $("html, body").animate({scrollTop: (windowHeight * 0.15) },"slow");
    }
  });

  if(window.location.href.indexOf("#suhie-korma") > -1){
    swiper.slideTo("1");
    $('.product_main').removeClass('active');
    $('.product_result').addClass('active');
    $("html, body").animate({scrollTop: (windowHeight * 0.15) },"slow");
  }
  if(window.location.href.indexOf("#konservy") > -1){
    swiper.slideTo("2");
    $('.product_main').removeClass('active');
    $('.product_result').addClass('active');
    $("html, body").animate({scrollTop: (windowHeight * 0.15) },"slow");
  }
  if(window.location.href.indexOf("#lakomstvo") > -1){
    swiper.slideTo("3");
    $('.product_main').removeClass('active');
    $('.product_result').addClass('active');
    $("html, body").animate({scrollTop: (windowHeight * 0.15) },"slow");
  }

});

/*Cлайдер с видео*/

$(document).ready(function() {
  swiper = new Swiper('.video .swiper-container', {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 15,
    centeredSlides: true,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    navigation: {
      nextEl: '.video .swiper-button-next',
      prevEl: '.video .swiper-button-prev'
    }
  });
});

/*Cлайдер с магазинами*/

$(document).ready(function() {
  swiper = new Swiper('.shop .swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000
    },
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 40,
    autoHeight: true,
    grabCursor: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    navigation: {
      nextEl: '.shop .swiper-button-next',
      prevEl: '.shop .swiper-button-prev'
    },
    breakpoints: {
      991: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      }
    }
  });
});

/*Пагинация страницы*/


$(document).ready(function() {
  function pagination() {

    var offset = $(document).scrollTop();
    var windowHeight = $(document).height();
    var $body = $('body');

    switch (true) {
      case (offset > (windowHeight * 0.72)):
        $body.removeClass().addClass('page-1 page-2 page-3 page-4 page-5');
        break;
      case (offset > (windowHeight * 0.49)):
        $body.removeClass().addClass('page-1 page-2 page-3 page-4');
        break;
      case (offset > (windowHeight * 0.32)):
        $body.removeClass().addClass('page-1 page-2 page-3');
        break;
      case (offset > (windowHeight * 0.15)):
        $body.removeClass().addClass('page-1 page-2');
        break;
      default:
        $body.removeClass().addClass('page-1');
    }
  }

  pagination();

  $(document).on('scroll', pagination);

  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
});