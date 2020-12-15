$(function() {
});
$(".js-reserveControl").click(function (e) {
  e.preventDefault();
  $(".js-reserveTotal").toggleClass("d-none");
  $(".js-reserveIcon").toggleClass("rotate180");
});