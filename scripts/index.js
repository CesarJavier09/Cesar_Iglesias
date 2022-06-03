$(document).ready(function(){

    /**
     * Filtrado en el cuadro de busqueda
     * 
     * Al ingresar un valor en el cuadro de busqueda, este se almacena como una expresión
     * regular en la variable matcher.
     * Utilizando la función .not(function) y .hide() se ocultan los elementos que no coincidan 
     * total o parcialmente con los parametros de filtrado.
     * Para el filtrado se utiliza:
     * .info-titulo: nombre de la tienda
     * .tag: categorias asignadas a la tienda
     */

    $("#busqueda").on('input',function(){
        var matcher = new RegExp($(this).val(), 'gi');
        $('.tienda, .oculto').show().not(function(){
            $(".tienda.extra").removeClass("oculto");
            $(".ver-mas").hide();
            return matcher.test($(this).find('.info-titulo, .tag').text())
            }).hide();
        if($("#busqueda").val() === ''){
            $(".ver-mas").show();
            $(".tienda.extra").addClass("oculto").css("display", "none");
        }
    })

    /**
     * Opción "Ver más"
     * 
     * Las tiendas se muestran/ocultan utilizando las animaciones slideDown/slideUp.
     * El comportamiento de la función depende de si está o no asignada la clase "oculto".
     * Se añade/quita la clase oculto a las tiendas con toggleClass().
     * Se intercambia el texto "ver más/menos" según se haya mostrado las tiendas o no.
     * Se activa animación de flecha añadiendo/quitando la clase "rotar".
     */

    $(".ver-mas").click(function(){
        $(".tienda.extra").slideDown().toggleClass("oculto");
        $(".oculto").slideUp();
        $(".ver-mas img").toggleClass("rotar");
        $(".ver-mas p").text("Ver menos");
        $(".ver-mas p.menos").text("Ver más");
        $(".ver-mas p").toggleClass("menos");
    })

    /**
     * Limpia cuadro de busqueda al presionar el icono X.
     * Adicional habilita la opción "Ver más", desactivada durante el filtrado.
     * Activa opción Ver más.
     * Muestra tiendas.
     * Oculta tiendas extras en opción Ver más.
     */

    $("#close-icon").click(function(){
        $("#busqueda").val('');
        $(".ver-mas").show();
        $(".tienda").show();
        $(".tienda.extra").addClass("oculto").css("display", "none");
    })

    /**
     * Para pantallas mas pequeñas que 768px {celulares, tablets},
     * se muestra un placeholder mas corto.
     */

    if (window.matchMedia('(max-width: 768px)').matches){
        $("#busqueda").attr("placeholder", "Busca una tienda...");
    }else{
        $("#busqueda").attr("placeholder", "Busca una tienda o categoria");
    }
})

