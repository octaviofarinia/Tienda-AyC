let sectionCards = document.querySelector("#sectionCards");

let nombreSection;

if (window.location.href.endsWith('agendas.html')) {
    nombreSection = "agendasSection";
} else if (window.location.href.endsWith('cuadernos.html')){
    nombreSection = "cuadernosSection";
} else if (window.location.href.endsWith('especiales.html')){
    nombreSection = "especialesSection";
}

const pedirProductosSection = async (nombreSection) => {
    const res = await fetch(`/js/data/${nombreSection}.json`);
    const data = await res.json();

    for (let i = 0; i < data.length; i++) {
        let productoInstance = new Producto(
            data[i].nombre,
            data[i].descripcion,
            data[i].precio,
            data[i].categoria,
            data[i].sourceFolder
        );
        productosEnVenta.push(productoInstance);
        sectionCards.appendChild(crearCardProducto(productosEnVenta[i]));
    }

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

            let productoSeleccinado = buscarProductoEnVentaPorNombre(nombreProducto);

            cargarProductoEnCarrito(productoSeleccinado, true);
        });
    });
}

pedirProductosSection(nombreSection);