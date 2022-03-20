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
    include('js/agendaSection.js');
}else {
    include('../js/wow.min.js');
    include('../js/carrito.js');
    include('../js/producto.js');
    include('../js/agendaSection.js');
}

