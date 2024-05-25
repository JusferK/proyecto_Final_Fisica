let botonMruCalcular = document.getElementById('solucion_mru_calculo');

const calcularVelocidad = (distancia, tiempo) => distancia / tiempo;
const calcularTiempo = (distancia, velocidad) => distancia / velocidad;
const calcularDistancia = (velociad, tiempo) => velociad * tiempo;

const metrosAKilometros = metros => metros / 1000;
const kilometrosAMetros = kilometros => kilometros * 1000;
const segundosAHoras = segundos => segundos / 3600;
const horasASegundos = horas => horas * 3600;

const verdaderoFalsoCambioMagnitud = (datosDelProblema, magnitudEsperada) => {

    if(datosDelProblema.tipoDeRespuesta === 'velocidad') {

        if(datosDelProblema.magnitudIngresada !== magnitudEsperada) {
            switch(magnitudEsperada) {
                case 'k/h':
                    let nuevaDistanciaEnKm = metrosAKilometros(datosDelProblema.datoDistancia);
                    let nuevoTiempoEnH = segundosAHoras(datosDelProblema.datoTiempo);
                    datosDelProblema.datoDistancia = nuevaDistanciaEnKm;
                    datosDelProblema.datoTiempo = nuevoTiempoEnH;
                    break;
                case 'm/s':
                    let nuevaDistanciaEnM = kilometrosAMetros(datosDelProblema.datoDistancia);
                    let nuevoTiempoEnS = horasASegundos(datosDelProblema.datoTiempo);
                    datosDelProblema.datoDistancia = nuevaDistanciaEnM;
                    datosDelProblema.datoTiempo = nuevoTiempoEnS;
                    break;
            }   
        }
    } else if(datosDelProblema.tipoDeRespuesta === 'tiempo') {

        if(!datosDelProblema.magnitudIngresada.includes(magnitudEsperada)) {
            switch(magnitudEsperada) {
                case 'h':
                    let nuevaVelocidadEnKmxH = datosDelProblema.datoVelocidad * 3600 / 1000;
                    let nuevaMagnitudKm = 'k/h';
                    datosDelProblema.datoVelocidad = nuevaVelocidadEnKmxH;
                    datosDelProblema.magnitudIngresada = nuevaMagnitudKm;
                    break;
                case 's':
                    let nuevaVelocidadEnMxS = datosDelProblema.datoVelocidad * 1000 / 3600;
                    let nuevaMagnitudM = 'm/s';
                    datosDelProblema.datoVelocidad = nuevaVelocidadEnMxS;
                    datosDelProblema.magnitudIngresada = nuevaMagnitudM;
                    break;
            }
        }

        if(!datosDelProblema.magnitudIngresada.includes(datosDelProblema.magnitudMetrosIndependiente)) {
            switch(datosDelProblema.magnitudIngresada) {
                case 'k/h':
                    let nuevaDistanciaEnKm = metrosAKilometros(datosDelProblema.datoDistancia);
                    datosDelProblema.datoDistancia = nuevaDistanciaEnKm;
                    datosDelProblema.magnitudMetrosIndependiente = 'k';
                    break;
                case 'm/s':
                    let nuevaDistanciaEnM = kilometrosAMetros(datosDelProblema.datoDistancia);
                    datosDelProblema.datoDistancia = nuevaDistanciaEnM;
                    datosDelProblema.magnitudMetrosIndependiente = 'm';
                    break;
            }
        }

    } else if(datosDelProblema.tipoDeRespuesta === 'distancia') {
        if(!datosDelProblema.magnitudIngresada.includes(magnitudEsperada)) {
            switch(magnitudEsperada) {
                case 'k':
                    let nuevaVelocidadEnKmxH = datosDelProblema.datoVelocidad * 3600 / 1000;
                    let nuevaMagnitudKm = 'k/h';
                    datosDelProblema.datoVelocidad = nuevaVelocidadEnKmxH;
                    datosDelProblema.magnitudIngresada = nuevaMagnitudKm;
                    break;
                case 'm':
                    let nuevaVelocidadEnMxS = datosDelProblema.datoVelocidad * 1000 / 3600;
                    let nuevaMagnitudM = 'm/s';
                    datosDelProblema.datoVelocidad = nuevaVelocidadEnMxS;
                    datosDelProblema.magnitudIngresada = nuevaMagnitudM;
                    break;
            }
        }

        if(!datosDelProblema.magnitudIngresada.includes(datosDelProblema.magnitudTiempoIndependiente)) {
            switch(datosDelProblema.magnitudIngresada) {
                case 'k/h':
                    let nuevoTiempoEnHoras = segundosAHoras(datosDelProblema.datoTiempo);
                    datosDelProblema.datoTiempo = nuevoTiempoEnHoras;
                    datosDelProblema.magnitudTiempoIndependiente = 'h';
                    break;
                case 'm/s':
                    let nuevoTiempoEnSegundos = horasASegundos(datosDelProblema.datoTiempo);
                    datosDelProblema.datoTiempo = nuevoTiempoEnSegundos;
                    datosDelProblema.magnitudTiempoIndependiente = 's';
                    break;
            }
        }
    }

    return datosDelProblema;
};


botonMruCalcular.addEventListener('click', () => {
    let contadorDeFalsos = 0;

    let checkboxes_Velocidad_Tiempo_Distancia = [document.getElementById('velocidad_checkbox'), document.getElementById('tiempo_checkbox'), document.getElementById('distancia_checkbox')];
    
    let velocidad = document.getElementById('Velocidad_valor').value;
    let distancia = document.getElementById('Distancia_valor').value;
    let tiempo = document.getElementById('Tiempo_valor').value;

    let magnitudVelocidad = document.getElementById('magnitud_velocidad_valor').value;
    let magnitudDistancia = document.getElementById('magnitud_distancia_valor').value;
    let magnitudTiempo = document.getElementById('magnitud_tiempo_valor').value;

    let magnitudRespuestaVelocidad = document.getElementById('magnitud_respuesta_velocidad').value;
    let magnitudRespuestaTiempo = document.getElementById('magnitud_respuesta_tiempo').value;
    let magnitudRespuestaDistancia = document.getElementById('magnitud_respuesta_distancia').value;

    

    
    
    for(let i = 0; i < checkboxes_Velocidad_Tiempo_Distancia.length; i++) {
        if(!checkboxes_Velocidad_Tiempo_Distancia[i].checked) {
            contadorDeFalsos++;
        } else if(checkboxes_Velocidad_Tiempo_Distancia[i].checked) {
            switch (i) {
                case 0:
                    let datosDelProblemaVelocidad = {datoDistancia: distancia, datoTiempo: tiempo, magnitudIngresada: magnitudDistancia + '/' + magnitudTiempo, respuesta: null, tipoDeRespuesta: 'velocidad'};
                    distancia !== '' && tiempo !== '' ? datosDelProblemaVelocidad = verdaderoFalsoCambioMagnitud(datosDelProblemaVelocidad, magnitudRespuestaVelocidad) : alert('Ingrese datos para calcular la velocidad');
                    datosDelProblemaVelocidad.respuesta = calcularVelocidad(datosDelProblemaVelocidad.datoDistancia, datosDelProblemaVelocidad.datoTiempo);
                    let respuestaFinalVelocidad = datosDelProblemaVelocidad.respuesta + ' ' + magnitudRespuestaVelocidad;
                    document.getElementById('respuesta_mru').innerHTML = respuestaFinalVelocidad;
                    break;
                case 1:
                    let datosDelProblemaTiempo = {datoDistancia: distancia, datoVelocidad: velocidad, magnitudIngresada: magnitudVelocidad, respuesta: null, tipoDeRespuesta: 'tiempo', magnitudMetrosIndependiente: magnitudDistancia};
                    distancia !== '' && velocidad !== '' ? datosDelProblemaTiempo = verdaderoFalsoCambioMagnitud(datosDelProblemaTiempo, magnitudRespuestaTiempo) : alert('Ingrese datos para calcular la tiempo');
                    datosDelProblemaTiempo.respuesta = calcularTiempo(datosDelProblemaTiempo.datoDistancia, datosDelProblemaTiempo.datoVelocidad);
                    let respuestaFinalTiempo = datosDelProblemaTiempo.respuesta + ' ' + magnitudRespuestaTiempo;
                    document.getElementById('respuesta_mru').innerHTML = respuestaFinalTiempo;
                    break;
                case 2:
                    let datosDelProblemaDistancia = {datoVelocidad: velocidad, datoTiempo: tiempo, magnitudIngresada: magnitudVelocidad, respuesta: null, tipoDeRespuesta: 'distancia', magnitudTiempoIndependiente: magnitudTiempo}
                    velocidad !== '' && tiempo !== '' ? datosDelProblemaDistancia = verdaderoFalsoCambioMagnitud(datosDelProblemaDistancia, magnitudRespuestaDistancia) : alert('Ingrese datos para calcular la distancia');
                    datosDelProblemaDistancia.respuesta = calcularDistancia(datosDelProblemaDistancia.datoVelocidad, datosDelProblemaDistancia.datoTiempo);
                    let respuestaFinalDistancia = datosDelProblemaDistancia.respuesta + ' ' + magnitudRespuestaDistancia;
                    document.getElementById('respuesta_mru').innerHTML = respuestaFinalDistancia;
                    break;
            }
        }
    }

    if(contadorDeFalsos === 3) {
        alert('Por favor marque una opcion');
    }
});