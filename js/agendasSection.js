//crear productos de la seccion agendas
let productosAgendasSection = [];

productosAgendasSection.push( new Producto(
    "Diaria",
    "Esta agenda es la más elegida en nuestros 10 años de trayectoria. Ideal para cualquier actividad que realices, profesional, recreativa o personal.",
    1200,
    "agendas",
    "Diaria"
));

productosAgendasSection.push( new Producto(
    "Semanal Formal",
    "Ideal para gestionar los turnos de tu consultorio, tu estudio o cualquier actividad que requiera una planificación semanal con horarios.",
    1100,
    "agendas",
    "Semanal_formal"
));

productosAgendasSection.push( new Producto(
    "Semanal Informal",
    "Con un diseño más desestructurado, fue pensada para personas más inquietas y creativas.",
    1050,
    "agendas",
    "Semanal_informal"
));

productosAgendasSection.push( new Producto(
    "Perpetua Formal",
    "Se denomina perpetua porque no trae impresos ni la fecha ni los meses, sí los días de la semana. Ideal para comenzar a usarla en cualquier epoca del año.",
    1150,
    "agendas",
    "Perpetua_formal"
));

productosAgendasSection.push( new Producto(
    "Perpetua Informal",
    "Otra opción en perpetua es esta agenda con un diseño más relajado y divertido.",
    1000,
    "agendas",
    "Perpetua_informal"
));

productosAgendasSection.push( new Producto(
    "Emprendedor",
    "Herramienta fundamental para organizar tu emprendimiento.",
    1500,
    "agendas",
    "Emprendedor"
));

productosAgendasSection.push( new Producto(
    "Manicura",
    "Vas a poder organizar tu negocio y tener registro de todos tus clientes.",
    1300,
    "agendas",
    "Manicura"
));

productosAgendasSection.forEach(producto => {
    productosEnVenta.push(producto);
});

let sectionCards = document.querySelector("#sectionCards");

for (let i = 0; i < productosEnVenta.length; i++) {
    sectionCards.appendChild(crearCardProducto(productosEnVenta[i]));
}
