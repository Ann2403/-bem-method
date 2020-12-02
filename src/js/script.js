$(document).ready(function () {
    $('.slider_inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});