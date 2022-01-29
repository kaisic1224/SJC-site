"use strict";

(function (global) {
    const resources = document.querySelector(".resources");
    // MAYBE DATABASE ???

    const menu = document.querySelector(".menu-btn");
    const openMenu = document.querySelector(".menu-btn-expanded");
    const mblMenu = document.querySelector(".mbl-menu");
    const fadeIn = document.querySelectorAll(".fade-in-up");
    const anchors = document.querySelectorAll(".nav-link");
    const cards = document.querySelectorAll(".card");

    menu.addEventListener("click", () => {
        mblMenu.classList.toggle("active");
        mblMenu.classList.toggle("collapse");
        anchors.forEach((anchor) => {
            anchor.ariaHidden = "false";
        });
    });

    openMenu.addEventListener("click", () => {
        mblMenu.classList.toggle("collapse");
        mblMenu.classList.toggle("active");
        anchors.forEach((anchor) => {
            anchor.ariaHidden = "true";
        });
    });

    // function smoothScrollTo(element) {
    //     var element = document.getElementById
    //     element.scrollIntoView({
    //         block: "start",
    //         behaviour: "smooth"
    //     })
    // }

    // console.log(document.querySelector('[data-target]').dataset.target)

    // anchors.forEach(anchor => {
    //     anchor.dataset.scroll
    //     anchor.addEventListener('click', smoothScrollTo());
    // }) person?.age, "age" in person, age>=18 ? canDrink = false : canDrink = true

    const appearOptions = {
        rootMargin: "0px 0px 50px 0px",
    };
    const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        });
    },
    appearOptions);

    fadeIn.forEach((fade) => {
        appearOnScroll.observe(fade);
    });
})(typeof window != "undefined" ? window : this);
