"use strict";

/**
 * Navbar toggle
 */
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const prevButton = document.querySelector(".prev"); 
const contactRes = document.querySelector(".contactRes"); 
const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

    // Gérer la visibilité du bouton prev
  if (navbar.classList.contains("active")) {
    prevButton.style.visibility = "hidden";
    contactRes.style.display = "block"; // Correction ici
  } else {
    prevButton.style.visibility = "visible";
    contactRes.style.display = "none"; // Masquer le bouton si le menu se ferme
  }
  });
}

/**
 * Toggle navbar & overlay when clicking any navbar-link
 */
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

    // Gérer la visibilité du bouton prev
    if (navbar.classList.contains("active")) {
      prevButton.style.visibility = "hidden"; 
    } else {
      prevButton.style.visibility = "visible"; 
    }
  });
}

/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
// ************************************pop up***************************

let popup = document.getElementById("popUp");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

function validateForm(event) {
  let firstName = document.forms["myForm"]["first_name"].value;
  let lastName = document.forms["myForm"]["last_name"].value;
  let email = document.forms["myForm"]["email"].value;
  let phone = document.forms["myForm"]["phone"].value;
  let message = document.forms["myForm"]["message"].value;

  if (
    firstName == "" ||
    lastName == "" ||
    email == "" ||
    phone == "" ||
    message == ""
  ) {
    alert("Tous les champs doivent être remplis.");
    event.preventDefault();
    return false;
  }

  openPopup();
  return true;
}

/*-----------------------------------*\
  #animation js css
\*-----------------------------------*/

// animation de l'acceuil--------------------------------------------------

// animation de about---------------------------------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelector(".about-content").classList.add("visible");
        entry.target.querySelector(".about-banner").classList.add("visible");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const aboutSection = document.querySelector("#about");
observer.observe(aboutSection);

// animation service -------------------------------
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".card, .section-title");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 150) {
      element.classList.add("animated");
    } else {
      element.classList.remove("animated");
    }
  });
};

// Appel de la fonction lors du défilement de la page
window.addEventListener("scroll", animateOnScroll);


// gere les slide-------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;

  const slides = document.querySelectorAll(".slides img");
  const contents = document.querySelectorAll(".content-item");
  const dots = document.querySelectorAll(".dot");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  function changeSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");

      if (contents[i]) contents[i].classList.remove("active");
      if (dots[i]) dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");

    if (contents[index]) contents[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");

    document.querySelector(".slides").style.transform = `translateX(-${
      index * 100
    }%)`;
    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    changeSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    changeSlide(currentIndex);
  }

  if (dots.length) {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => changeSlide(index));
    });
  }

  if (nextButton) nextButton.addEventListener("click", nextSlide);
  if (prevButton) prevButton.addEventListener("click", prevSlide);

  changeSlide(currentIndex);

  let slideInterval = setInterval(nextSlide, 5000);

  [nextButton, prevButton, ...dots].forEach((elem) => {
    if (elem) {
      elem.addEventListener("click", () => clearInterval(slideInterval));
    }
  });
});
