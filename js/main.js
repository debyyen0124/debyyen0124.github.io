$(document).ready(function(){

    let $btns = $('.project .button-group button');

    $btns.click(function(e){

        $('.project .button-group button').removeClass('active');

        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project .grid').isotope({
            filter: selector
        });

        return false;


    })

    $('.project .button-group #btn1').trigger('click');

    $('.project .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {enabled:true},
        closeOnContentClick: true
      });


    // Owl Carousel Strts Here
    $('.client .carousel .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            }
      
        }
    })

    // Owl Carousel Ends Here

    // Scrollspy Starts Here
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar'
      })

    //Scrollspy Ends Here

    


});

