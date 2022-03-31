class Producto {

    constructor(nombre, descripcion, precio, categoria, sourceFolder) {
        this.id = crearIdProducto(nombre);
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.sourceFolder = sourceFolder;
    }

}

let productosEnVenta = [];

function buscarProductoEnVentaPorNombre(nombre) {
    return productosEnVenta.find((producto) => producto.nombre.toUpperCase() === nombre.toUpperCase());
}

//crear el html para una card de un producto
function crearCardProducto({categoria, sourceFolder, nombre, descripcion, precio}) {
    let divCard = document.createElement("div");
    divCard.classList.add("col", "colCard");
    divCard.innerHTML =
        `<div class="card cardCategoria">
            <div class="">
                <img class="card-img-top" src="../media/img/${categoria}/${sourceFolder}/1.jpg" alt="imagen del interior de una agenda">
            </div>
            <div class="card-body pb-0">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${descripcion}</p>
            </div>
            <div class="card-body d-flex align-items-end justify-content-start pt-2">
                <input type="hidden" value="${nombre}">
                <button class="btn btn-primary">Comprar</button>
                <p class="card-text fw-bold ms-2">$${precio}</p>
            </div>
        </div>`;
    return divCard;
};

function eliminarProductoEnLS(id, categoria) {
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let claveRegex = clave.replace(/producto_[a-zA-Z]*[_]/g, '');
        claveRegex = clave.match(/[a-zA-Z_]*/g)[0];
        if (claveRegex) {
            localStorage.removeItem(clave);
            break;
        }
    }
}

function crearIdProducto(nombre) {
    return nombre.split(' ').join('_');
}