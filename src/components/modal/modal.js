$(document).on('click', '.jsLogin', function () {
  $('body').addClass('body-hidden');
  $('.modal').addClass('modal-active');
  $('.modal-reg').addClass('modal-noactive');
  $('.overlay-modal').addClass('overlay-active');
});

$(document).on('click', '.jsReg', function () {
  $('body').addClass('body-hidden');
  $('.modal').addClass('modal-active');
  $('.modal-login').addClass('modal-noactive');
  $('.overlay-modal').addClass('overlay-active');
});

$(document).on('click', '.overlay-modal', function () {
  $('body').removeClass('body-hidden');
  $('.modal').removeClass('modal-active');
  $('.overlay-modal').removeClass('overlay-active');
  $('.modal-login').removeClass('modal-noactive');
  $('.modal-reg').removeClass('modal-noactive');
});

$(document).on('click', '.modal-close', function () {
  $('body').removeClass('body-hidden');
  $('.modal').removeClass('modal-active');
  $('.overlay-modal').removeClass('overlay-active');
  $('.modal-login').removeClass('modal-noactive');
  $('.modal-reg').removeClass('modal-noactive');
});
