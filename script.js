// ==============================
// MENÚ HAMBURGUESA
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Cerrar menú al seleccionar una opción

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==============================
// BOTÓN SUBIR
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ==============================
// ANIMACIÓN AL HACER SCROLL
// ==============================

const elementos = document.querySelectorAll(
".card, .info-card, .ingredientes div, .sabor, .titulo, .contacto, footer"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("mostrar");

        }

    });

},{
    threshold:.2
});

elementos.forEach(el=>observer.observe(el));


// ==============================
// EFECTO HEADER
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.classList.add("scroll");

    }else{

        header.classList.remove("scroll");

    }

});


// ==============================
// EFECTO HOVER EN TARJETAS
// ==============================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x",x+"px");
        card.style.setProperty("--y",y+"px");

    });

});


// ==============================
// EFECTO APARICIÓN HERO
// ==============================

window.addEventListener("load",()=>{

    document.querySelector(".hero-content").classList.add("heroShow");

});


// ==============================
// EFECTO LATIDO WHATSAPP
// ==============================

const whatsapp = document.querySelector(".whatsapp");

setInterval(()=>{

    whatsapp.classList.add("pulse");

    setTimeout(()=>{

        whatsapp.classList.remove("pulse");

    },900);

},4000);


// ==============================
// SCROLL SUAVE
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ==============================
// EFECTO TÍTULOS
// ==============================

const titulos=document.querySelectorAll(".titulo");

titulos.forEach((titulo)=>{

    titulo.addEventListener("mouseenter",()=>{

        titulo.style.transform="scale(1.05)";

    });

    titulo.addEventListener("mouseleave",()=>{

        titulo.style.transform="scale(1)";

    });

});


// ==============================
// PRELOADER SIMPLE (opcional)
// ==============================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});