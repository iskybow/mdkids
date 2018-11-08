window.onload = function(e){
  //dropdown
  if(window.innerWidth > 993) {
    $('.jsDropOpen').mouseenter(function () {
      $(this).parent('li').children('.drop-menu').addClass('drop-active');
    });
    $('.jsDropClose').mouseleave(function () {
      $(this).parent('li').children('.drop-menu').removeClass('drop-active');
    });
  } else {
    $('.jsDropOpen').click(function () {
      $(this).parent('.jsParentDropMenu').children('.drop-menu').toggleClass('drop-active');
    });
  }

  $('.jsMobMenu').click(function () {
    $('.jsMenu').toggleClass('menu-active');
    $('.overlay').fadeToggle();
    $('.jsMobMenu').toggleClass('burger-active');
    $('body').toggleClass('body-overflow');
  });
  $('.overlay').click(function () {
    $('.jsMenu').removeClass('menu-active');
    $('.overlay').fadeToggle();
    $('.jsMobMenu').removeClass('burger-active');
    $('body').removeClass('body-overflow');
  });


  //search
  $('.jsSearchOpen').click(function () {
    $('.jsSearchOpen').addClass('search-open-noactive');
    $('.search-block input').addClass('search-active');
    setTimeout(function () {
      $('.search-block input').addClass('searchFlag');
    }, 2000);
  });

  $(document).click(function (e){ // событие клика по веб-документу
    let input = $(".search-block input"); // тут указываем ID элемента
    let inputBlock = $('.jsSearchBlock');
    if (!input.is(e.target) // если клик был не по нашему блоку
      && inputBlock.has(e.target).length === 0 && input.hasClass('searchFlag')) { // и не по его дочерним элементам
      input.removeClass('search-active'); // скрываем его
      $('.jsSearchOpen').removeClass('search-open-noactive');
      input.removeClass('searchFlag');
    }
  });
};
