// 보안]우클릭 방지:
document.onmousedown=disableclick;
  status="오른쪽 클릭은 금지되어 있습니다.";
  function disableclick(e){
    if(e.button==2){
      alert(status);
      return false;
    }
  };

// HEADER:
window.onscroll=헤더교체;
function 헤더교체(){
  if(document.body.scrollTop>400 || document.documentElement.scrollTop > 400){
    document.getElementById('header').style.backgroundColor='black';
    
  }else{
    document.getElementById('header').style.backgroundColor='transparent';
  }
}






// LIB:
AOS.init();

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
  
  var swiper = new Swiper("#savingsCarousels", {
    // autoplay:{
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
      draggable: false,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
  
// sectionCar.controller.control = mainCar;
// mainCar.controller.control = sectionCar;
