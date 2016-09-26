window.addEventListener("load", function() {
    var wall = document.getElementById("wall");
    var nombre = document.getElementById("nombre");
    var cuadro = document.getElementById("cuadro");
    var cuadro1 = document.getElementById("cuadro1");
    var cuadro2 = document.getElementById("cuadro2");
    var vestido = document.getElementById("vestido");
    var doll = document.getElementById("dragtarget");
    var ropa1 =document.getElementById("ropa1");
    cuadro.style.display = 'none'
    wall.addEventListener("click", function() {
        cuadro.style.display = 'none'; 
        swal({   
            title: "Bienvenido!",   
            text: "Cual es tu nombre?",   
            type: "input",   
            showCancelButton: true,   
            closeOnConfirm: false,  
            animation: "slide-from-top",   
            inputPlaceholder: "mi nombre es..." 
        }, 
        function(inputValue){ 
            var nombre = document.getElementById("nombre");
            if (inputValue === false) 
                return false;      
            if (inputValue === "") { 
                swal.showInputError("Ups! Necesito saber tu nombre!");     
                return false   }      
            swal("Bien!", "Que comienze el juego " + inputValue, "success"); 
            nombre.innerHTML = "Bienvenido " + inputValue;
            nombre.classList.add("colorsito");
            cuadro.style.display = 'block';
            location.href = "#abajo";
        });
        wall.style.display = 'none';
    });
    cuadro1.addEventListener("dragstart", function(event){
        event.dataTransfer.effecAllowed = 'move';
        event.dataTransfer.setData("Text", event.target.id);
    });
    cuadro2.addEventListener("dragover", function(event){
            event.preventDefault();
    })
    cuadro2.addEventListener("drop", function(event){
        event.preventDefault();
        var data= event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
        });
    vestido.addEventListener("dragstart", function(event){
        event.dataTransfer.setData("Text", event.target.id);
        ropa1.addEventListener("dragstart", function(event){
        event.dataTransfer.setData("Text", event.target.id);
    });
    
    doll.addEventListener("dragover", function(event){
            event.preventDefault();
    });
    doll.addEventListener("drop", function(event){
        event.preventDefault();
        var data= event.dataTransfer.getData("text");
        event.target.insertBefore(document.getElementById(data));
        });

    
    function carga(){
        posicion=0;
        vestido.addEventListener("mousedown",function(event){
        comienzoMovimiento(event, id);
        });

        vestido.addEventListener("mouseover",function(event){
        this.style.cursor='move'
        })
    }
    });

    // function evitaEventos(event){
    // // Funcion que evita que se ejecuten eventos adicionales
    // event.preventDefault();
    // } 
    // function comienzoMovimiento(event, id){
    // elMovimiento=document.getElementById("id");

    //     cursorComienzoX=event.clientX+window.scrollX;
    //     cursorComienzoY=event.clientY+window.scrollY;
       
    //     vestido.addEventListener("mousemove", enMovimiento, true);
    //     vestido.addEventListener("mouseup", finMovimiento, true);
   
    // elComienzoX=parseInt(elMovimiento.style.left);
    // elComienzoY=parseInt(elMovimiento.style.top);
    // // Actualizo el posicion del elemento
    // elMovimiento.style.zIndex=++posicion;

    // evitaEventos(event);
    // }
    // function enMovimiento(event){ 
    // var xActual, yActual;
    //     xActual=event.clientX+window.scrollX;
    //     yActual=event.clientY+window.scrollY;
   
    // elMovimiento.style.left=(elComienzoX+xActual-cursorComienzoX)+"px";
    // elMovimiento.style.top=(elComienzoY+yActual-cursorComienzoY)+"px";
 
    // evitaEventos(event);
    // }
    // function finMovimiento(event){
    //     vestido.removeEventListener("mousemove", enMovimiento, true);
    //     vestido.removeEventListener("mouseup", finMovimiento, true);
    // }   

});
    