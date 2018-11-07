window.onload = function(e){
  //dropdown
  $('.jsDropOpen').hover(function () {
    $(this).parent('li').children('.drop-menu').toggleClass('drop-active');
  });

  //search
  let searchBtn = document.querySelector('.jsSearch');
  let searchBlock = document.querySelector('.jsSearchBlock');
  searchBtn.onclick = function () {
    searchBlock.classList.toggle('search-active');
  }
};
