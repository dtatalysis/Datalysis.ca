$(document).ready(function(){
    $('#testimonial-row').slick({
      dots: true, // Add navigation dots
      infinite: true, // Enable infinite scrolling
      speed: 300, // Set transition speed
      slidesToShow: 1, // Show only one slide at a time
      slidesToScroll: 1, // Scroll one slide at a time
      autoplay: true, // Enable autoplay
      autoplaySpeed: 10000, // Set autoplay interval to 2 seconds
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false // Hide arrows on mobile devices
          }
        }
      ]
    });
  });
  