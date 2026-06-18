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

function obtenerContacto(){
    return contactos
};

export {obtenerContacto};