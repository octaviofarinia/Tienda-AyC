class Carrito {

    constructor() {
        this.fechaCreacion = new Date();
        this.usuario = "Pepe Honguito";
        this.total = 0;
        this.productos = [];
    }

    calcularTotal() {
        this.productos.forEach(producto => {
            this.total += producto.precio;
        });
        return this.total;
    }

    actualizarTotal(producto) {
        this.total = this.total + producto.precio;
        return this.total;
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        this.actualizarTotal(producto);
    }

}

let carrito = new Carrito();

function cargarProductoEnCarrito(producto) {

    let tableBody = document.querySelector("#modalCarritoTableBody");

    let filaTabla = document.createElement("tr");

    //pendiente agregar logica para que cambie la cantidad cuando el producto ya estaba en la lista en lugar de seguir poniendo mas filas
    filaTabla.innerHTML =
    `
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>1</td>
    `;

    tableBody.appendChild(filaTabla);

    carrito.agregarProducto(producto);

    let totalModalCarrito = document.querySelector("#totalModalCarrito");
    totalModalCarrito.innerHTML = '$' + carrito.total;
}