import '../scss/main.scss';
import 'intersection-observer';
import $ from 'jquery';
import 'jquery-ui'
import 'jquery-ui/ui/effect'
import 'bootstrap';
import 'popper.js';
import Swiper from 'swiper/dist/js/swiper.min';
import noUiSlider from 'nouislider';
import removeClasses from "swiper/src/components/core/classes/removeClasses";


$(window).on('load', function () {
    let b = $('body');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        b.addClass('ios');
    } else {
        b.addClass('web');
    }

    b.removeClass('loaded');

    const button = document.querySelector('.header-wrapper-toggle');
    button.onclick = function () {
        document.querySelector('.main-menu-wrapper').classList.toggle('active');
        document.querySelector('.burger-menu_lines').classList.toggle('active');
        document.querySelector('.burger-menu_overlay').classList.toggle('active');
        document.querySelector('.header-wrapper-toggle').classList.toggle('active');

    }
    const zoomButtons = document.querySelectorAll('.swiper-slide');
    zoomButtons.forEach((el) => {
        el.onclick = function () {
            const modalImage = document.querySelector('.zoom-image');
            const image = modalImage.getElementsByTagName("img").item(0);
            const activeSlide = document.querySelector('.swiper-slide-active');
            const activeSlideImg = activeSlide.getElementsByTagName('img').item(0);
            image.src = activeSlideImg.src;
            modalImage.classList.toggle('active-image');
        }
    })
    const closeButton = document.querySelector('.zoom-image');
          closeButton.onclick = function () {
             document.querySelector('.zoom-image').classList.toggle('active-image');
          }
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
                slidesPerView: 3.5,
                navigation: {
                    nextEl: '.swiper1-button-next',
                    prevEl: '.swiper1-button-prev',
                },
                breakpoints:
                    {
                        320: {
                            spaceBetween: 30,
                            slidesPerView: 1,
                        },
                        375: {
                            spaceBetween: 30,
                            slidesPerView: 1,
                        },
                        425: {
                            spaceBetween: 30,
                            slidesPerView: 1,
                        },
                        576: {
                            spaceBetween: 30,
                            slidesPerView: 2,
                        },
                        768: {
                            spaceBetween: 30,
                            slidesPerView: 2.5,
                        },
                        992: {
                            spaceBetween: 30,
                            slidesPerView: 3.5,
                        }
                    }
            });
        }
    }

    if ($('.swiper2').length) {
        let slider;
        let slide = document.querySelectorAll('.swiper2 .swiper-slide').length;

        if (slide > 1) {
            slider = new Swiper('.swiper2', {
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
                breakpoints:
                    {
                        320: {
                            spaceBetween: 30,
                            slidesPerView: 1,
                        },
                        375: {
                            spaceBetween: 30,
                            slidesPerView: 1,
                        },
                        425: {
                            spaceBetween: 30,
                            slidesPerView: 1,
                        },
                        576: {
                            spaceBetween: 30,
                            slidesPerView: 2,
                        },
                        768: {
                            spaceBetween: 30,
                            slidesPerView: 2.5,
                        },
                        992: {
                            spaceBetween: 30,
                            slidesPerView: 3.5,
                        }
                    }
            });
        }
    }

    if ($('.swiper3').length) {
        let slider;
        let slide = document.querySelectorAll('.swiper3 .swiper-slide').length;

        if (slide > 1) {
            slider = new Swiper('.swiper3', {
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
                breakpoints:
                    {
                        320: {
                            spaceBetween: 30,
                            slidesPerView: 1,
                        },
                        375: {
                            spaceBetween: 30,
                            slidesPerView: 1,
                        },
                        425: {
                            spaceBetween: 30,
                            slidesPerView: 1,
                        },
                        576: {
                            spaceBetween: 30,
                            slidesPerView: 2,
                        },
                        768: {
                            spaceBetween: 30,
                            slidesPerView: 2.5,
                        },
                        992: {
                            spaceBetween: 30,
                            slidesPerView: 3.5,
                        }
                    }
            });
        }
    }

    if ($('.window-info-block__slider').length) {
        let slider;
        let slide = document.querySelectorAll('.window-info-block__slider .swiper-slide').length;

        if (slide > 1) {
            slider = new Swiper('.window-info-block__slider', {
                observer: true,
                observeParents: true,
                loop: false,
                autoplay: false,
                spaceBetween: 30,
                slidesPerView: 1,

                navigation: {
                    nextEl: '.swiper4-button-next',
                    prevEl: '.swiper4-button-prev'
                },
            });
        }
    }

    $('.swiper-slide-active img').on('click', function () {
        $('.zoom-image img').attr('src', $(this).data('img'));
    });

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

/*$(function(){
    $('.minimized').click(function(event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth())/2,
            // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});*/
