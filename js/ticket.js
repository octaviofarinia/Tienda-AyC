class Ticket {

    constructor() {
        this.fechaCreacion = new Date();
        this.usuario = "Pepe Honguito";
        this.total = 0;
        this.productos = [];//deberia ser un array de ProductMapItem, ya se que los productos que lleguen aca tienen la cantidad final, no tengo que implementar nuevamente una estructura que me permita modificar la cantidad de x producto.
    }

    agregarProductMapItem(productMapItem) {
        this.productos.push(productMapItem);
        this.total += productMapItem.producto.precio * productMapItem.cantidad;
    }

}