function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}

if(window.location.href.endsWith('index.html')){
    include('js/wow.min.js');
    include('js/carrito.js');
    include('js/producto.js');
}else {
    include('../js/wow.min.js');
    include('../js/carrito.js');
    include('../js/producto.js');
}

if (window.location.href.endsWith('agendas.html')) {
    include('../js/agendasSection.js');
    include('../js/compraService.js');
} else if (window.location.href.endsWith('cuadernos.html')){
    include('../js/cuadernosSection.js');
    include('../js/compraService.js');
} else if (window.location.href.endsWith('especiales.html')){
    include('../js/especialesSection.js');
    include('../js/compraService.js');
}