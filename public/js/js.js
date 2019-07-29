$(document).ready(function(){
    $('#carousel-banners').owlCarousel({
        loop:true,
        margin:10,
        center: true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    $('#c-systems').owlCarousel({
        loop:false,
        margin:10,
        center: false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });

    
  });