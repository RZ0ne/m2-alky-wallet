import { obtenerBalance, depositar } from "./balance.js";

// Al cargar la página, mostramos el balance actual
actualizarBalanceEnPantalla();

// Cuando se envía el formulario, ejecutamos la función principal
$("#formDeposit").on("submit", manejarEnvioDeposito);

function manejarEnvioDeposito(event) {
  event.preventDefault();

  const monto = obtenerMontoDepositado();

  if (montoEsInvalido(monto)) {
    mostrarAlertaError();
    return;
  }

  depositarMonto(monto);
  mostrarAlertaDepositoExitoso(monto);
  limpiarFormulario();
}

function obtenerMontoDepositado() {
  const valorDelInput = $("#depositos").val();
  const monto = Number(valorDelInput);

  return monto;
}

function montoEsInvalido(monto) {
  const montoEsMenorAlMinimo = monto < 500;
  const montoNoEsNumero = isNaN(monto);

  return montoEsMenorAlMinimo || montoNoEsNumero;
}

function depositarMonto(monto) {
  depositar(monto);
  actualizarBalanceEnPantalla();
}

function actualizarBalanceEnPantalla() {
  const balanceActual = obtenerBalance();
  const balanceFormateado = balanceActual.toLocaleString("es-CL");

  $("#balance").text(balanceFormateado);
}

function mostrarAlertaDepositoExitoso(monto) {
  const montoFormateado = monto.toLocaleString("es-CL");

  $("#alertaDeposito").html(
    `
    <div class="alert alert-success mt-3 text-center" role="alert">
      Se ha realizado un depósito por <br>
      <strong>$ ${montoFormateado}</strong> pesos.
    </div>
    `);
  setTimeout(function () {
            window.location.href = "./index.html";
        }, 3000);
}

function mostrarAlertaError() {
  $("#alertaDeposito").html(`
    <div class="alert alert-danger mt-3 text-center" role="alert">
      Debe ingresar un monto válido. <br>
      El mínimo es <strong>$500</strong>.
    </div>
  `);
}

function limpiarFormulario() {
  $("#formDeposit").trigger("reset");
}