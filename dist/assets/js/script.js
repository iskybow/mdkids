'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
  _classCallCheck(this, Shared);
};

window.onload = function (e) {
  //dropdown
  if (window.innerWidth > 993) {
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

  $(document).click(function (event) {
    if ($(event.target).closest(".jsParentDropMenu").length) return;
    $('.drop-menu').removeClass('drop-active');
    event.stopPropagation();
  });

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
    $('.search-block a').addClass('search-btn-input');
    setTimeout(function () {
      $('.search-block input').addClass('searchFlag');
    }, 2000);
  });

  $(document).click(function (e) {
    // событие клика по веб-документу
    var input = $(".search-block input"); // тут указываем ID элемента
    var inputBlock = $('.jsSearchBlock');
    if (!input.is(e.target) // если клик был не по нашему блоку
    && inputBlock.has(e.target).length === 0 && input.hasClass('searchFlag')) {
      // и не по его дочерним элементам
      input.removeClass('search-active'); // скрываем его
      $('.jsSearchOpen').removeClass('search-open-noactive');
      $('.search-block input').removeClass('search-active');
      $('.search-block a').removeClass('search-btn-input');
      input.removeClass('searchFlag');
    }
  });
};

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

// document.addEventListener('DOMContentLoaded', function () {
//   const errorModal = document.querySelector('.js-modalError');
//   const errorModalClose = document.querySelectorAll('.js-modalErrorClose');
//   const modalBtn = document.querySelector('.modal button[type="submit"]');
//
//   modalBtn.addEventListener('click', e => {
//     e.preventDefault();
//     errorModal.classList.add('modal-active');
//   });
//
//   for (let i = 0; i < errorModalClose.length; i++) {
//     errorModalClose[i].addEventListener('click', () => {
//       errorModal.classList.remove('modal-active');
//     })
//   }
// });


$(function () {
  if (window.innerWidth < 1200) {
    $('.cabinet-nav').addClass('touch-menu-la');
    TouchMenuLA({
      target: document.getElementById('menu'),
      onOpen: function onOpen() {
        $('body').addClass('body-overflow');
      },
      onClose: function onClose() {
        $('body').removeClass('body-overflow');
      }
    });
  }
});

$(document).ready(function () {
  function totalPrice() {
    var total = document.querySelector('.jsTotal');
    var sumPrice = document.querySelectorAll('.jsSummOrders');
    var allPriceSumm = 0;
    for (var i = 0; i < sumPrice.length; i++) {
      var sumPriceHTML = Number(sumPrice[i].innerHTML);
      allPriceSumm += sumPriceHTML;
    }
    total.innerHTML = allPriceSumm;
  }
  if ($('.jsTotal').length > 0) {
    totalPrice();
  }

  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    if ($input.val() > 1) {
      $input[0].setAttribute('value', Number($input[0].value) - 1);
      var parent = this.closest('.orders-item');
      var priceOneProdust = parent.querySelector('.jsPriceOrders');
      var priceOneProdustHTML = Number(priceOneProdust.innerHTML);
      var sumPrice = parent.querySelector('.jsSummOrders');
      var sumPriceHTML = Number(sumPrice.innerHTML);
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
    var parent = this.closest('.orders-item');
    var priceOneProdust = parent.querySelector('.jsPriceOrders');
    var priceOneProdustHTML = Number(priceOneProdust.innerHTML);
    var sumPrice = parent.querySelector('.jsSummOrders');
    var sumPriceHTML = Number(sumPrice.innerHTML);
    sumPriceHTML += priceOneProdustHTML;
    sumPrice.innerHTML = sumPriceHTML;
    totalPrice();
    return false;
  });

  $('.jsDeleteOrder').click(function () {
    var orderBlock = this.closest('.orders-item');
    orderBlock.remove();
    totalPrice();
  });
});

$(document).ready(function () {
  if ($('.jsPhoneMask').length > 0) {
    $('.jsPhoneMask').inputmask({ alias: "phoneru" });
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

jQuery(document).ready(function ($) {
  jQuery(document).ready(function ($) {
    dotDot();
  });

  function dotDot() {
    $(".mainNewsDot").dotdotdot({
      callback: function callback(isTruncated) {},
      /* Function invoked after truncating the text.
         Inside this function, "this" refers to the wrapper. */

      ellipsis: '\u2026 ',
      /* The text to add as ellipsis. */

      height: 120,
      /* The (max-)height for the wrapper:
         null: measure the CSS (max-)height ones;
         a number: sets a specific height in pixels;
         "watch": re-measures the CSS (max-)height in the "watch". */

      keep: null,
      /* jQuery-selector for elements to keep after the ellipsis. */

      tolerance: 0,
      /* Deviation for the measured wrapper height. */

      truncate: "word",
      /* How to truncate the text: By "node", "word" or "letter". */

      watch: "window"
      /* Whether to update the ellipsis:
         true: Monitors the wrapper width and height;
         "window": Monitors the window width and height. */
    });
  }
});

$('.jsForSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.jsNavSlider'
});
$('.jsNavSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.jsForSlider',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

//portfolio
var initPhotoSwipeFromDOM = function initPhotoSwipeFromDOM(gallerySelector) {

  // parse slide data (url, title, size ...) from DOM elements
  // (children of gallerySelector)
  var parseThumbnailElements = function parseThumbnailElements(el) {
    var thumbElements = el.childNodes,
        numNodes = thumbElements.length,
        items = [],
        figureEl,
        linkEl,
        size,
        item;

    for (var i = 0; i < numNodes; i++) {

      figureEl = thumbElements[i]; // <figure> element

      // include only element nodes
      if (figureEl.nodeType !== 1) {
        continue;
      }

      linkEl = figureEl.children[0]; // <a> element

      if (linkEl.hasAttribute('data-size')) {
        size = linkEl.getAttribute('data-size').split('x');
        // create slide object
        item = {
          src: linkEl.getAttribute('href'),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10)
        };

        if (linkEl.children.length > 0) {
          // <img> thumbnail element, retrieving thumbnail url
          item.msrc = linkEl.children[0].getAttribute('src');
        }

        item.el = figureEl; // save link to element for getThumbBoundsFn
        items.push(item);
      }
    }
    return items;
  };

  // find nearest parent element
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function onThumbnailsClick(e) {
    e = e || window.event;
    if (e.target.hasAttribute('data-size')) {
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      var eTarget = e.target || e.srcElement;

      // find root element of slide
      var clickedListItem = closest(eTarget, function (el) {
        return el.tagName && el.tagName.toUpperCase() === 'FIGURE';
      });

      if (!clickedListItem) {
        return;
      }

      // find index of clicked item by looping through all child nodes
      // alternatively, you may define index via data- attribute
      var clickedGallery = clickedListItem.parentNode,
          childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;

      for (var i = 0; i < numChildNodes; i++) {
        if (childNodes[i].nodeType !== 1) {
          continue;
        }

        if (childNodes[i] === clickedListItem) {
          index = nodeIndex;
          break;
        }
        nodeIndex++;
      }

      if (index >= 0) {
        // open PhotoSwipe if valid index found
        openPhotoSwipe(index, clickedGallery);
      }
    }
    // return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function photoswipeParseHash() {
    var hash = window.location.hash.substring(1),
        params = {};

    if (hash.length < 5) {
      return params;
    }

    var vars = hash.split('&');
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split('=');
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }

    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    return params;
  };

  var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
    var pswpElement = document.querySelectorAll('.pswp')[0],
        gallery,
        options,
        items;

    items = parseThumbnailElements(galleryElement);

    // define options (if needed)
    options = {

      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),

      getThumbBoundsFn: function getThumbBoundsFn(index) {
        // See Options -> getThumbBoundsFn section of documentation for more info
        var thumbnail = items[index].el.getElementsByTagName('img')[0],
            // find thumbnail
        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
            rect = thumbnail.getBoundingClientRect();

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
      }

    };

    // PhotoSwipe opened from URL
    if (fromURL) {
      if (options.galleryPIDs) {
        // parse real index when custom PIDs are used
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        // in URL indexes start from 1
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }

    // exit if index not found
    if (isNaN(options.index)) {
      return;
    }

    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  // loop through all gallery elements and bind events
  var galleryElements = document.querySelectorAll(gallerySelector);

  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute('data-pswp-uid', i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
  }
};

// execute above function
initPhotoSwipeFromDOM('.jsForSlider');

if ($('.collections-items__item').length > 3) {
  $('.jsSliderProduct').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/images/arrow_next.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/images/arrow_next.png" alt=""></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}
//# sourceMappingURL=script.js.map
