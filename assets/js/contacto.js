document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const resultado = document.getElementById("resultado");

  // Limpiar errores anteriores
  document.querySelectorAll(".error").forEach(el => el.remove());
    const mensajePrevio = document.getElementById("mensaje");
    if (mensajePrevio) mensajePrevio.remove();
  let valido = true;

  function mostrarError(id, mensaje) {
    const campo = document.getElementById(id);
    const error = document.createElement("div");
    error.className = "error";
    error.textContent = mensaje;
    campo.parentElement.appendChild(error);
    valido = false;
  }

  // Validaciones
  if (nombre.length < 5 || nombre.length > 10) {
    mostrarError("nombre", "El nombre debe tener entre 5 y 10 caracteres.");
  }

  const regexEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
  if (!regexEmail.test(email)) {
    mostrarError("email", "Correo electrónico inválido.");
  }

  const regexTel = /^\d{10}$/;
  if (!regexTel.test(telefono)) {
    mostrarError("telefono", "El teléfono debe tener exactamente 10 dígitos.");
  }

  // Si todo está bien, mostrar mensaje
  if (valido) {
    const mensaje = document.createElement("div");
    mensaje.id = "mensaje";
    mensaje.textContent = `¡Gracias ${nombre}! Tu contacto fue enviado correctamente.`;
    const form = document.querySelector("form");
      mensaje.style.marginTop = "3rem";
      mensaje.style.textAlign = "center";
      form.insertAdjacentElement("afterend", mensaje);
      mensaje.scrollIntoView({ behavior: "auto", block: "center" });
      mensaje.style.backgroundColor = "#100c82ff";
  }
});