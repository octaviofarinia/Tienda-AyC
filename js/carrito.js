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

    getPMI(id) {
        for (const [key, value] of this.map) {
            if (key === id) {
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

    eliminarProductoUnidad(nombre) {
        let productoMapItem = this.productos.getPMI(crearIdProducto(nombre));

        if (productoMapItem.cantidad > 0) {
            this.productos.set(productoMapItem.producto, (productoMapItem.cantidad - 1));
            this.actualizarTotal({precio: (productoMapItem.producto.precio * -1)});
        } else {
            console.log("CANTIDAD DE ESE PRODUCTO ES CERO, TODAVIA NO FUNCIONA ESA PARTE XD");
        }

        console.log( this.productos.getPMI(crearIdProducto(nombre)));
        console.log("nuevo total: " + this.total);
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
cargarModalCarritoEnDOM();
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

    perisistirEnLS && carrito.agregarProductoLS(producto);

    cargarEnDOM ? cargarProductoCarritoDOM(producto) : modificarCantidadProductoCarritoDOM(producto);

    actualizarCantCarritoSpan();

}

function actualizarCantCarritoSpan() {
    let carritoSpan = document.querySelector("#spanCarritoCantItems");
    let innerHTMLCarritoSpan = carritoSpan.innerHTML;

    if (innerHTMLCarritoSpan == "") {
        carritoSpan.innerHTML = " 1 ";
    } else {
        let previaCant = parseInt(innerHTMLCarritoSpan.trim(" "));
        carritoSpan.innerHTML = " " + (previaCant+1) + " ";
    }
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
        <td>
            <button type="button" class="btn" onclick="removerItemCarritoDom('${nombre}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"></path>
                </svg>
            </button>
        <td>
    `;

    tableBody.appendChild(filaTabla);

    let totalModalCarrito = document.querySelector("#totalModalCarrito");
    totalModalCarrito.innerHTML = '$' + carrito.total;
}

function modificarCantidadProductoCarritoDOM( {id} ) {
    let tdCantidad = document.querySelector("#carrito_tr_" + id).children[2];
    let prevCant = tdCantidad.innerHTML;
    tdCantidad.innerHTML = carrito.productos.getCantidad(id);

    let totalModalCarrito = document.querySelector("#totalModalCarrito");
    totalModalCarrito.innerHTML = '$' + (carrito.total);

    console.log(document.querySelector("#carrito_tr_" + id));

}

function isProductoInCarritoDOM( {id} ) {
    return document.querySelector("#carrito_tr_" + id);
}

//crear modal carrito en el dom
function cargarModalCarritoEnDOM() {
    let modalCarrito = document.querySelector("#modalCarrito");
    modalCarrito.innerHTML = 
    `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalCarritoLabel">Carrito</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cant.</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody id="modalCarritoTableBody">
                        </tbody>
                    </table>
                    <p class="fw-bold">Total: <span id="totalModalCarrito"></span></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Confirmar Compra</button>
                </div>
            </div>
        </div>
    `
}

function removerItemCarritoDom(nombre) {
    let idProducto = crearIdProducto(nombre);

    //buscar el carrito en ls y eliminarlo
    eliminarProductoEnLS({ id: idProducto });

    //buscar el producto en el carrito y eliminarlo
    carrito.eliminarProductoUnidad(nombre);

    //restar 1 la cantidad o eliminar el tr
    modificarCantidadProductoCarritoDOM({ id: idProducto });
}