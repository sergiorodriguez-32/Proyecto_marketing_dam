/* Index */


function indToggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");

    if (currentTheme === "night") {
        html.setAttribute("data-theme", "day");
        localStorage.setItem("ind-theme", "day");
    } else {
        html.setAttribute("data-theme", "night");
        localStorage.setItem("ind-theme", "night");
    }
}

const savedTheme = localStorage.getItem("ind-theme");

if (savedTheme === "night" || savedTheme === "day") {
    document.documentElement.setAttribute("data-theme", savedTheme);
}

/* Index */
const header = document.querySelector(".pt-header__topBox");

let pt_contador=0;

window.addEventListener("scroll", () => {
    if(pt_contador<1){
        header.classList.toggle("header-scrolled");
        pt_contador++;
    }
});



document.addEventListener("DOMContentLoaded", () => {

    let login = document.getElementById("ind-login");
    let buttonLogin = document.getElementById("ind-employee__button");
    let abierto = false;

    let user = document.getElementById("user");
    let password = document.getElementById("password");
    let enterButton = document.getElementById("loginButton");
    let employeeContent = document.getElementById("ind-employee__content");
    let employeeName = document.getElementById("ind-employee__name");

    buttonLogin.addEventListener("click", abrirCerrar);

    function abrirCerrar(){
        if (abierto==false) {
            login.style.display = "block";
            abierto = true;
        } else {
            login.style.display = "none";
            return
        }
    }

    enterButton.addEventListener("click", (e)=>{
        e.preventDefault();
        
        let userText = user.value;
        let passwordText = password.value;

        if(userText=="user1"||userText==="usuario"&&passwordText=="1234"){
            employeeContent.style.display = "flex";
            abrirCerrar();
            employeeName.textContent = userText;
        } else {
            alert("Credenciales incorrectas")
        }
    })

});





/* CapitalHome */

const carousel = document.getElementById("carousel");
const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let originalCards = Array.from(document.querySelectorAll(".cph-property-card"));
let currentIndex = 0;
let autoSlide;
let isAnimating = false;

function getVisibleCards() {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
}

function getGap() {
    return 20;
}

function getCardWidth() {
    const card = track.querySelector(".cph-property-card");
    return card.offsetWidth + getGap();
}

function createInfiniteCarousel() {
    track.innerHTML = "";

    const visibleCards = getVisibleCards();

    const clonesBefore = originalCards
        .slice(-visibleCards)
        .map((card) => card.cloneNode(true));

    const clonesAfter = originalCards
        .slice(0, visibleCards)
        .map((card) => card.cloneNode(true));

    clonesBefore.forEach((card) => track.appendChild(card));
    originalCards.forEach((card) => track.appendChild(card.cloneNode(true)));
    clonesAfter.forEach((card) => track.appendChild(card));

    currentIndex = visibleCards;
    updateCarousel(false);
}

function updateCarousel(animate = true) {
    const offset = currentIndex * getCardWidth();
    track.style.transition = animate ? "transform 1.2s ease-in-out" : "none";
    track.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex++;
    updateCarousel(true);
}

function prevSlide() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex--;
    updateCarousel(true);
}

track.addEventListener("transitionend", () => {
    const visibleCards = getVisibleCards();
    const totalOriginal = originalCards.length;

    if (currentIndex >= totalOriginal + visibleCards) {
        currentIndex = visibleCards;
        updateCarousel(false);
    }

    if (currentIndex < visibleCards) {
        currentIndex = totalOriginal + visibleCards - 1;
        updateCarousel(false);
    }

    isAnimating = false;
});

function startAutoSlide() {
    stopAutoSlide();
    autoSlide = setInterval(() => {
        nextSlide();
    }, 4500);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoSlide();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    startAutoSlide();
});

carousel.addEventListener("mouseenter", stopAutoSlide);
carousel.addEventListener("mouseleave", startAutoSlide);

window.addEventListener("resize", () => {
    createInfiniteCarousel();
});

track.addEventListener("click", (e) => {
    const button = e.target.closest(".cph-property-card__favorite-btn");
    if (!button) return;

    button.classList.toggle("cph-property-card__favorite-btn--active");
    button.textContent = button.classList.contains("cph-property-card__favorite-btn--active") ? "♥" : "♡";
});

createInfiniteCarousel();
startAutoSlide();

/* CapitalHome */






/*  S U M O  */

document.addEventListener('DOMContentLoaded', () => {
    
    const track = document.querySelector('.su-js-reviews-track');
    const btnPrev = document.querySelector('.su-js-btn-prev');
    const btnNext = document.querySelector('.su-js-btn-next');
    const slides = document.querySelectorAll('.su-js-slide');

    // Validación para que se ejecute solo si encuentra el carrusel
    if (!track || !btnPrev || !btnNext || slides.length === 0) return;

    let box = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        const translateValue = -(box * 100);
        track.style.transform = `translateX(${translateValue}%)`;
    }

    btnNext.addEventListener('click', () => {
        box++;

        if (box >= totalSlides) {
            box = 0; 
        }
        updateSlider();
    });

    btnPrev.addEventListener('click', () => {
        box--;
        if (box < 0) {
            box = totalSlides - 1; 
        }
        updateSlider();
    });
});

/*  S U M O  */