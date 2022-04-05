function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}

if(window.location.href.endsWith('index.html')){
    include('js/wow.min.js');
    include('js/sweetalert.min.js');
    include('js/ticket.js');
    include('js/carrito.js');
    include('js/producto.js');
}else {
    include('../js/wow.min.js');
    include('../js/sweetalert.min.js');
    include('../js/ticket.js');
    include('../js/carrito.js');
    include('../js/producto.js');
}

if (window.location.href.endsWith('agendas.html') || window.location.href.endsWith('cuadernos.html') || window.location.href.endsWith('especiales.html')) {
    include('../js/productSectionLoader.js');
}