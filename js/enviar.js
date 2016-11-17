$(document).ready(function(){
	$("#formContacto").submit(function(e) {
		if(validacion()){
			$.ajax({
			type: 'post',
			url: 'contacto.php',
			data: $(this).serialize(),
			success: function(response){
				if (response == 'success') {
					alertify.success("Mensaje enviado con exito!!"); 
					$('#formContacto')[0].reset();
				}else{
					alertify.error("Error al enviar el mensaje!."); 
				}
			}
		});
		}
		return false;
	})
});