$(document).ready(function () {
   $('.galery').slick({
      slidesToShow: 4,
      variableWidth: true,
      centerMode: true,
      responsive: [
         {
            breakpoint: 760,
            settings: {
               arrows: false,
               dots: true,
               slidesToShow: 1,
               variableWidth: false,
            }
         },
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
      ]
   });
   
});


//плавная прокрутка

//$('.menu__link').on('click', function () {
//   var el = $(this);
//   var dest = el.attr('href'); // получаем направление
//   if (dest !== undefined && dest !== '') { // проверяем существование
//      $('html').animate({
//         scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
//      }, 500 // скорость прокрутки
//      );
//   }
//   return false;
//});


//const menuList = document.querySelectorAll('.menu__link[data-goto]');
//if (menuList.length > 0) {
//   menuList.forEach(menuLink => {
//      menuLink.addEventListener("click", onMenuLinkClick);
//   });

//   function onMenuLinkClick(e) {
//      const menuLink = e.target;
//      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//         const gotoBlock = document.querySelector(menuLink.dataset.goto);
//         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

//         window.scrollTo({
//            top: gotoBlockValue,
//            behavior: "smooth"
//         });
//         e.preventDefault();
//      }
//   }
//}

// ====burger

const menuBurger = document.querySelector('.header__menu-burger');
if (menuBurger) {
   const menu = document.querySelector('.menu');
   menuBurger.addEventListener("click", function (e) {
      document.body.classList.toggle('lock')
      menuBurger.classList.toggle('active')
      menu.classList.toggle('active')
   });
}



//function slidesPlugin(activeSlide) {
//   const slides = document.querySelectorAll('.slider__box-galery')

//   slides[activeSlide].classList.add('active')

//   for (const slide of slides) {
//      slide.addEventListener('click', () => {
//         clearActiveClasses()

//         slide.classList.add('active')
//      })
//   }

//   function clearActiveClasses() {
//      slides.forEach((slide) => {
//         slide.classList.remove('active')
//      })
//   }
//}

//slidesPlugin(2)