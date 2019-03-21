$(document).ready(function(){
var btnmenu = $('#btnmenu');
var modalMenu = $('#modalMenu');
var modalMenuClose = $('#modalMenuClose');
var slick = $('#slick');

$('.slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: $('.slick__leftArrow'),
  nextArrow: $('.slick__rightArrow'),
});
// Слайдер
// $(window).resize(function() {
// if ($(window).width() < 576) {
//  slick.removeClass('info-block');
//  slick.addClass('slick');

// })

// Открытие/закрытие меню
btnmenu.on('click', function(){
modalMenu.addClass('modalMenu_active');
  })
modalMenuClose.on('click', function(){
modalMenu.removeClass('modalMenu_active');
});
});

