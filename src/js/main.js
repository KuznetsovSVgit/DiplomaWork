$(document).ready(function(){
var btnmenu = $('#btnmenu');
var modalMenu = $('#modalMenu');
var modalMenuClose = $('#modalMenuClose');
var heroButton = $('#heroButton');
var heroExtro = $('#heroExtro');
var headerLog = $('#headerLog');
var headerLogBtn = $('#headerLogBtn');
var headerLogClose = $('#headerLogClose');
var modalOrder = $('#modalOrder');
var modalOrderBtn = $('#modalOrderBtn-1, #modalOrderBtn-2, #modalOrderBtn-3, #modalOrderBtn-4, #modalOrderBtn-5, #modalOrderBtn-6, #modalOrderBtn-7, #modalOrderBtn-8, #modalOrderBtn-9, #modalOrderBtn-10, #modalOrderBtn-11, #modalOrderBtn-12, #modalOrderBtn-13, #modalOrderBtn-14, #modalOrderBtn-15');
var modalOrderClose = $('#modalOrderClose');
// Слайдер
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
          autoplay: true,
          autoplaySpeed: 5000
    }},]});
// Открытие/закрытие Login
headerLogBtn.on('click', function(){
headerLog.addClass('headerLog_active');
})
headerLogClose.on('click', function(){
headerLog.removeClass('headerLog_active'); 
})
// Открытие/закрытие окно заказа
modalOrderBtn.on('click', function(){
modalOrder.addClass('modalOrder_active');
})
modalOrderClose.on('click', function(){
modalOrder.removeClass('modalOrder_active'); 
})
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
// Валидация форм
$('#hero-form').validate({

});
// Закрытие доп. формы
// heroButton.on('click', function(){
// heroExtro.removeClass('hero_active');
// })
});

