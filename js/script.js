AOS.init();

window.onscroll=스크롤헤더;
function 스크롤헤더() {
    if (document.body.scrollTop>200 || document.documentElement.scrollTop>120) {
        document.getElementById('header').style.top='0';
    }else{
        document.getElementById('header').style.top='-120px';
    }
};

var sectionCar = document.querySelectorAll('.section-carousels'),
    mainCar = document.querySelectorAll('.main-carousels');


var sectionCar = new Swiper(".section-carousels", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: false,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
  });

var mainCar = new Swiper(".main-carousels", {
    spaceBetween: 30,
    centeredSlides: true,
    //  autoplay: {
    //    delay: 3000,
    //    disableOnInteraction: false,
    //  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
// sectionCar.controller.control = mainCar;
// mainCar.controller.control = sectionCar;
