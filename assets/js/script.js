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


// Formulario
function validarFormulario(event) {
  event.preventDefault();
  const email = document.getElementById('email');
  const telefono = document.getElementById('telefono');
  const nombre = document.getElementById('nombre');
  const mensaje = document.getElementById('mensaje');
  const errores = document.getElementById('errores');
  errores.innerHTML = '';

  let valido = true;

  if (!nombre.value.trim()) {
    errores.innerHTML += '<div class="error">Nombre obligatorio</div>';
    valido = false;
  }

  if (!/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(email.value)) {
    errores.innerHTML += '<div class="error">Email inválido</div>';
    valido = false;
  }

  if (!/^\d{10}$/.test(telefono.value)) {
    errores.innerHTML += '<div class="error">Teléfono debe tener 10 dígitos</div>';
    valido = false;
  }

  if (valido) {
    const resultado = document.createElement('div');
    resultado.innerHTML = `
      <h3>Datos enviados:</h3>
      <p><strong>Nombre:</strong> ${nombre.value}</p>
      <p><strong>Email:</strong> ${email.value}</p>
      <p><strong>Teléfono:</strong> ${telefono.value}</p>
      <p><strong>Mensaje:</strong> ${mensaje.value}</p>
    `;
    document.body.appendChild(resultado);
  }
}