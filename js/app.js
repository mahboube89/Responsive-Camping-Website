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