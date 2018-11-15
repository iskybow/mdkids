$(document).ready(function() {
  function totalPrice() {
    let total = document.querySelector('.jsTotal');
    let sumPrice = document.querySelectorAll('.jsSummOrders');
    let allPriceSumm = 0;
    for (let i = 0; i < sumPrice.length; i++) {
      let sumPriceHTML = Number(sumPrice[i].innerHTML);
      allPriceSumm += sumPriceHTML;
    }
    total.innerHTML = allPriceSumm;
  }
  if ($('.jsTotal').length > 0) {
    totalPrice();
  }

  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    if ($input.val() > 1){
      $input[0].setAttribute('value', Number($input[0].value) - 1);
      let parent = this.closest('.orders-item');
      let priceOneProdust = parent.querySelector('.jsPriceOrders');
      let priceOneProdustHTML = Number(priceOneProdust.innerHTML);
      let sumPrice = parent.querySelector('.jsSummOrders');
      let sumPriceHTML = Number(sumPrice.innerHTML);
      sumPriceHTML -= priceOneProdustHTML;
      sumPrice.innerHTML = sumPriceHTML;
    }
    $input.change;
    totalPrice();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    // $input.val(parseInt($input.val()) + 1);
    $input[0].setAttribute('value', Number($input[0].value) + 1);
    $input.change;
    let parent = this.closest('.orders-item');
    let priceOneProdust = parent.querySelector('.jsPriceOrders');
    let priceOneProdustHTML = Number(priceOneProdust.innerHTML);
    let sumPrice = parent.querySelector('.jsSummOrders');
    let sumPriceHTML = Number(sumPrice.innerHTML);
    sumPriceHTML += priceOneProdustHTML;
    sumPrice.innerHTML = sumPriceHTML;
    totalPrice();
    return false;
  });

  $('.jsDeleteOrder').click(function () {
    let orderBlock = this.closest('.orders-item');
    orderBlock.remove();
    totalPrice();
  });

});
