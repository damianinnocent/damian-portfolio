/* =========================================================
   DAMIAN TERPASE AONDONA — PORTFOLIO
   JavaScript
   ========================================================= */


/* =========================
   MOBILE MENU
   ========================= */

const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


/* =========================
   CLOSE MOBILE MENU
   WHEN LINK IS CLICKED
   ========================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


/* =========================
   CURRENT YEAR
   ========================= */

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p:last-child");

if (footerText) {

    footerText.innerHTML =
        `© ${year} Damian Terpase Aondona. All rights reserved.`;

}


/* =========================
   SIMPLE SCROLL REVEAL
   ========================= */

const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


sections.forEach((section) => {

    revealObserver.observe(section);

});