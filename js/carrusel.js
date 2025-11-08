//Carrusel

   
//Array
const carouselData = [
    { src: './imagenes/carrusel-1.jpeg' }, 
    { src: './imagenes/carrusel-2.jpg' },
    { src: './imagenes/carrusel-3.jpg' },
    { src: './imagenes/carrusel-4.jpeg' },
    { src: './imagenes/carrusel-5.jpg' }
];

        
let slideIndex = 1; //Comienzo del Carrusel

function plusSlides(n) { 
    carrusel(slideIndex += n); //Incrementa/decrementa el indice y llama a la funcion principal
}

function currentSlide(n) {  //// Funcion para ir a un slide especifico (llamada por los puntos)
    carrusel(slideIndex = n);
}


// Función principal
function carrusel(n) {
    const numSlides = carouselData.length; 

// Manejo del indice (vuelve a 1 si supera el limite, o al final si es menor a 1)
    if (n > numSlides) {slideIndex = 1}    
    if (n < 1) {slideIndex = numSlides}

    const currentItemIndex = slideIndex - 1; 
    const currentData = carouselData[currentItemIndex];


// Obtiene los elementos del DOM que vamos a actualizar
    const slideImg = document.getElementById("slide-img");
    const slideNumberText = document.getElementById("slide-number");
    let dots = document.getElementsByClassName("dot");

// Actualizar imagen y numero
    if (slideImg && slideNumberText) {
        slideImg.src = currentData.src; 
    slideNumberText.textContent = `${slideIndex} / ${numSlides}`;
    }

// Actualizar puntos
    for (let i = 0; i < dots.length; i++) {
         dots[i].classList.remove("active");
    }
            
    if (dots.length > 0) {
        dots[currentItemIndex].classList.add("active"); 
    }
        }
// Inicializacion: Asegura que el carrusel se muestre correctamente al cargar la pagina
    document.addEventListener('DOMContentLoaded', (event) => {
      carrusel(slideIndex);
    });