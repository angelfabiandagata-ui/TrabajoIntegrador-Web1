/*Carrusel*/

//Array
const carouselData = [
    { title: 'Dulzura', src: './img/carrusel-1.jpeg' }, 
    { title: 'Técnica', src: './img/carrusel-2.jpg' },
    { title: 'Profesionalismo', src: './img/carrusel-3.jpg' },
    { title: 'Dedicación', src: './img/carrusel-4.jpeg' },
    { title: 'Amor', src: './img/carrusel-5.jpg' }
];


let slideIndex = 1; //Declara e inicializa el carrusel
carrusel(slideIndex);


function plusSlides(n) { 
  carrusel(slideIndex += n);
}                               

function currentSlide(n) {   
  carrusel(slideIndex = n);
}

function carrusel(n) {  //Funcion principal
  const numSlides = carouselData.length; 
  let slides = document.getElementsByClassName("slides"); //Aca hacemos la conexion con los div de imagenes
  let dots = document.getElementsByClassName("dot"); //Conexion con los botones de la parte inferior3
  if (slides.length === 0) return; 

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) { //Aca nos aseguramos que las imagenes esten ocultas
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");//Con esto dejamos seleccionado el boton segun la imagen
  }
  slides[slideIndex-1].style.display = "block";  //Muestra la imagen Actual
  if (dots.length > 0) {
        // Usamos classList.add() para evitar problemas de espacios
        dots[slideIndex-1].classList.add("active"); 
  }
}