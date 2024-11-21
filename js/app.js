/**
* Copyright 2024 https://linkedin.com/in/mahboubeh-ranjbar-944132239
*/

"use strict";

// Navbar Toggle

const navButton = document.querySelector(".nav__btn");
const navMenuContainer = document.querySelector(".nav__menu-mobile");
const overlay = document.querySelector(".overlay");

const navElements = [navButton, overlay];

// Toggle Navbar Function
const toggleNavbar = () => {
    navButton.classList.toggle("nav__btn--open");
    navMenuContainer.classList.toggle("nav__menu-mobile--open");
    overlay.classList.toggle("active");
};

// Adding Event Listeners to Each Element in navElements
navElements.forEach(element => {
    element.addEventListener("click", toggleNavbar);
});

window.addEventListener("resize", () => {
    navButton.classList.remove("nav__btn--open");
    navMenuContainer.classList.remove("nav__menu-mobile--open");
    overlay.classList.remove("active");
});


// Slider

const sliders = document.querySelectorAll("[data-slider]");

const sliderInit = function (currentSlider) {

    const sliderContainer = currentSlider.querySelector("[data-slider-container]");
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

    const totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-item"));

    const totalSliderItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    let currentSlidePos = 0;

    const moveSliderItem = function() {
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`
    }


    // Next Slide

    const slideNext = function() {
        const slideEnd = currentSlidePos >= totalSliderItems;

        if(slideEnd) {
            currentSlidePos = 0;
        } else {
            currentSlidePos++;
        }

        moveSliderItem();
    }

    sliderNextBtn.addEventListener("click", slideNext);


    // Previous Slide

    const slidePrev = function() {
    
        if(currentSlidePos <= 0) {
            currentSlidePos = totalSliderItems;
        } else {
            currentSlidePos--;
        }

        moveSliderItem();
    }

    sliderPrevBtn.addEventListener("click", slidePrev);

    const dontHaveExtraItem = totalSliderItems <= 0;
    if(dontHaveExtraItem) {
        sliderNextBtn.setAttribute("desabled", "");
        sliderPrevBtn.setAttribute("desabled", "");
    }


    // Auto Slider

    let autoSlideInterval;

    const startAutoSlide = () => autoSlideInterval = setInterval(slideNext, 3000);
    startAutoSlide();

    const stopAutoSlide = () => clearInterval(autoSlideInterval);

    currentSlider.addEventListener("mouseover", stopAutoSlide);
    currentSlider.addEventListener("mouseout", startAutoSlide);

    // Responsive

    window.addEventListener("resize", moveSliderItem);

}

for(let i =0 ; i < sliders.length; i++) {
    sliderInit(sliders[i]);
}