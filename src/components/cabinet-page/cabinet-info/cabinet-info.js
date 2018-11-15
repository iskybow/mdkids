$(document).ready(function() {
  if ($('.jsPhoneMask').length > 0) {
    $('.jsPhoneMask').inputmask({alias: "phoneru"});
  }

  $('.jsBirthday').select2();

  $('.jsRightGender').click(function () {
    $('.jsGenderSwitch').addClass('gender-switch-right');
    $('.jsLeftGender').removeClass('gender-active-label');
    $('.jsRightGender').addClass('gender-active-label');
  });

  $('.jsLeftGender').click(function () {
    $('.jsGenderSwitch').removeClass('gender-switch-right');
    $('.jsLeftGender').addClass('gender-active-label');
    $('.jsRightGender').removeClass('gender-active-label');
  });
});
