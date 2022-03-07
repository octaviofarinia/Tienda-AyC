class Producto {

    constructor(nombre, descripcion, precio, categoria, sourceFolder) {
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