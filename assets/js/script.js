const hamburger = document.querySelector("#toggle-btn");

hamburger.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("expand");
});



// Obtener el ancho de la pantalla al cargar y redimensionar
function checkWindowSize() {
  if (window.innerWidth < 768) {
    document.querySelector("#sidebar").classList.remove("expand");
  } else {
    document.querySelector("#sidebar").classList.add("expand");
  }
}

// Verificar el tamaño de la pantalla al cargar la página
window.addEventListener("load", checkWindowSize);

// Verificar el tamaño de la pantalla al redimensionar
window.addEventListener("resize", checkWindowSize);

