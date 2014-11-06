$(function() {

    /*- Promo Carousel -*/

    $(".global-carousel").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

    /*- Promo Carousel End -*/


    /*- Fancybox popups -*/

    $('.fancy_desc').fancybox({
        padding   : 30,
        maxWidth  : "85%",
        wrapCSS   : 'desc_popup',
        closeEffect: 'none'
    });
    /*- Fancybox popups End -*/


});


