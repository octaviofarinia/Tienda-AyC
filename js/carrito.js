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

    has( {id} ) {
        for (const [key, value] of this.map) {
            if (key === id) {
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

    getProducto(id) {
        for (const [key, value] of this.map) {
            if (key === id) {
                return value.producto;
            }
        }
        return false;
    }


    getCantidad(id) {
        for (const [key, value] of this.map) {
            if (key === id) {
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

    actualizarTotal( {precio} ) {
        this.total += precio;
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
            this.productos.set(producto, this.productos.getCantidad(producto.id) + 1);
        } else {
            this.productos.set(producto, 1);
        }
        this.actualizarTotal(producto);
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
    let cargarEnDOM = !isProductoInCarritoDOM(producto);

    carrito.agregarProducto(producto);

    //esto funciona porque la segunda propocicion del && solo se evalua si la primera es verdadera, si "persistirEnLS" es falso el interprete directamente ignora la segunda parte.
    //porque no es necesario, en cambio se la primer parte es verdadera el interprete se ve obliga a obtener el valor de la segunda parte entonces debe ejecutar la funcion "carrito.agregarProductoLS(producto)" para obtener algo que evaluar
    perisistirEnLS && carrito.agregarProductoLS(producto);

    cargarEnDOM ? cargarProductoCarritoDOM(producto) : modificarCantidadProductoCarritoDOM(producto);
}

function cargarProductoCarritoDOM( {id, nombre, precio} ) {
    let cantidadProducto = carrito.productos.getCantidad(id);

    let tableBody = document.querySelector("#modalCarritoTableBody");

    let filaTabla = document.createElement("tr");
    filaTabla.id = "carrito_tr_" + id;

    filaTabla.innerHTML =
    `
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${cantidadProducto}</td>
    `;

    tableBody.appendChild(filaTabla);

    let totalModalCarrito = document.querySelector("#totalModalCarrito");
    totalModalCarrito.innerHTML = '$' + carrito.total;
}

function modificarCantidadProductoCarritoDOM( {id} ) {
    let tdCantidad = document.querySelector("#carrito_tr_" + id).children[2];
    tdCantidad.innerHTML = carrito.productos.getCantidad(id);

    let totalModalCarrito = document.querySelector("#totalModalCarrito");
    totalModalCarrito.innerHTML = '$' + carrito.total;
}

function isProductoInCarritoDOM( {id} ) {
    return document.querySelector("#carrito_tr_" + id);
}