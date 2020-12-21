"use strict";

$(function () {
  // Initialize daterangepicker
  $("#daterange").daterangepicker();
});
$(".js-reserveControl").click(function (e) {
  e.preventDefault();
  $(".js-reserveTotal").toggleClass("d-none");
  $(".js-reserveIcon").toggleClass("rotate180");
}); // Initialize Swiper

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next"
  }
});
//# sourceMappingURL=all.js.map
