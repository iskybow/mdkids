window.onload = function(e){
  //dropdown
  $('.jsDropOpen').mouseenter(function () {
    $(this).parent('li').children('.drop-menu').addClass('drop-active');
  });
  $('.jsDropClose').mouseleave(function () {
    $(this).parent('li').children('.drop-menu').removeClass('drop-active');
  });

  //search
  let searchBtn = document.querySelector('.jsSearch');
  let searchBlock = document.querySelector('.jsSearchBlock');
  searchBtn.onclick = function () {
    searchBlock.classList.toggle('search-active');
  }
};
