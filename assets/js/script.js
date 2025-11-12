




const nombres = ["Unit-734", "Unit-735", "Unit-736", "Unit-737"];
const enlaces = ["unit734.html", "unit735.html", "unit736.html", "unit737.html"];
const rutas = [
  "./assets/img/slider/robot1.png",
  "./assets/img/slider/robot2.png",
  "./assets/img/slider/robot3.png",
  "./assets/img/slider/robot4.png"
];

const imagen = document.getElementById("imagen_robot");
const nombreRobot = document.getElementById("nombre_robot");
const botonExplorar = document.getElementById("boton_explorar");
const atras = document.querySelector(".atras");
const adelante = document.querySelector(".adelante");

let indice = 0;

function mostrarRobot() {
  imagen.src = rutas[indice];
  nombreRobot.textContent = nombres[indice];
  botonExplorar.href = enlaces[indice];
}

atras.addEventListener("click", () => {
  indice = (indice - 1 + rutas.length) % rutas.length;
  mostrarRobot();
});

adelante.addEventListener("click", () => {
  indice = (indice + 1) % rutas.length;
  mostrarRobot();
});

mostrarRobot();