/*Carrusel*/

let slideIndex = 1; //Declara e inicializa el carrusel
carrusel(slideIndex);

function plusSlides(n) { 
  carrusel(slideIndex += n);
}                               

function currentSlide(n) {   
  carrusel(slideIndex = n);
}

function carrusel(n) {  //Funcion principal
  let i;
  let slides = document.getElementsByClassName("slides"); //Aca hacemos la conexion con los div de imagenes
  let dots = document.getElementsByClassName("dot"); //Conexion con los botones de la parte inferior
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) { //Aca nos aseguramos que las imagenes esten ocultas
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //Con esto dejamos seleccionado el boton segun la imagen
  }
  slides[slideIndex-1].style.display = "block";  //Muestra la imagen Actual
  dots[slideIndex-1].className += " active"; //Activa el punto indicador correspondiente
}