$(document).ready(function(){
var btnmenu = $('#btnmenu');
var modalMenu = $('#modalMenu');
var modalMenuClose = $('#modalMenuClose');

btnmenu.on('click', function(){
modalMenu.addClass('modalMenu_active');
  });

modalMenuClose.on('click', function(){
modalMenu.removeClass('modalMenu_active');
})
});