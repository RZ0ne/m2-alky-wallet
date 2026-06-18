import { obtenerBalance, transferir } from "./balance.js";

const balanceEl = document.getElementById("balance");

balanceEl.textContent = obtenerBalance().toLocaleString("es-CL");

const contactos = [
  {
    id: 1,
    nombre: "Jon Doe",
    cbu: "123123123",
    alias: "Johhny.Doe",
    banco: "Banco del Empresariado",
  },
  {
    id: 2,
    nombre: "Juan Carvajal",
    cbu: "5485215",
    alias: "Juanito",
    banco: "Banco de Santiago",
  },
  {
    id: 3,
    nombre: "Estevan Trujillo",
    cbu: "12457898",
    alias: "Estebancito",
    banco: "Banco Invierno",
  },
];

// Capturamos los elementos del DOM relacionados con los contactos.
const listaContactosEl = document.getElementById("listaContactos");
const buscarContactoEl = document.getElementById("buscarContacto");

// Esta función recibe un arreglo de contactos y los muestra en el HTML.
function cargarContactos(listaContactos) {
  // Limpiamos la lista para evitar que los contactos se repitan.
  listaContactosEl.innerHTML = "";

  listaContactos.forEach((contacto) => {
    const contactoEl = document.createElement("li");

    // Agregamos una clase de Bootstrap y una clase propia.
    contactoEl.classList.add("list-group-item", "contacto-item");

    // Insertamos un radio button y los datos correspondientes.
    contactoEl.innerHTML = `
  <input
    class="form-check-input contacto-radio"
    type="radio"
    name="contacto"
    value="${contacto.cbu}"
    id="contacto-${contacto.id}"
    required
  />

  <label class="form-check-label contacto-label" for="contacto-${contacto.id}">
    ${contacto.nombre}, CBU: ${contacto.cbu}, Alias: ${contacto.alias},
    Banco: ${contacto.banco}
  </label>
`;

    listaContactosEl.appendChild(contactoEl);
  });
}

// buscador de nombres.
buscarContactoEl.addEventListener("input", function (event) {
  // Convertimos el texto escrito a minúsculas.
  const textoBusqueda = event.target.value.toLowerCase();

  // Filtramos los parametros de los contactos que coincidan con el texto ingresado.
  const contactosFiltrados = contactos.filter(function (contacto) {
    const nombre = contacto.nombre.toLowerCase();
    const alias = contacto.alias.toLowerCase();
    const banco = contacto.banco.toLowerCase();
    const cbu = String(contacto.cbu);

    const reglaNombre = nombre.includes(textoBusqueda);
    const reglaAlias = alias.includes(textoBusqueda);
    const reglaCbu = cbu.includes(textoBusqueda);
    const reglaBanco = banco.includes(textoBusqueda);

    return reglaNombre || reglaAlias || reglaCbu || reglaBanco;
  });

  // Mostramos solamente las coincidencias encontradas.
  cargarContactos(contactosFiltrados);
});

// Función principal: carga los datos iniciales al abrir la página.
function main() {
  cargarContactos(contactos);
}

main();



//LÓGICA DE ENVIAR DINERO A UN USUARIO SELECCIONADO

const formSendMoneyEl = document.getElementById("formSendMoney");


formSendMoneyEl.addEventListener("submit", function (event) {
  event.preventDefault();

  let dataFormulario = new FormData(formSendMoneyEl);

  let monto = dataFormulario.get("monto");
  monto = Number(monto);

  if (monto <= 0 || isNaN(monto)) {
    alert("Debe ingresar un monto válido");
    return;
  }

  let confirmacion = confirm(
    `¿Está seguro de transferir la suma de: $ ${monto.toLocaleString("es-CL")}?`
  );

  if (!confirmacion) {
    return;
  }

  let cbuContacto = dataFormulario.get("contacto");

  if (transferir(monto)) {
    let textoMensaje = `Se ha transferido correctamente la suma de: $ ${monto.toLocaleString("es-CL")} a la cuenta
  N° ${cbuContacto}.

  Su nuevo saldo es de: $ ${obtenerBalance().toLocaleString("es-CL")}
  `;

    alert(textoMensaje);
    balanceEl.textContent = obtenerBalance().toLocaleString("es-CL");
    formSendMoneyEl.reset();
    cargarContactos(contactos);
  } else {
    alert("Usted no dispone de saldo suficiente");
  }
});