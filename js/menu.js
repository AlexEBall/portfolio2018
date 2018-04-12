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

        console.log('hit');
        const href = $(this)[0].activeElement.href;
        // console.log(href);

        window.location.href = href;
    });

    $(".weblink").on('click', (e) => {
        e.preventDefault();

        console.log('hit');
        const href = $(this)[0].activeElement.href;
        // console.log(href);

        window.location.href = href;
    });

});