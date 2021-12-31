"use strict";

(function (global) {

    const resources = document.querySelector('.resources');
    // MAYBE DATABASE ???

    const menu = document.querySelector('.menu-btn');
    const openMenu = document.querySelector('.menu-btn-expanded');
    const mblMenu = document.querySelector('.mbl-menu');
    const links = document.querySelectorAll('.nav-link');



    menu.addEventListener('click', () => {
        mblMenu.classList.toggle('active');
        mblMenu.classList.toggle('collapse');
    });

    openMenu.addEventListener('click', () => {
        mblMenu.classList.toggle('collapse');
        mblMenu.classList.toggle('active');
    });

}(typeof window != "undefined" ? window : this))