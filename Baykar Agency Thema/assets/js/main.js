var swiper = new Swiper(".swiper", {
               
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
     pagination: {
        el: ".swiper-pagination",
    },
    
    breakpoints: {
      
        320: {
        slidesPerView: 1,
        spaceBetween: 23,
    
        },
   
        480: {
        slidesPerView: 1,
        spaceBetween: 23
        },

        640: {
        slidesPerView: 2,
        spaceBetween: 23,
        }
    
    }
});
var mylovw = new Swiper(".mylow", {
   
   navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      
      320: {
      slidesPerView: 1,
      spaceBetween: 23,
      },
 
      480: {
      slidesPerView: 1,
      spaceBetween: 23,
      },

      640: {
      slidesPerView: 3,
      spaceBetween: 23,
      }
  
  }
});