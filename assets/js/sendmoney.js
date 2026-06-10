// simulamos la carga de un balance inicial Le asignamos un valor simulado a la base de datos

let balance = 100_000; //variables let pueden aumentar/disminuir

// capturamos elementos del dom que demuestran balance

const balanceEl = document.getElementById("balance");

//le decimos al navegador que clase de divisa estamos utilizando (en este caso, solo usamos . y no ,)

balanceEl.textContent = balance.toLocaleString("es-CL");

// Simulamos registro de contactos del usuario


// console.log(contactos[0]);

const contactos = [
    {
        id: 1,
        nombre: "Jon Doe",
        cbu: "123123123",
        alias: "Johhny.Doe",
        banco: "Aragua",
    },
    {
        id: 2,
        nombre: "Juan Carvajal",
        cbu: "5485215",
        alias: "Juanito",
        banco: "Maduro Bank",
    },
];


console.log(contactos[0]);

























// // // simulamos la carga de un balance inicial

// // let balance = 100_000; //variables let pueden aumentar/disminuir

// // // capturamos elementos del dom que demuestran balance

// // const balanceEl = document.getElementById("balance");

// // // Le asignamos un valor simulado a la base de datos

// // balanceEl.textContent = balance.toLocaleString("es-CL");

// // // Simulamos registro de contactos del usuario

// // // const contactos = ["Juan", "Pedro"];

// // // console.log(contactos[0]);

// // const contactos = [
// //     {
// //         id: 1,
// //         nombre: "Jon Doe",
// //         cbu: "123123123",
// //         alias: "Johhny.Doe",
// //         banco: "Aragua",
// //     },
// //     {
// //         id: 2,
// //         nombre: "Juan Carvajal",
// //         cbu: "5485215",
// //         alias: "Juanito",
// //         banco: "Maduro Bank",
// //     },
// // ];


// // // Funciones no manipulan variables, solo valores
// // // Esta funcion se encarga de cargar los contactos en la ul del dom
// // // function cargarContactos(listaContactos) {

// // //     let acumuladorLi = "";

// // //     for (const contacto of contactos) {

// // //         // dessestructurar las propiedades del objeto
// // //         let { id, nombre, cbu, alias, banco } = contactos;
// // //         acumuladorLi += `

// // //         <li class="list-group-item">
// // //         <input class="form-check-input me-1" type="radio" name="contacto"
// // //         value="${cbu}" id="contacto${id}" required />

// // //         <label class="form-check-label" for="contacto${id}">${nombre}, CBU: ${cbu}, Alias: ${alias}
// // //         , Banco: ${banco}</label>
// // //         </li>
// // //     `;
// // //     };

// // //     document.getElementById("listaContactos").innerHTML = acumuladorLi;

// // // };

// // // //FUNCIÓN INICIAL / PRINCIAL

// // // function main() {
// // //     cargarContactos(contactos);
// // // };

// // // main();


// // function cargarContactos(listaContactos) {

// //     let acumuladorLi = "";

// //     for (const contacto of contactos) {

// //         //DESECTRUCTURAR LAS PROPIEDADES DEL OBJETO
// //         let { id, nombre, cbu, alias, banco } = contacto;
// //         acumuladorLi += `
// // <li class="list-group-item">
// // <input class="form-check-input me-1" type="radio" name="contacto" value="${cbu}" id="contacto${id}" required>

// // <label class="form-check-label" for="contacto${id}">${nombre}, CBU:
// // ${cbu}, Alias: ${alias}, Banco: ${banco}</label>
// // </li>
// // `;
// //     };

// //     document.getElementById("listaContactos").innerHTML = acumuladorLi;
// // };


// // const buscarContactoEl = document.getElementById("buscarContacto");

// // //AGREGAMOS EL EVENTO INPUT AL ELEMENTO

// // buscarContactoEl.addEventListener("input", function (event) {
// //     event.preventDefault();

// //     let textoBusqueda = buscarContactoEl.value;

// //     //FILTRAR LOS CONTACTOS QUE COINCIDAN POR EL TEXTO BUSCADO

// //     let contactosFiltrados = contactos.filter(function (contacto) {

// //     });

// // });

// //SIMULAMOS LA CARGA DE UN BALANCE INICIAL
// let balance = 100_000;

// //CAPTURAMOS EL ELEMENTO DEL DOM EN CUAL QUEREMOS MOSTRAR EL BALANCE
// const balanceEl = document.getElementById("balance");

// //LE ASIGNAMOS EL VALOR SIMULADO DE LA BASE DE DATOS
// balanceEl.textContent = balance.toLocaleString("es-CL");

// //SIMULAMOS LOS REGISTROS DE CONTACTO DEL CLIENTE

// const contactos = [
//     {
//         id: 1,
//         nombre: "John Doe",
//         cbu: "123456789",
//         alias: "john.doe",
//         banco: "ABC Bank",
//     },
//     {
//         id: 2,
//         nombre: "Jane Smith",
//         cbu: "987654321",
//         alias: "jane.smith",
//         banco: "XYZ Bank",
//     },
// ];

// //FUNCIÓN QUE SE VA A ENCARGAR DE CARGAR LOS CONTACTOS EN LA UL DEL DOM
// function cargarContactos(listaContactos) {

//     let acumuladorLi = "";

//     for (const contacto of listaContactos) {

//         //DESECTRUCTURAR LAS PROPIEDADES DEL OBJETO
//         let { id, nombre, cbu, alias, banco } = contacto;

//         //AQUÍ VAMOS ACUMULANDO TANTOS LI COMO CONTACTOS TENGAMOS
//         acumuladorLi += `
// <li class="list-group-item">
// <input class="form-check-input me-1" type="radio" name="contacto" value="${cbu}" id="contacto${id}" required>

// <label class="form-check-label" for="contacto${id}">${nombre}, CBU:
// ${cbu}, Alias: ${alias}, Banco: ${banco}</label>
// </li>
// `;
//     };

//     //AGREGAMOS LOS ELEMENTOS DE LISTA A LA UL DEL DOM
//     document.getElementById("listaContactos").innerHTML = acumuladorLi;
// };

// //FUNCIÓN INICIAL / PRINCIAL

// function main() {
//     cargarContactos(contactos);
// };

// main();

// //LÓGICA BUSCAR CONTACTO CON FILTRO DE CONTACTOS

// const buscarContactoEl = document.getElementById("buscarContacto");

// //AGREGAMOS EL EVENTO INPUT AL ELEMENTO

// buscarContactoEl.addEventListener("input", function (event) {
//     event.preventDefault();

//     let textoBusqueda = buscarContactoEl.value;

//     //DEJAMO EL TEXTO EL INPUT EN MINÚSCULAS
//     textoBusqueda = textoBusqueda.toLowerCase();

//     //FILTRAR LOS CONTACTOS QUE COINCIDAN POR EL TEXTO BUSCADO

//     let contactosFiltrados = contactos.filter(function (contacto) {
//         //DESECTRUCTURAR LAS PROPIEDADES DEL OBJETO
//         let { nombre, cbu, alias, banco } = contacto;

//         nombre = nombre.toLowerCase();
//         alias = alias.toLowerCase();
//         banco = banco.toLowerCase();

//         let reglaNombre = nombre.includes(textoBusqueda);
//         let reglaAlias = alias.includes(textoBusqueda);
//         let reglaCbu = cbu.includes(textoBusqueda);
//         let reglaBanco = banco.includes(textoBusqueda);

//         if (reglaNombre || reglaAlias || reglaCbu || reglaBanco) {
//             return contacto;
//         } else {
//             return false;
//         }
//     });

//     //UNA VEZ FILTRADOS LOS CONTACTOS LOS ENVIAMOS A LA FUNCIÓN DE CARGAR CONTACTOS
//     cargarContactos(contactosFiltrados);
// });

// //LÓGICA DE ENVIAR DINERO A UN USUARIO SELECCIONADO

// const formSendMoneyEl = document.getElementById("formSendMoney");

// //AGREGAMOS EL EVENTO SUBMIT

// formSendMoneyEl.addEventListener("submit", function (event) {

//     //DEBEMOS PREVENIR LAS ACCIONES POR DEFECTO
//     event.preventDefault();

//     //CAPTURAMOS LA DATA DEL FORMULARIO
//     let dataFormulario = new FormData(formSendMoneyEl);

//     let monto = dataFormulario.get("monto");

//     monto = Number(monto);

//     //PREGUNTAMOS AL USUARIO SI ESTÁ SEGURO DE TRANSFERIR
//     let confirmacion = confirm(`¿Está seguro de transferir la suma de: $ ${monto.toLocaleString("es-CL")}?`);

//     if (!confirmacion) {
//         //EL RETURN DETIENE LA EJECUCIÓN DEL RESTO DE CÓDIGO
//         return;
//     }


//     let cbuContacto = dataFormulario.get("contacto");

//     //VALIDAR SI EXISTE SALDO DISPONIBLE Y DESCONTAR DE SER POSIBLE

//     if (balance >= monto) {
//         //EN ESTE CASO PUEDO TRANSFERIR
//         balance = balance - monto;
//         let textoMensaje =
//             `Se ha transferido correctamente la suma de: $ ${monto.toLocaleString("es-CL")} a la cuenta\nN° ${cbuContacto}.
// \nSu nuevo saldo es de: ${balance.toLocaleString("es-CL")}
// `;
//         alert(textoMensaje);

//         //ACTUALIZAMOS EL BALANCE EN EL SPAN DEL DOM
//         balanceEl.textContent = balance.toLocaleString("es-CL");

//         //limpiamos el formulario
//         formSendMoneyEl.reset();
//         cargarContactos(contactos);

//     } else {
//         alert("Usted no disponible de saldo suficiente");
//     }
// });