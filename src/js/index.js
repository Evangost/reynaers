import '../scss/main.scss';
import 'intersection-observer';
import $ from 'jquery';
import 'jquery-ui'
import 'jquery-ui/ui/effect'
import 'bootstrap';
import 'popper.js';
import Swiper from 'swiper/dist/js/swiper.min';
import noUiSlider from 'nouislider';


$(window).on('load', function () {
    let b = $('body');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        b.addClass('ios');
    } else {
        b.addClass('web');
    }

    b.removeClass('loaded');
});

$(function () {
    // Swiper slider main
    if ($('.swiper1').length) {
        let slider;
        let slide = document.querySelectorAll('.swiper1 .swiper-slide').length;

        if (slide > 1) {
            slider = new Swiper('.swiper1', {
                observer: true,
                observeParents: true,
                loop: false,
                autoplay: false,
                spaceBetween: 30,
                slidesPerView: 4.5,
                /*dynamicBullets: true,*/
                // centeredSlides:true,
                // centeredSlidesBounds: true,
                navigation: {
                    nextEl: '.swiper1-button-next',
                    prevEl: '.swiper1-button-prev'
                },
            });
        }
    }

    if ($('.swiper2').length) {
        let slider2;
        let slide2 = document.querySelectorAll('.swiper2 .swiper-slide').length;

        if (slide2 > 1) {
            slider2 = new Swiper('.swiper2', {
                observer: true,
                observeParents: true,
                loop: false,
                autoplay: false,
                spaceBetween: 30,
                slidesPerView: 3.5,

                navigation: {
                    nextEl: '.swiper2-button-next',
                    prevEl: '.swiper2-button-prev'
                },
            });
        }
    }

    if ($('.swiper3').length) {
        let slider3;
        let slide3 = document.querySelectorAll('.swiper3 .swiper-slide').length;

        if (slide3 > 1) {
            slider3 = new Swiper('.swiper3', {
                observer: true,
                observeParents: true,
                loop: false,
                autoplay: false,
                spaceBetween: 30,
                slidesPerView: 3.5,

                navigation: {
                    nextEl: '.swiper3-button-next',
                    prevEl: '.swiper3-button-prev'
                },
            });
        }
    }

    //Swiper slider secondary


    // Range slide
   /* if ($('input[type="range"]')) {
        let sliderRange = document.querySelectorAll('.slider-range');
        let sliderHandles = document.querySelectorAll('.slider-handles');

        if (sliderRange.length) {
            sliderRange.forEach(function (elem) {
                let input = elem.childNodes[0];
                let startValue = input.hasAttribute('value') ? Number(input.getAttribute('value')) : 1;
                let minValue = input.hasAttribute('min') ? Number(input.getAttribute('min')) : 1;
                let maxValue = input.hasAttribute('max') ? Number(input.getAttribute('max')) : 100;

                input.remove();

                noUiSlider.create(elem, {
                    start: [startValue],
                    step: 1,
                    behavior: 'tap',
                    connect: [true, false],
                    range: {
                        'min': [minValue],
                        'max': [maxValue]
                    }
                });
            });
        }

        if (sliderHandles.length) {
            sliderHandles.forEach(function (elem) {
                let input = elem.childNodes[0];
                let minValue = input.hasAttribute('min') ? Number(input.getAttribute('min')) : 1;
                let maxValue = input.hasAttribute('max') ? Number(input.getAttribute('max')) : 100;

                input.remove();

                noUiSlider.create(elem, {
                    start: [minValue, maxValue/2],
                    step: 1,
                    behavior: 'tap-drag',
                    connect: true,
                    range: {
                        'min': minValue,
                        'max': maxValue
                    }
                });
            });
        }
    }
*/
    // Lazy load observer
    const imagesAll = document.querySelectorAll('img[data-src]');
    let imgObserve = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio >= 0 && entry.target.hasAttribute('data-src')) {
                let current = entry.target;
                let source = current.getAttribute('data-src');

                current.setAttribute('src', source);
                current.removeAttribute('data-src');
            }
        });
    });
    if (imagesAll.length > 0) {
        imagesAll.forEach(function (image) {
            imgObserve.observe(image);
        });
    }

    $('#buttonClick').on('click', () => {
        let text = $('#welldoneText');
        text.addClass('active');
        setTimeout(() => text.removeClass('active'), 4000);
    })

});

