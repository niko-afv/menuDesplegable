$(document).ready(function(){
    var ul = $("#lista_select");    //Guardamos al elemento <ul> dentro de una variable

    function ocultar_lista(){       //Funciona que oculta la lista
        ul.hide();
    }

    ocultar_lista();                //Se llama a la funcion de ocultar la lista

    $(document).bind('click', function(event) {     //Cuando se haga click en algun elemento del DOM....
        if( $(event.target).parents().andSelf().hasClass('n1') ) return;    //Si la clase del elemento es "n1" no se hace nada
        ocultar_lista();                //Si no es 'n1' entonces la la lista se oculta otra vez
    });

    $("#n1").click(function(){  
        ul.toggle();    //Ocultar/Mostrar la lista cuando se haga click sobre el elemento
    });
});