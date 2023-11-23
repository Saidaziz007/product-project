$(document).ready(function(){
  $("#contents__carousel").owlCarousel({
    items: 1,
    margin: 30,
    loop: true,
    nav: true,
    dots: true,
    navText: ['<i class="fa-solid fa-chevron-left fa-fade"></i>', '<i class="fa-solid fa-chevron-right fa-fade"></i>'],
    autoplay: true,
  });
});