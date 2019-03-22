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
$('.info-block').slick({
  prevArrow: $('.info__leftArrow'),
  nextArrow: $('.info__rightArrow'),
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
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000 
}},]});
$('.recall-block').slick({
  prevArrow: $('.recall__leftArrow'),
  nextArrow: $('.recall__rightArrow'),
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
          // autoplay: true,
          // autoplaySpeed: 5000
    }},]});
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

