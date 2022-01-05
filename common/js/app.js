"use strict";

(function (global) {

    const resources = document.querySelector('.resources');
    // MAYBE DATABASE ???

    const menu = document.querySelector('.menu-btn');
    const openMenu = document.querySelector('.menu-btn-expanded');
    const mblMenu = document.querySelector('.mbl-menu');
    const fadeIn = document.querySelectorAll('.fade-in-up');
    const links = document.querySelectorAll('.nav-link');



    menu.addEventListener('click', () => {
        mblMenu.classList.toggle('active');
        mblMenu.classList.toggle('collapse');
    });

    openMenu.addEventListener('click', () => {
        mblMenu.classList.toggle('collapse');
        mblMenu.classList.toggle('active');
    });




    const appearOptions = {
        threshold: 0.25,
        rootMargin: '0px 0px -50px 0px'
    }
    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    fadeIn.forEach(fade => {
        appearOnScroll.observe(fade);
    });

}(typeof window != "undefined" ? window : this))