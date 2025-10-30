const nombres = ["Unit-734", "Unit-Delta", "Unit-Core"];
const enlaces = ["#unit734", "#unitdelta", "#unitcore"];

const imagenes = document.querySelectorAll(".slider-img");
const nombreRobot = document.getElementById("nombre_robot");
const botonExplorar = document.getElementById("boton_explorar");
const atras = document.querySelector(".atras");
const adelante = document.querySelector(".adelante");

let indice = 0;

function mostrarImagen() {
  imagenes.forEach((img, i) => {
    img.style.display = i === indice ? "block" : "none";
  });

  nombreRobot.textContent = nombres[indice];
  botonExplorar.href = enlaces[indice];
}

atras.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
});

adelante.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen();
});

mostrarImagen(); 