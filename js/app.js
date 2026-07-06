// ================================
// KivuSTREAM
// app.js
// ================================

// Navbar background on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "#05070d";

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

    }else{

        navbar.style.background = "rgba(10,10,10,.65)";

        navbar.style.boxShadow = "none";

    }

});


// ================================
// Movie Card Hover
// ================================

const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


// ================================
// Hero Button
// ================================

const watchButton = document.querySelector(".watch-btn");

watchButton.addEventListener("click", () => {

    alert("Welcome to KivuSTREAM!");

});


// ================================
// Login Button
// ================================

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", () => {

    window.location.href = "login.html";

});


// ================================
// Search Icon
// ================================

const searchIcon = document.querySelector(".fa-magnifying-glass");

searchIcon.addEventListener("click", () => {

    const keyword = prompt("Search movie");

    if(keyword){

        alert("Searching for: " + keyword);

    }

});


// ================================
// Horizontal Mouse Wheel Scroll
// ================================

const rows = document.querySelectorAll(".movie-row");

rows.forEach(row=>{

    row.addEventListener("wheel",(e)=>{

        e.preventDefault();

        row.scrollLeft += e.deltaY;

    });

});


// ================================
// Fade Animation
// ================================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".movies").forEach(section=>{

    observer.observe(section);

});
