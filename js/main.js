$(function () {

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-for',
    focusOnSelect: true
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
});


let price = document.querySelectorAll(".ptice__item");
let filter = document.querySelectorAll(".filter__item");

filter.forEach(item => {
  item.addEventListener('click', (event) => {

    event.preventDefault();
    let filterMax = event.currentTarget.dataset.max * 1000000;
    let filterMin = event.currentTarget.dataset.min * 1000000;

    for (sum of price) {

      let itemPrice = parseInt(sum.innerText.split(' ').join(''));
      let strPrice = +String(itemPrice);
      let card = sum.closest('.catalog__card').parentNode;

      if (strPrice >= filterMin && strPrice <= filterMax) {
        card.hidden = "";

      } else if (!(filterMin && filterMax)) {
        card.hidden = "";

      } else {
        card.hidden = true;
      }
    }
  })
})