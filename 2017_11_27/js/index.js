/*====================================================================================
                        WOW
====================================================================================*/
$(function(){
    new WOW().init();
});

/*====================================================================================
                        Magnific
====================================================================================*/
$(function(){
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled: true
        }
        // other options
    });

    $(".gallery").each(function(){
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery:{
                enabled: true
            }
        });
    });
});
/*====================================================================================
                        Owl-carousel
====================================================================================*/
$(function(){
    $("#team-members").owlCarousel({
        items : 3,
        autoplay:true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause:true
    });
});
/*====================================================================================
                        testimonials
====================================================================================*/
$(function(){
    $("#customers-testimonials").owlCarousel({
        items : 1,
        autoplay:true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause:true
    });
});
/*====================================================================================
                        Counter
            https://github.com/bfintal/Counter-Up
====================================================================================*/
$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
/*====================================================================================
                        Clients
====================================================================================*/
$(function(){
    $("#clients-list").owlCarousel({
        items : 4,
        autoplay:true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause:true
    });
});