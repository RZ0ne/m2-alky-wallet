// Clave con la que guardaremos el balance en localStorage
const BALANCE_KEY = "alky_balance";

// Revisamos si ya existe un balance guardado
let balanceGuardado = localStorage.getItem(BALANCE_KEY);

// Si no existe, usamos 100.000 como balance inicial
let balance = (balanceGuardado === null) ? 100_000 : Number(balanceGuardado);

function guardarBalance() {
  localStorage.setItem(BALANCE_KEY, balance);
}

function obtenerBalance() {
  return balance;
}

function depositar(monto) {
  balance = balance + monto;
  guardarBalance();
  return balance;
}

function transferir(monto) {
  if (balance >= monto) {
    balance = balance - monto;
    guardarBalance();
    return true;
  }

  return false;
}

export { obtenerBalance, depositar, transferir };