
//cargar productos de agendas en el dom
function crearCardProducto(producto) {
    let divCard = document.createElement("div");
    divCard.classList.add("col", "colCard");
    divCard.innerHTML =
        `<div class="card cardCategoria">
            <div class="">
                <img class="card-img-top" src="../media/img/${producto.categoria}/${producto.sourceFolder}/a.jpg" alt="imagen del interior de una agenda">
            </div>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text fw-bold">$${producto.precio}</p>
                <input type="hidden" value="${producto.nombre}">
                <button class="btn btn-primary">Comprar</button>
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

// esto esta en desarrollo la idea es obtener el nombre del producto entonces con eso poder agregarlo al carrito
// el carrito tambien esta pendiente crearlo a traves de javascript y va a ser un modal probablemente, que se va a ir actualizando
// a medida que el usuario agrega productos.
botonesComprar.forEach(boton => {
    boton.addEventListener('click', event => {
        let nombreProducto = boton.previousElementSibling.value;
        console.log("compro el producto: " + nombreProducto)
    })
});
