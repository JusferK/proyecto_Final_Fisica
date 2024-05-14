const listaLongitud = document.getElementById("longitud_opciones");
const listaLongitudDos = document.getElementById("longitud_opciones_2");
const botonCalcularLongitud = document.getElementById("btn_longitud_Calcular");

const listaMasa = document.getElementById("masa_opcion");
const listaMasaDos = document.getElementById("masa_opcion_2");
const botonCalcularMasa = document.getElementById("btn_masa_Calcular");

const listaTiempo = document.getElementById("tiempo_opcion");
const listaTiempoDos = document.getElementById("tiempo_opcion_2");
const botonTiempoDos = document.getElementById("btn_Tiempo_Calcular");

botonCalcularLongitud.addEventListener('click', () => {

    let valorInput1 = document.getElementById('valor_longitud').value;

    let longitudDeConvertir = listaLongitud.value;
    let longitudAConvertir = listaLongitudDos.value;
    let longitudUnido = longitudDeConvertir + ' a ' + longitudAConvertir;

    if(valorInput1 !== '') {
        for(const objeto of listaLongitudValores) {
            if(longitudUnido == objeto.valor) {
                let conversionHecha = objeto.metodo(valorInput1);
                console.log(conversionHecha);
            }
        }
    } else {
        alert('Ingrese un valor');
    }
});

botonCalcularMasa.addEventListener('click', () => {

    let valorInput1 = document.getElementById('valor_masa').value;

    let masaDeConvertir = listaMasa.value;
    let masaAConvertir = listaMasaDos.value;
    let masaUnido = masaDeConvertir + ' a ' + masaAConvertir;

    if(valorInput1 !== '') {
        for(const objeto of listaMasaValores) {
            if(masaUnido == objeto.valor) {
                let conversionHecha = objeto.metodo(valorInput1);
                console.log(conversionHecha);
            }
        }
    } else {
        alert('Ingrese un valor');
    }
});

botonTiempoDos.addEventListener('click', () => {

    let valorInput1 = document.getElementById('valor_tiempo').value;

    let tiempoDeConvertir = listaTiempo.value;
    let tiempoAConvertir = listaTiempoDos.value;
    let tiempoUnido = tiempoDeConvertir + ' a ' + tiempoAConvertir;

    if(valorInput1 !== '') {
        for(const objeto of listaTiempoValores) {
            if(tiempoUnido == objeto.valor) {
                let conversionHecha = objeto.metodo(valorInput1);
                console.log(conversionHecha);
            }
        }
    } else {
        alert('Ingrese un valor');
    }
});