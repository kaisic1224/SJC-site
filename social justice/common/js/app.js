"use strict";

(function (global) {

    const resources = document.querySelector('.resources');
    // MAYBE DATABASE ???

    const menu = document.querySelector('.menu-btn');
    const openMenu = document.querySelector('.menu-btn-expanded')

    menu.addEventListener('click', () => {
        document.querySelector('.mbl-menu').classList.toggle('active');
        document.querySelector('.mbl-menu').classList.toggle('collapse');
    });

    openMenu.addEventListener('click', () => {
        document.querySelector('.mbl-menu').classList.toggle('collapse');
        document.querySelector('.mbl-menu').classList.toggle('active');
    })

}(typeof window != "undefined" ? window : this))