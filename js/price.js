$(function(){
	/*Seleccionamos el elemento contactoBtn*/
	// ON esto es sintaxis de Jquery, siempre lo vamos a utilizar dentro de Jquery para suscribir evento, siempre.
	$('#contacto').on('show.bs.modal', function (e){//e=  por que  traigo el evento
		console.log('Se esta iniciando el modal');

		//Removemos la clase del color del boton , ya que tocamos el boton.
		//Seleccionamos el boton
		$('#contactoBtn').removeClass('btn-outline-success');

		//Agregamos la nueva clase al boton
		$('#contactoBtn').addClass('btn-primary');

		//Deshabilitamos el boton luego de haberlo pulsado
		$('#contactoBtn').prop('disabled' , true);
	});
	$('#contacto').on('shown.bs.modal', function (e){//e=  por que  traigo el evento
		console.log('El Modal se mostro correctamente');
	});

	$('#contacto').on('hide.bs.modal', function (e){//e=  por que  traigo el evento
		console.log('El Modal Contacto se esta ocultando');
	});

	$('#contacto').on('hidden.bs.modal', function (e){//e=  por que  traigo el evento
		console.log('El Modal Contacto se oculto correctamente');
		//Habilitamos el boton luego de haberlo pulsado
		$('#contactoBtn').prop('disabled' , false);
	});
});