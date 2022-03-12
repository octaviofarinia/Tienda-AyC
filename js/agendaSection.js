//crear productos de la seccion agendas
let agendaDiaria = new Producto(
    "Diaria",
    "Esta agenda es la más elegida en nuestros 10 años de trayectoria. Ideal para cualquier actividad que realices, profesional, recreativa o personal.",
    1200,
    "agendas",
    "Diaria"
);

let agendaSemanalFormal = new Producto(
    "Semanal Formal",
    "Ideal para gestionar los turnos de tu consultorio, tu estudio o cualquier actividad que requiera una planificación semanal con horarios.",
    1100,
    "agendas",
    "Semanal_formal"
);

let agendaSemanalInformal = new Producto(
    "Semanal Informal",
    "Con un diseño más desestructurado, fue pensada para personas más inquietas y creativas.",
    1050,
    "agendas",
    "Semanal_informal"
);

let agendaPerpetuaFormal = new Producto(
    "Perpetua Formal",
    "Se denomina perpetua porque no trae impresos ni la fecha ni los meses, sí los días de la semana. Ideal para comenzar a usarla en cualquier epoca del año.",
    1150,
    "agendas",
    "Perpetua_formal"
);

let agendaPerpetuaInformal = new Producto(
    "Perpetua Informal",
    "Otra opción en perpetua es esta agenda con un diseño más relajado y divertido.",
    1000,
    "agendas",
    "Perpetua_informal"
);

let agendaEmprendedor = new Producto(
    "Emprendedor",
    "Herramienta fundamental para organizar tu emprendimiento.",
    1500,
    "agendas",
    "Emprendedor"
);

let agendaManicura = new Producto(
    "Manicura",
    "Vas a poder organizar tu negocio y tener registro de todos tus clientes.",
    1300,
    "agendas",
    "Manicura"
);

productosEnVenta.push(agendaDiaria);
productosEnVenta.push(agendaSemanalFormal);
productosEnVenta.push(agendaSemanalInformal);
productosEnVenta.push(agendaSemanalFormal);
productosEnVenta.push(agendaPerpetuaFormal);
productosEnVenta.push(agendaPerpetuaInformal);
productosEnVenta.push(agendaEmprendedor);
productosEnVenta.push(agendaManicura);

//cargar productos de agendas en el dom
function crearCardProducto(producto) {
    let divCard = document.createElement("div");
    divCard.classList.add("col", "colCard");
    divCard.innerHTML =
        `<div class="card cardCategoria">
            <div class="">
                <img class="card-img-top" src="../media/img/${producto.categoria}/${producto.sourceFolder}/a.jpg" alt="imagen del interior de una agenda">
            </div>
            <div class="card-body pb-0">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
            </div>
            <div class="card-body d-flex align-items-end justify-content-start pt-2">
                <input type="hidden" value="${producto.nombre}">
                <button class="btn btn-primary">Comprar</button>
                <p class="card-text fw-bold ms-2">$${producto.precio}</p>
            </div>
        </div>`;
    return divCard;
};

let sectionCards = document.querySelector("#sectionCards");

for (let i = 0; i < productosEnVenta.length; i++) {
    sectionCards.appendChild(crearCardProducto(productosEnVenta[i]));
}

//crear funciones para añadir al carrito cuando se toque el boton de comprar
let botonesComprar = document.querySelectorAll(".card-body button");


botonesComprar.forEach(boton => {
    boton.addEventListener('click', event => {
        let nombreProducto = boton.previousElementSibling.value;
        console.log("compro el producto: " + nombreProducto);

        let productoSeleccinado = buscarProductoEnVentaPorNombre(nombreProducto);

        cargarProductoEnCarrito(productoSeleccinado, true);
    })
});
