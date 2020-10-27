//<!--script para tooltips y popovers-->
$(function () {
	//busca todos los elementos de tipo tooltip y le agrego la funcion
	$("[data-toggle='tooltip']").tooltip();
	//busca todos los elementos de tipo popovers y le agrego la funcion
	$("[data-toggle='popover']").popover();
	//Tiempo de transaccion del carousel
	$('.carousel').carousel({
		interval: 2000
	});
});