$(document).ready(function() {


// add jQuery here


$('.nav_Circles').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.Circles').removeClass('hide');
  $('.item.Circles').addClass('show');
});

$('.nav_Tri').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.Tri').removeClass('hide');
  $('.item.Tri').addClass('show');
});

$('.nav_squares').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.squares').removeClass('hide');
  $('.item.squares').addClass('show');
});

$('.nav_Hex').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.Hex').removeClass('hide');
  $('.item.Hex').addClass('show');
});

$('.nav_Freeforms').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.Freeforms').removeClass('hide');
  $('.item.Freeforms').addClass('show');
});

$('.nav_all').click(function(event) {
  $('.item').removeClass('hide');
  $('.item').addClass('show');
});

$('.nav_thumbnail').click(function(event) {
  $('.item').removeClass('col1of4');
  $('.item').removeClass('fullsize');
  $('.item').addClass('thumbnail');

});

$('.nav_fullsize').click(function(event) {

  $('.item').addClass('fullsize');
});


















  });
