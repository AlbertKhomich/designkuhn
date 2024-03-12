"use sctrict";

document.body.classList.add("loaded");

document.addEventListener("DOMContentLoaded", function () {
  let ellipseBtns = document.querySelectorAll(".ellipse-btn");

  ellipseBtns.forEach(function (ellipseBtn) {
    let ellipseLink = ellipseBtn.nextElementSibling;

    ellipseBtn.addEventListener("mouseover", function () {
      this.style.backgroundColor = "black";
      this.style.border = "none";
      ellipseLink.style.color = "white";
    });

    ellipseBtn.addEventListener("mouseout", function () {
      this.style.backgroundColor = "transparent";
      this.style.border = "0.5px solid black";
      ellipseLink.style.color = "black";
    });

    ellipseLink.addEventListener("mouseover", function () {
      ellipseBtn.style.backgroundColor = "black";
      ellipseBtn.style.border = "none";
      this.style.color = "white";
    });

    ellipseLink.addEventListener("mouseout", function () {
      ellipseBtn.style.backgroundColor = "transparent";
      ellipseBtn.style.border = "0.5px solid black";
      this.style.color = "black";
    });
  });
});
