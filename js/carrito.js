class ProductMapItem {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

// la key es el producto.id y el value es un ProductMapItem, asi puedo guardar el producto entero y la cantidad correspondiente.
class ProductMap {

    constructor() {
        this.map = new Map();
    }

    has(product) {
        for (const [key, value] of this.map) {
            if (key === product.id) {
                return true;
            }
        }
        return false;
    }

    set(product, cantidad) {
        this.map.set(product.id, new ProductMapItem(product, cantidad));
    }

    get(product) {
        for (const [key, value] of this.map) {
            if (key === product.id) {
                return value;
            }
        }
        return false;
    }

    getProducto(product) {
        for (const [key, value] of this.map) {
            if (key === product.id) {
                return value.producto;
            }
        }
        return false;
    }


    getCantidad(product) {
        for (const [key, value] of this.map) {
            if (key === product.id) {
                return value.cantidad;
            }
        }
        return false;
    }

}


class Carrito {

    constructor() {
        this.fechaCreacion = new Date();
        this.usuario = "Pepe Honguito";
        this.total = 0;
        this.productos = new ProductMap();
    }

    actualizarTotal(producto) {
        this.total = this.total + producto.precio;
        return this.total;
    }


    agregarProductoLS(producto) {
        let current = new Date();
        let currentDateTime = current.getFullYear() + '/' + (current.getMonth() + 1) + '/' + current.getDate() + "-" + current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds() + "." + current.getMilliseconds();

        localStorage.setItem(
            "producto_" + producto.categoria + "_" + producto.id + "_" + currentDateTime,
            JSON.stringify(producto)
        );
    }

    agregarProducto(producto) {
        if (this.productos.has(producto)) {
            this.productos.set(producto, this.productos.getCantidad(producto) + 1);
        } else {
            this.productos.set(producto, 1);
        }
        this.actualizarTotal(producto);
    }

    buscarProductoPorNombre(producto) {

    }



}

let carrito = new Carrito();
cargaInicialLocalStorage();

function cargaInicialLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        if (clave.startsWith("producto_")) {
            let productoLS = JSON.parse(localStorage.getItem(clave));
            cargarProductoEnCarrito(productoLS, false);
        }
    }
}

function cargarProductoEnCarrito(producto, perisistirEnLS) {
    console.table(carrito.productos);

    let cargarEnDOM = false;
    if (!isProductoInCarritoDOM(producto)) {
        cargarEnDOM = true;
    }

    carrito.agregarProducto(producto);

    if(perisistirEnLS){
        carrito.agregarProductoLS(producto);
    }

    if (cargarEnDOM) {
        cargarProductoCarritoDOM(producto);
    } else {
        modificarCantidadProductoCarritoDOM(producto)
    }
}

function cargarProductoCarritoDOM(producto) {
    let cantidadProducto = carrito.productos.getCantidad(producto);

    let tableBody = document.querySelector("#modalCarritoTableBody");

    let filaTabla = document.createElement("tr");
    filaTabla.id = "carrito_tr_" + producto.id;

    filaTabla.innerHTML =
        `
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${cantidadProducto}</td>
    `;

    tableBody.appendChild(filaTabla);

    let totalModalCarrito = document.querySelector("#totalModalCarrito");
    totalModalCarrito.innerHTML = '$' + carrito.total;
}

function modificarCantidadProductoCarritoDOM(producto) {
    let tdCantidad = document.querySelector("#carrito_tr_" + producto.id).children[2];
    tdCantidad.innerHTML = carrito.productos.getCantidad(producto);

    let totalModalCarrito = document.querySelector("#totalModalCarrito");
    totalModalCarrito.innerHTML = '$' + carrito.total;
}

function isProductoInCarritoDOM(producto) {
    return document.querySelector("#carrito_tr_" + producto.id);
}