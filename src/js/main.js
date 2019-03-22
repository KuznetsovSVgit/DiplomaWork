$(document).ready(function(){
var btnmenu = $('#btnmenu');
var modalMenu = $('#modalMenu');
var modalMenuClose = $('#modalMenuClose');
var heroButton = $('#heroButton');
var heroExtro = $('#heroExtro');
// var slickInfo = $('#slick');
// // var slickRecall = $('#slickRecall');


// $(window).resize(function() {
  
//   if ($(window).width() < 576) {
//     slickInfo.addClass('slick slick-initialized slick-slider');
//     slickInfo.removeClass('info-block');
//  }
//   });

$('.slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: $('.slick__leftArrow'),
  nextArrow: $('.slick__rightArrow'),
});
$('.slickRecall').slick({
  // slidesToShow: 1,
  // slidesToScroll: 1,
  responsive: [
    {
        breakpoint: 9999,
        settings: "unslick"
    },
    {
       breakpoint: 576,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          // prevArrow: $('.slickRecall__leftArrow'),
          // nextArrow: $('.slickRecall__rightArrow')
    }
},
]
});
// Слайдер

// Открытие/закрытие меню
btnmenu.on('click', function(){
modalMenu.addClass('modalMenu_active');
})
modalMenuClose.on('click', function(){
modalMenu.removeClass('modalMenu_active');
})
// Открытие доп. формы
heroButton.on('click', function(){
heroExtro.addClass('hero_active');
})
// Закрытие доп. формы
// heroButton.on('click', function(){
// heroExtro.removeClass('hero_active');
// })
});

