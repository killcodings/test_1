(()=>{"use strict";var e={373:(e,t,n)=>{n.r(t)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(373),console.log("Hello world"),new Swiper(".image-slider",{pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1,loopedSlides:0,spaceBetween:0,loop:!0,centeredSlides:!0}),function(){let e=document.querySelector(".header"),t=document.querySelector(".header__menu_wrapper");e.addEventListener("click",(function(e){(e.target.classList.contains("burger_menu")||e.target.parentElement.classList.contains("burger_menu"))&&t.classList.add("menu__active")})),t.addEventListener("click",(function(e){(e.target.classList.contains("close")||e.target.parentElement.classList.contains("close"))&&t.classList.remove("menu__active")}))}()})();