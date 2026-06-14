import { obtenerBalance, depositar } from "./balance.js";

// Capturamos elementos del HTML
const balanceEl = document.getElementById("balance");
const formDepositEl = document.getElementById("formDeposit");

// Función para actualizar el balance en pantalla
function actualizarBalanceEnPantalla() {
  balanceEl.textContent = obtenerBalance().toLocaleString("es-CL");
}

// Mostramos el balance apenas carga la página
actualizarBalanceEnPantalla();

// Escuchamos el envío del formulario
formDepositEl.addEventListener("submit", function (event) {
  event.preventDefault();

  // Capturamos los datos del formulario
  const dataFormulario = new FormData(formDepositEl);

  // En tu HTML el input tiene name="depositos"
  let monto = dataFormulario.get("depositos");

  // Convertimos el monto a número
  monto = Number(monto);

  // Validamos el monto
  if (monto <= 0 || isNaN(monto)) {
    alert("Debe ingresar un monto válido");
    return;
  }

  // Depositamos el dinero usando la función del módulo balance.js
  depositar(monto);

  // Actualizamos el balance en pantalla
  actualizarBalanceEnPantalla();

  // Mensaje al usuario
  alert(`Depósito realizado por $ ${monto.toLocaleString("es-CL")}`);

  // Limpiamos el formulario
  formDepositEl.reset();
});