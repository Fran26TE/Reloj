function reloj() {
	time = new Date();
	horas = time.getHours();
	minutos = time.getMinutes();
	segundos = time.getSeconds();
    
    if (horas >= 12) {
        // 12 posiciones de aguja, 360 grados de giro
     	porcentajeHoras = horas / 12 * 360;
    } else {
        porcentajeHoras = horas / 24 * 360;
    }

    // 30 son los grados entre cada hora
    porcentajeHoras += minutos / 60 * 30;

    // la rotación de los minutos es de 360 grados
    porcentajeMinutos = minutos / 60 * 360;

    // la rotación de los segundos es de 360 grados
    porcentajeSegundos = segundos / 60 * 360;

    // style.transform = "rotate(""deg)"; para la rotación de las agujas.
    document.getElementById("horas").style.transform = "rotate("+ porcentajeHoras +"deg)";
    document.getElementById("minutos").style.transform = "rotate("+ porcentajeMinutos +"deg)";
    document.getElementById("segundos").style.transform = "rotate("+ porcentajeSegundos +"deg)";

    // Añade al parrafo el resultado de las horas, minutos y segundos
    document.getElementById("horaDigital").innerHTML = horas + ":" + minutos + ":" + segundos; 
 
}

// Llama a la función reloj cada 1 segundo
setInterval(reloj, 1000);