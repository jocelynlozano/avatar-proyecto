window.addEventListener("load", function() {
	var wall = document.getElementById("wall");
	var nombre = document.getElementById("nombre");
	var cuadro = document.getElementById("cuadro")
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
		    swal("Bien!", "Que comienze el juego " + inputValue, "success"); 
			nombre.innerHTML = "Bienvenido " + inputValue;
			cuadro.style.display = 'block';
		});
		wall.style.display = 'none';

	});
});

