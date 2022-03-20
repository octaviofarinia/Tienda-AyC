let productosCuadernosSection = [];

productosCuadernosSection.push( new Producto(
    "Liso",
    "Este cuaderno es ideal para expresar sobre el papel todas tus ideas en forma de dibujos, bocetos, palabras, etc.",
    1500,
    "cuadernos",
    "Liso"
));

productosCuadernosSection.push( new Producto(
    "Rayas",
    "Con este cuaderno podes tomar notas, apuntes y anotar todas tus ideas para que no se te olviden.",
    1400,
    "cuadernos",
    "Rayas"
));

productosCuadernosSection.push( new Producto(
    "Cuadros",
    "Con este cuaderno podes tomar notas, apuntes y anotar todas tus ideas para que no se te olviden.",
    1350,
    "cuadernos",
    "Cuadros"
));

productosCuadernosSection.push( new Producto(
    "Puntos",
    "Este cuaderno es ideal para implementar tu propia Bullet Journal ya que cada hoja cuenta con una grilla de puntos.",
    1450,
    "cuadernos",
    "Puntos"
));

productosCuadernosSection.push( new Producto(
    "Liso con Frases",
    "Este cuaderno es ideal para expresar sobre el papel todas tus ideas en forma de dibujos, bocetos, palabras, etc.",
    1550,
    "cuadernos",
    "Liso_Con_Frases"
));

productosCuadernosSection.push( new Producto(
    "Rayas con Frases",
    "Con este cuaderno podes tomar notas, apuntes y anotar todas tus ideas para que no se te olviden.",
    1450,
    "cuadernos",
    "Rayas_Con_Frases"
));

productosCuadernosSection.push( new Producto(
    "Cuadros con Frases",
    "Con este cuaderno podes tomar notas, apuntes y anotar todas tus ideas para que no se te olviden.",
    1400,
    "cuadernos",
    "Cuadros_Con_Frases"
));

productosCuadernosSection.push( new Producto(
    "Costura",
    "Este cuaderno te ayudara a diagramar y concretar con exactitud los patrones y moldes que tu cliente requiere.",
    1600,
    "cuadernos",
    "Costura"
));

productosCuadernosSection.forEach(producto => {
    productosEnVenta.push(producto);
});

let sectionCards = document.querySelector("#sectionCards");

for (let i = 0; i < productosEnVenta.length; i++) {
    sectionCards.appendChild(crearCardProducto(productosEnVenta[i]));
}
