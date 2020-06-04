$(function() {

  // Fixed Header
      let header = $("#header");
      let introH = 100;
      let scrollPos = $(window).scrollTop();
      let nav = $("#nav");
      let navToggle = $("#navToggle");
  
      checkScroll(scrollPos, introH);
  
      $(window).on("scroll resize", function() {

          scrollPos = $(this).scrollTop();
  
          checkScroll(scrollPos, introH);
      });

      function checkScroll(scrollPos, introH) {
  
          if( scrollPos > introH ) {
              header.addClass("fixed");
          } else {
              header.removeClass("fixed");
          }
      }


      // Scroll
  
          $("[data-scroll]").on("click", function(event) {
              event.preventDefault();
      
              let elementId = $(this).data('scroll');
              let elementOffset = $(elementId).offset().top;
      
              nav.removeClass("show");
      
              $("html, body").animate({
                  scrollTop: elementOffset - 70
              }, 700);
          });
      
          // Nav
          navToggle.on("click", function(event) {
              event.preventDefault();
      
              nav.toggleClass("show");
          });
      
        // CounterUp

         $(".num").counterUp({
    delay:10,time:1000
 });

 // Review
         $(".review-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
 
});         

});