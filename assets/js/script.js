'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
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

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".hero-content").classList.add("visible");
  }, 500); 

  setTimeout(() => {
    document.querySelector(".hero-banner").classList.add("visible");
  }, 1000); 
});

const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelector(".hero-content").classList.add("visible");
        entry.target.querySelector(".hero-banner").classList.add("visible");
      }
    });
  },
  {
    threshold: 0.5, 
  }
);

const heroSection = document.querySelector("#acceuil");
heroObserver.observe(heroSection);





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
  const elements = document.querySelectorAll('.card, .section-title'); 

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 150) {
      element.classList.add('animated');
    } else {
      element.classList.remove('animated');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);

document.addEventListener('DOMContentLoaded', animateOnScroll);



