import hamburgerMenu from "./hamburgerBtn.js";
import responsiveQueries from "./responsive.js";
import sliderLink from "./sliderLink.js";

const d = document;


d.addEventListener("DOMContentLoaded", () => {
    responsiveQueries("btn-menu", "(max-width: 700px)", "hidden");
    hamburgerMenu(".nav-btn", ".nav-menu", ".nav-menu a", "active");
    sliderLink(".slider", "#originals")
})  