function reloj() {
    time = new Date();
    horas = time.getHours();
    minutos = time.getMinutes();
    segundos = time.getSeconds();


    // Ángulos de rotación de las agujas
    anguloHoras = 360 * (horas % 12) / 12;
    anguloMinutos = 360 * minutos / 60
    anguloSegundos = 360 * segundos / 60

    // style.transform = "rotate(""deg)"; para la rotación de las agujas.
    document.getElementById("horas").style.transform = "rotate(" + anguloHoras + "deg)";
    document.getElementById("minutos").style.transform = "rotate(" + anguloMinutos + "deg)";
    document.getElementById("segundos").style.transform = "rotate(" + anguloSegundos + "deg)";

    // Evitar números individuales
    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    // Añade al parrafo el resultado de las horas, minutos y segundos
    document.getElementById("horaDigital").innerHTML = horas + ":" + minutos + ":" + segundos;

}

// Llama a la función reloj cada 1 segundo
setInterval(reloj, 1);
