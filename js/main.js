import hamburgerMenu from "./hamburgerBtn.js";
import responsiveQueries from "./responsive.js";

const d = document;


d.addEventListener("DOMContentLoaded", () => {
    responsiveQueries("btn-menu", "(max-width: 700px)", "hidden");
    hamburgerMenu(".nav-btn", ".nav-menu", ".nav-menu a", "active");
})  