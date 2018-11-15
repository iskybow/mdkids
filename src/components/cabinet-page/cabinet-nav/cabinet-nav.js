$(function () {
  if (window.innerWidth < 1200) {
    $('.cabinet-nav').addClass('touch-menu-la');
    TouchMenuLA({
      target: document.getElementById('menu'),
      onOpen: function(){
        $('body').addClass('body-overflow');
      },
      onClose: function(){
        $('body').removeClass('body-overflow');
      },
    });
  }
});
