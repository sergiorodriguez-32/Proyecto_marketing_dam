document.addEventListener('DOMContentLoaded', () => {
    
    const track = document.querySelector('.su-js-reviews-track');
    const btnPrev = document.querySelector('.su-js-btn-prev');
    const btnNext = document.querySelector('.su-js-btn-next');
    const slides = document.querySelectorAll('.su-js-slide');

    let box = 0;
    const totalSlides = slides.length;

    function updateSlider() {

        const translateValue = -(box * 100);
        track.style.transform = `translateX(${translateValue}%)`;
    }

    // 4. Evento para el botón "Siguiente"
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