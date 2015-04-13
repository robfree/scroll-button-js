/**
 * @author Roberto Serrano Diaz-Grande
 */
$(window).on('scroll', function(){
	var da = $(document).scrollTop();
	var ctrl = $('#arriba');
	
	console.log('Estoy en ' + da);
	// compruebo si muestro el boton
	if (da > 100 && ctrl.css('display') == 'none') {
		ctrl.fadeIn(500);
	};
	// compruebo si oculto el boton
    if(da < 100 && ctrl.css("display") == "block"){
        ctrl.fadeOut(500);
    };
});
$('#arriba').on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
});