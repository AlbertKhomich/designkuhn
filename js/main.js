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

window.addEventListener("DOMContentLoaded", function () {
  animateAbout();
  animateElements();
});

window.addEventListener("scroll", function () {
  animateAbout();
  animateElements();
});

function animateAbout() {
  const placeholdersAbout = document.querySelectorAll(".img-placeholder");

  placeholdersAbout.forEach(function (placeholder, index) {
    const img = document.createElement("img");
    img.src = placeholder.getAttribute("data-src");
    img.alt = "Design Kuhn";
    img.classList.add("img-fluid");
    img.classList.add("about-img");
    if (isInViewport(placeholder)) {
      img.classList.add("about-animate-grow");
      placeholder.parentNode.insertBefore(img, placeholder.nextSibling);
      setTimeout(function () {
        img.style.opacity = "1";
      }, 500);
      placeholder.remove();
    }
  });
}

function animateElements() {
  const elements = document.querySelectorAll(".animated-text");

  elements.forEach(function (elem) {
    const delay = parseFloat(elem.getAttribute("data-delay") || "0") * 1000;
    if (isInViewport(elem)) {
      setTimeout(function () {
        elem.classList.add("animate");
      }, delay);
    }
  });
}

function isInViewport(elem) {
  const rect = elem.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
