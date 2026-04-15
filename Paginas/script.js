const header = document.querySelector(".pt-header__topBox");

let pt_contador=0;

window.addEventListener("scroll", () => {
    if(pt_contador<1){
        header.classList.toggle("header-scrolled");
        pt_contador++;
    }
});