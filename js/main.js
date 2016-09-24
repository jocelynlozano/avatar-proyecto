window.addEventListener("load", function() {
	var wall = document.getElementById("wall");
	var nombre = document.getElementById("nombre");
	var cuadro = document.getElementById("cuadro");
	var cuadro1 = document.getElementById("cuadro1");
	var	cuadro2 = document.getElementById("cuadro2");
	var vestido = document.getElementById("vestido")
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

			if (inputValue === false) 
				return false;      
			if (inputValue === "") { 
		    	swal.showInputError("Ups! Necesito saber tu nombre!");     
		    	return false   }      
		    swal("Bien!", "Hola " + inputValue, "success"); 
			nombre.innerHTML = "Bienvenido " + inputValue;
			cuadro.style.display = 'block';
		});
		wall.style.display = 'none';
	});

	cuadro1.addEventListener("dragstart", function(event){
		event.dataTransfer.setData("Text", event.target.id);
	});

	cuadro2.addEventListener("dragover", function(event){
			event.preventDefault();
	})
	cuadro2.addEventListener("drop", function(event){
		event.preventDefault();
		var imagen = event.dataTransfer.getData("text");
		event.target.appendChild(document.getElementById(imagen))
		});

});

// /* Events fired on the drag target */
// document.addEventListener("dragstart", function(event) {
//     event.dataTransfer.setData("Text", event.target.id);
// });

// document.addEventListener("drag", function(event) {
//     document.getElementById("demo").innerHTML = "The p element is being dragged";
// });

// /* Events fired on the drop target */
// document.addEventListener("dragover", function(event) {
//     event.preventDefault();
// });

// document.addEventListener("drop", function(event) {
//     event.preventDefault();
//     if ( event.target.className == "droptarget" ) {
//         var data = event.dataTransfer.getData("Text");
//         event.target.appendChild(document.getElementById(data));
//         document.getElementById("demo").innerHTML = "The p element was dropped";
//     }
// });