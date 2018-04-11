$(document).ready(function () {
    "use strict";
    
    $(".menu-bar").on('click', function(e){

        e.preventDefault();
        
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });

    $(".appLink").on('click', (e) => {
        e.preventDefault();

        // const href = $(this).attr('activeElement');
        // console.log(href.attr('href'));

        // window.location.href()
    })

});