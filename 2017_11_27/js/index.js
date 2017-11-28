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
    $(".owl-carousel").owlCarousel({
        items: 3,
    });

});

