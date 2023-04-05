 $(document).ready(function(){

 const myCarouselElement = document.querySelector('#productCarousel')

    const carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 2000,
      touch: false
    });

    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;

    var carouselNextBtn = document.getElementById("carouselNext");
    var carouselPrevBtn = document.getElementById("carouselPrev");

    $("#carouselNext").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            $(".carousel-inner").animate(
              { scrollLeft: scrollPosition },
              500);
          }
    });

    $("#carouselPrev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $(".carousel-inner").animate(
              { scrollLeft: scrollPosition },
              500);
          }
    });
 });