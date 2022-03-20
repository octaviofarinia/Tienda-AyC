let productosEspecialesSection = [];

productosEspecialesSection.push( new Producto(
    "Pediatrico",
    "Acompaña el crecimiento de tu hijo registrando cada dato referido a su salud y desarrollo.",
    1500,
    "especiales",
    "Pediatrico"
));

productosEspecialesSection.push( new Producto(
    "Recetas",
    "Este es un regalo ideal para los apasionados de la cocina.",
    1400,
    "especiales",
    "Recetas"
));

productosEspecialesSection.push( new Producto(
    "Viajes",
    "Cuaderno para aventureros inquietos que buscan descubrir nuevos horizontes y redescubrir los conocidos.",
    1650,
    "especiales",
    "Viajes"
));

productosEspecialesSection.push( new Producto(
    "Dibujo",
    "Los amantes del lápiz y el papel podrán plasmar aquí toda su creatividad.",
    1600,
    "especiales",
    "Dibujo"
));

productosEspecialesSection.push( new Producto(
    "Mandalas",
    "Relajantes mandalas para colorear harán mas apacibles tus momentos de ocio.",
    1550,
    "especiales",
    "Mandalas"
));

productosEspecialesSection.forEach(producto => {
    productosEnVenta.push(producto);
});

let sectionCards = document.querySelector("#sectionCards");

for (let i = 0; i < productosEnVenta.length; i++) {
    sectionCards.appendChild(crearCardProducto(productosEnVenta[i]));
}
