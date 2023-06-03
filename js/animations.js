// 'use strict';
// BLOCK Add event listener on multiple elements
var addEventOnElements = function (elements, eventType, callback) {
    for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
};
// BLOCK MOBILE NAVBAR TOGGLER
/**
 * The site top menu.
 * @date 6/2/2023 - 5:20:58 PM
 *
 * @type {HTMLElement}
 */
var navbar = document.querySelector("[data-navbar]");
var navTogglers = document.querySelectorAll("[data-nav-toggler]");
/**
 * Displays/hidden the navbar when the display is smaller than 1200px.
 * @date 6/3/2023 - 10:18:02 AM
 */
var toggleNav = function () {
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");
};
addEventOnElements(navTogglers, "click", toggleNav);
/* BLOCK HEADER ANIMATION
When scrolled down to 100px header will be active */
var header = document.querySelector("[data-header]");
var backTopBtn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header === null || header === void 0 ? void 0 : header.classList.add("active");
        backTopBtn === null || backTopBtn === void 0 ? void 0 : backTopBtn.classList.add("active");
    }
    else {
        header === null || header === void 0 ? void 0 : header.classList.remove("active");
        backTopBtn === null || backTopBtn === void 0 ? void 0 : backTopBtn.classList.remove("active");
    }
});
// BLOCK SLIDER
var slider = document.querySelector("[data-slider]");
var sliderContainer = document.querySelector("[data-slider-container]");
var sliderPrevBtn = document.querySelector("[data-slider-prev]");
var sliderNextBtn = document.querySelector("[data-slider-next]");
var totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
var totalSlidableItems = (sliderContainer === null || sliderContainer === void 0 ? void 0 : sliderContainer.childElementCount) - totalSliderVisibleItems;
var currentSlidePos = 0;
var moveSliderItem = function () {
    sliderContainer.style.transform = "translateX(-".concat(sliderContainer === null || sliderContainer === void 0 ? void 0 : sliderContainer.children[currentSlidePos].offsetLeft, "px)");
};
// BLOCK NEXT SLIDE
var slideNext = function () {
    var slideEnd = currentSlidePos >= totalSlidableItems;
    if (slideEnd) {
        currentSlidePos = 0;
    }
    else {
        currentSlidePos++;
    }
    moveSliderItem();
};
sliderNextBtn === null || sliderNextBtn === void 0 ? void 0 : sliderNextBtn.addEventListener("click", slideNext);
// BLOCK PREVIOUS SLIDE
var slidePrev = function () {
    if (currentSlidePos <= 0) {
        currentSlidePos = totalSlidableItems;
    }
    else {
        currentSlidePos--;
    }
    moveSliderItem();
};
sliderPrevBtn === null || sliderPrevBtn === void 0 ? void 0 : sliderPrevBtn.addEventListener("click", slidePrev);
// BLOCK RESPONSIVE
window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    totalSlidableItems = (sliderContainer === null || sliderContainer === void 0 ? void 0 : sliderContainer.childElementCount) - totalSliderVisibleItems;
    moveSliderItem();
});
