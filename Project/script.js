"use strict";

// Nav Links Scrolling
document.querySelector(".nav_left").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav_link")) {
    const idName = e.target.getAttribute("href");
    document.querySelector(idName).scrollIntoView({ behavior: "smooth" });
  }
});
