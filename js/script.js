let aside = document.querySelector("aside");
let navBtn = document.querySelector(".nav-btn");

navBtn.onclick = () => {
    aside.classList.toggle("aside-toggle");
    navBtn.classList.toggle("nav-btn-toggle");
}

// Float animation
let aboutUs = document.querySelector(".about-us-wrapper"),
    services = document.querySelector(".services-wrapper"),
    contact = document.querySelector(".contact-wrapper"),
    servicesOffset = services.offsetTop,
    contactOffset = contact.offsetTop;

window.onscroll = () => {
    if (document.documentElement.scrollTop > 300) {
        aboutUs.style.opacity = 1;
        aboutUs.style.transform = "translateX(0)";
    }

    if (document.documentElement.scrollTop > servicesOffset - innerHeight / 1.3) {
        services.style.opacity = 1;
        services.style.transform = "translateX(0)";
    }

    if (document.documentElement.scrollTop > contactOffset - innerHeight / 1.3) {
        contact.style.opacity = 1;
        contact.style.transform = "translateX(0)";
    }
}