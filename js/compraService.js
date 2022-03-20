//quiero que este codigo se ejecute cuando se terminen de cargar los productos de agendasSection/cuadernosSection o especialesSection segun corresponda.

let botonesComprar = document.querySelectorAll(".card-body button");

botonesComprar.forEach(boton => {
    boton.addEventListener('click', event => {
        let nombreProducto = boton.previousElementSibling.value;

        Toastify({
            text: nombreProducto + " agregado/a al carrito!",
            duration: 2000,
            gravity: "bottom",
            close: true,
            style: {
                background: 'black'
            }    
        }).showToast();

        console.log("compro el producto: " + nombreProducto);

        let productoSeleccinado = buscarProductoEnVentaPorNombre(nombreProducto);

        cargarProductoEnCarrito(productoSeleccinado, true);
    })
});