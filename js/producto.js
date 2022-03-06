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

let agendaDiaria = new Producto(
    "Diaria",
    "Esta agenda es la más elegida en nuestros 10 años de trayectoria. Ideal para cualquier actividad que realices, profesional, recreativa o personal.",
    1200,
    "agendas",
    "Diaria"
);

let agendaSemanalFormal = new Producto(
    "Semanal Formal",
    "Ideal para gestionar los turnos de tu consultorio, tu estudio o cualquier actividad que requiera una planificación semanal con horarios.",
    1000,
    "agendas",
    "Semanal_formal"
);

productosEnVenta.push(agendaDiaria);
productosEnVenta.push(agendaSemanalFormal);