$(document).ready(function () {
    /************************************************************      
                              СЛАЙДЕР 
    ************************************************************/
    $('.slider_inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false, 
                    dots: true,
                    dotsClass: 'dots',
                    variableWidth: true
                }

            }
        ]
    });

    /************************************************************
                                ТАБЫ 
    ************************************************************/
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__list');
    toggleSlide('.catalog-item__back');
});

/*const slider = tns({
    container: '.slider_inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        767: {
            nav: true,
            navPosition: 'bottom'
        }
      }
});

document.querySelector('.prev').addEventListener('click', function() {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next');
});*/