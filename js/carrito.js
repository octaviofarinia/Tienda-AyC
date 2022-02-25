const PRODUCTOS_PRECIOS = [
    {nombre: "Diaria", precio : 750},
    {nombre: "Semanal Formal", precio : 850},
    {nombre: "Semanal Informal", precio : 800},
    {nombre: "Perpetua Formal", precio : 800},
    {nombre: "Perpetua Informal", precio : 650},
    {nombre: "Manicura", precio : 850},
    {nombre: "Emprendedor", precio : 950}
]

class Producto {

    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }

}

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

//creacion de los productos
let productosEnVenta = [];

for (let i = 0; i < PRODUCTOS_PRECIOS.length; i++) {
    let productoN = new Producto(PRODUCTOS_PRECIOS[i].nombre, "descripcion n°"+i, PRODUCTOS_PRECIOS[i].precio);
    productosEnVenta.push(productoN);
}

function buscarPorNombre(nombre) {
    return productosEnVenta.find((producto) => producto.nombre.toUpperCase() === nombre.toUpperCase());
}

//menu interactivo con prompt
function menu() {

    //lo creo aca para que cada vez que toque el boton del carrito se cree uno nuevo y poder testear la funcionalidad sin necesidad de recargar la pagina xd.
    let carrito = new Carrito();

    alert("¡BIENVENIDO A LA TIENDA AyC!")

    let stringProductosDisponibles = "ESTOS SON LOS PRODUCTOS DISPONIBLES:\n";

    for (let i = 0; i < productosEnVenta.length; i++) {
        stringProductosDisponibles += "\n" + productosEnVenta[i].nombre + " --> $" + productosEnVenta[i].precio;
    }
    
    stringProductosDisponibles += "\n\n(PARA SALIR INGRESE 'EXIT')";
    stringProductosDisponibles += "\nIngrese el nombre del producto para añadirlo al carrito:";

    while (true) {
        
        let nombreProductoIngresado = prompt(stringProductosDisponibles);

        if (nombreProductoIngresado.toUpperCase() == "EXIT") {
            break;
        }

        let productoIngresado = buscarPorNombre(nombreProductoIngresado);
        if (productoIngresado == null) {
            alert("ERROR, Ingrese un nombre valido:");
            continue;
        }

        //agregar el producto ingresado al carrito
        carrito.agregarProducto(productoIngresado);

        let opt = prompt("Quiere seguir agregando productos al carrito? (SI/NO)");
        while (opt.toUpperCase() != "SI" && opt.toUpperCase() != "NO") {
            opt = prompt("Quiere seguir agregando productos al carrito? (SI/NO)");
        }

        if(opt.toUpperCase() == "NO"){
            break;
        }
    }

    alert("¡GRACIAS POR SU COMPRA!");
    if(carrito.productos.length > 0){
        let stringEstadoFinalCarrito = "SU CARRITO ES EL SIGUIENTE:";
        for (let i = 0; i < carrito.productos.length; i++) {
            stringEstadoFinalCarrito += "\n" + carrito.productos[i].nombre + " --> $" + carrito.productos[i].precio;
        }
        stringEstadoFinalCarrito += "\nTOTAL: $"+carrito.calcularTotal();
        alert(stringEstadoFinalCarrito);
    }
}