// 'use strict';

// BLOCK Add event listener on multiple elements
const addEventOnElements = (elements: string | any[] | NodeListOf<Element>, eventType: string, callback: () => void) => {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

// BLOCK MOBILE NAVBAR TOGGLER

/**
 * The site top menu.
 * @date 6/2/2023 - 5:20:58 PM
 *
 * @type {HTMLElement}
 */
const navbar: HTMLElement = document.querySelector("[data-navbar]")!;
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

/**
 * Displays/hidden the navbar when the display is smaller than 1200px.
 * @date 6/3/2023 - 10:18:02 AM
 */
const toggleNav = () => {
    navbar?.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);

/* BLOCK HEADER ANIMATION 
When scrolled down to 100px header will be active */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header?.classList.add("active");
        backTopBtn?.classList.add("active");
    } else {
        header?.classList.remove("active");
        backTopBtn?.classList.remove("active");
    }
});

// BLOCK SLIDER

const slider = document.getElementById("data-slider");
const sliderContainer = document.getElementById("data-slider-container");
const sliderPrevBtn = document.getElementById("data-slider-prev");
const sliderNextBtn = document.getElementById("data-slider-next");

let totalSliderVisibleItems = Number(getComputedStyle(slider!).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer?.childElementCount! - totalSliderVisibleItems;

let currentSlidePosition = 0;

const moveSliderItem = () => {
    const auxiliary = sliderContainer?.children[currentSlidePosition] as HTMLElement;
    sliderContainer!.style.transform = `translateX(-${auxiliary.offsetLeft}px)`;
}

// BLOCK NEXT SLIDE

const slideNext = () => {
    const slideEnd = currentSlidePosition >= totalSlidableItems;

    if (slideEnd) {
        currentSlidePosition = 0;
    } else {
        currentSlidePosition++;
    }

    moveSliderItem();
}

sliderNextBtn?.addEventListener("click", slideNext);

// BLOCK PREVIOUS SLIDE

const slidePrev = () => {
    if (currentSlidePosition <= 0) {
        currentSlidePosition = totalSlidableItems;
    } else {
        currentSlidePosition--;
    }

    moveSliderItem();
}

sliderPrevBtn?.addEventListener("click", slidePrev);

// BLOCK RESPONSIVE

window.addEventListener("resize", () => {
    totalSliderVisibleItems = Number(getComputedStyle(slider!).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer?.childElementCount! - totalSliderVisibleItems;

    moveSliderItem();
});


