AOS.init();

window.onscroll=스크롤헤더;
function 스크롤헤더() {
    if (document.body.scrollTop>200 || document.documentElement.scrollTop>120) {
        document.getElementById('header').style.top='0';
    }else{
        document.getElementById('header').style.top='-120px';
    }
};

document.onmousedown=disableclick;
  status="오른쪽 클릭은 금지되어 있습니다.";
  function disableclick(e){
    if(e.button==2){
      alert(status);
      return false;
    }
  }


var sectionCar = document.querySelectorAll('.section-carousels'),
    mainCar = document.querySelectorAll('.main-carousels');


var sectionCar = new Swiper(".section-carousels", {
    direction: "vertical",
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    loop: true,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
  });

var mainCar = new Swiper(".main-carousels", {
    spaceBetween: 0,
    speed:1000,
    centeredSlides: true,
     autoplay: {
       delay: 4000,
       disableOnInteraction: false,
     },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
// sectionCar.controller.control = mainCar;
// mainCar.controller.control = sectionCar;
