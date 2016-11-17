function validacion(){
	var nombre = document.getElementById('nombre').value;
	var correo = document.getElementById('correo').value;
	var telefono = document.getElementById('telefono').value;
	var asunto = document.getElementById('asunto').value;
	var mensaje = document.getElementById('mensaje').value;
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){

		alertify.error("Campo nombre incorrecto."); 
		return false;
	}

	else if(!expr.test(correo)){
		alertify.error("Campo correo incorrecto."); 
		return false;
	} 

	else if(asunto == null || asunto.length == 0 || /^\s+$/.test(asunto)){
		alertify.error("Campo asunto incorrecto."); 
		return false;
	}

	else if(mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje)){
		alertify.error("Campo mensaje incorrecto."); 
	}
	return true;
};	