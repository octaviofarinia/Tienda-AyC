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

    agregarProducto(producto) {
        this.productos.push(producto);
    }

}