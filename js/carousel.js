$(document).ready(function(){
    $('.owl-carousel-testimonials').owlCarousel({
        loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        900:{
            items:2
        }
    }
    })

    // works carousel
    $('.owl-carousel-works').owlCarousel({
      loop: true,
      margin: 45,
      dots: true,
      nav:true,
      loop: true,
      responsive: {
          0:{
              items:1
          },
          576:{
              items:2
          },
          768:{
              items:3
          },
          992:{
              items:4
          }
      }
  });

  $('.some_works .owl-nav .owl-next').html('<i class="fa-solid fa-arrow-right"></i>')
  $('.some_works .owl-nav .owl-prev').html('<i class="fa-solid fa-arrow-left"></i>')
  
    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
      loop: true,
      margin: 45,
      dots: false,
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
          0:{
              items:2
          },
          576:{
              items:4
          },
          768:{
              items:6
          },
          992:{
              items:8
          }
      }
  });
  $('.vendor-carousel .owl-nav').hide()
  });

  