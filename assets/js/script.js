const nombres = ["Unit-734", "Unit-Delta", "Unit-Core","Unit-67"];
const enlaces = ["#unit734", "#unitdelta", "#unitcore","#unit67"];

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


// Formulario//

  const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // ampliado a 30 caracteres
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{10}$/ // ajustado a 10 dígitos como pide el placeholder
};

const campos = {
  nombre: false,
  correo: false,
  telefono: false
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo__${campo}`)?.classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`)?.classList.add('formulario__grupo-correcto');
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`)?.classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`)?.classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} .formulario__input-error`)?.classList.add('formulario__input-error-activo');
    campos[campo] = false;
  }
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, 'nombre');
      break;
    case "correo":
      validarCampo(expresiones.correo, e.target, 'correo');
      break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, 'telefono');
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  if (campos.nombre && campos.correo && campos.telefono) {
    formulario.reset();
    document.getElementById('resultado').textContent = "Formulario enviado correctamente.";
    document.getElementById('resultado').style.color = "green";
  } else {
    document.getElementById('resultado').textContent = "Por favor completa todos los campos correctamente.";
    document.getElementById('resultado').style.color = "red";
  }
});