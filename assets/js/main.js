$(function() {
    //или дописываем или кусок кода вниза
    $('.fairy-tail__slider, .our-trip__slider').slick({
        prevArrow: '<button type="button" class=" slick-btn slick-prev"><img src="assets/images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class=" slick-btn slick-next"><img src="assets/images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        //адаптивность для слайре из сайта слик слайдер
        responsive: [{
            breakpoint: 601,
            settings: {
                arrows: false //отключаем стрелки

            }
        }, ]
    });

});