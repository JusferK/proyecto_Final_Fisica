let contador_externo = 0;
let input_independientes = [
    document.getElementById('masa_newton'),
    document.getElementById('coeficiente_newton'),
    document.getElementById('angulo_newton')
];



const div_donde_append_inputs = document.getElementById('contenedor_fuerzas'); // acceder a los inputs empezando desde el indice 1
const creador_input_para_fuerza = document.getElementById('cantidad_de_fuerzas');
const select_de_magnitud_a_obtener = document.getElementById('magnitud_respuesta_primera_ley_newton');
const calcular_magnitud = document.getElementById('btn_calcular_primera_ley');

const focus_handler = () => {
    let getter_de_valor = null;
    if(creador_input_para_fuerza.value !== '' && creador_input_para_fuerza.value >= 1 && creador_input_para_fuerza.value <= 5) {
        for(let i = 0; i < creador_input_para_fuerza.value; i++) {
            if(div_donde_append_inputs.childNodes.length <= 5) {
                let nuevo_div = document.createElement('div');
            
                let nuevo_input = document.createElement('input');
                nuevo_input.type = 'number';
                nuevo_input.id = 'nuevo_input_' + (contador_externo + 1);
                
                let nuevo_label = document.createElement('label');
                nuevo_label.htmlFor = 'nuevo_input_' + (contador_externo + 1);
                nuevo_label.textContent = 'fuerza ' + (contador_externo + 1) + ' ';
                
                let nuevo_select = document.createElement('select');
                nuevo_select.id = 'select_tipo_de_fuerza_' + (contador_externo + 1);
                
                let opcion_1 = document.createElement('option');
                opcion_1.value = 'peso';
                opcion_1.text = 'peso';
                nuevo_select.appendChild(opcion_1);
                
                let opcion_2 = document.createElement('option');
                opcion_2.value = 'normal';
                opcion_2.text = 'normal';
                nuevo_select.appendChild(opcion_2);
                
                let opcion_3 = document.createElement('option');
                opcion_3.value = 'Friccion cinetica';
                opcion_3.text = 'Friccion cinetica';
                nuevo_select.appendChild(opcion_3);

                let opcion_4 = document.createElement('option');
                opcion_4.value = 'Friccion estatica';
                opcion_4.text = 'Friccion estatica';
                nuevo_select.appendChild(opcion_4);
                
                let opcion_5 = document.createElement('option');
                opcion_5.value = 'fuerza aplicada';
                opcion_5.text = 'fuerza aplicada';
                nuevo_select.appendChild(opcion_5);
                
                nuevo_div.appendChild(nuevo_label);
                nuevo_div.appendChild(nuevo_input);
                nuevo_div.appendChild(nuevo_select);
                
                div_donde_append_inputs.appendChild(nuevo_div);
                contador_externo++;
                getter_de_valor = creador_input_para_fuerza.value;
            }
        } 
    }

    getter_de_valor !== null ? creador_input_para_fuerza.removeEventListener('focusout', focus_handler) : false;
}

creador_input_para_fuerza.addEventListener('focusout', focus_handler);


calcular_magnitud.addEventListener('click', () => {

    const informacion_ingresada = [];

    let magnitud_requerida = select_de_magnitud_a_obtener.value;

    for(let i = 0; i < div_donde_append_inputs.children.length; i++) {
        if(div_donde_append_inputs.children[i].children[1].value !== '') {

            informacion_ingresada.push({valor_ingresado: div_donde_append_inputs.children[i].children[1].value, tipo_de_magnitud: div_donde_append_inputs.children[i].children[2].value});
        }
    }
    
    for(let j = 0; j < input_independientes.length; j++) {
        if(input_independientes[j].value !== '') {
            switch(input_independientes[j].id) {
                case 'masa_newton':
                    informacion_ingresada.push({valor_ingresado: input_independientes[j].value, tipo_de_magnitud: 'masa'});
                    break;
                case 'coeficiente_newton':
                    informacion_ingresada.push({valor_ingresado: input_independientes[j].value, tipo_de_magnitud: 'Coeficiente de friccion ' + document.getElementById('tipo_de_coeficiente').value});
                    break;
                case 'angulo_newton':
                    informacion_ingresada.push({valor_ingresado: input_independientes[j].value, tipo_de_magnitud: 'angulo en el eje ' + document.getElementById('posicion_ejes').value});
                    break;
            }
        }
    }

    console.log(informacion_ingresada);

    if(magnitud_requerida !== 'El objeto esta en reposo o no') {
        let objeto_de_escenarios = null;

        for(let i = 0; i < lista_de_problemas.length; i++) magnitud_requerida === lista_de_problemas[i].escenario ? objeto_de_escenarios = lista_de_problemas[i] : false;

        console.log(objeto_de_escenarios);

        let datos_encontrados = [];

        for(let x = 0; x < objeto_de_escenarios.datos_necesitados.length; x++) {
            for(let y = 0; y < informacion_ingresada.length; y++) {


                console.log(' ')
                console.log(objeto_de_escenarios.datos_necesitados[x])
                console.log(informacion_ingresada[y].tipo_de_magnitud)
                console.log(objeto_de_escenarios.datos_necesitados[x] === informacion_ingresada[y].tipo_de_magnitud)
                console.log(' ')

                if(objeto_de_escenarios.datos_necesitados[x] === informacion_ingresada[y].tipo_de_magnitud) {
                    datos_encontrados.push(parseFloat(informacion_ingresada[y].valor_ingresado));
                }
            }        
        }

        let resultado = '';

        if(datos_encontrados.length === objeto_de_escenarios.formula_a_usar.length) {
            for(let y = 0; y < datos_encontrados.length; y++) {
                resultado += y !== (datos_encontrados.length - 1) ? datos_encontrados[y] + ', ' : datos_encontrados[y];
            }
        }

        console.log(resultado)
        let resultado_2 = eval('objeto_de_escenarios.formula_a_usar(' + resultado + ')');
        document.getElementById('respuesta_newton').innerHTML = resultado_2;

        console.log(datos_encontrados);
    } else {
        let objeto_de_escenarios = null;

        for(let i = 0; i < lista_de_problemas.length; i++) magnitud_requerida === lista_de_problemas[i].escenario ? objeto_de_escenarios = lista_de_problemas[i] : false;

        console.log(objeto_de_escenarios);

        let datos_encontrados = [];

        for(let x = 0; x < objeto_de_escenarios.datos_necesitados.length; x++) {
            for(let y = 0; y < informacion_ingresada.length; y++) {

                if(objeto_de_escenarios.datos_necesitados[x] === informacion_ingresada[y].tipo_de_magnitud) {
                    datos_encontrados.push(parseFloat(informacion_ingresada[y].valor_ingresado));
                }
            }        
        }


        
        let resultado = objeto_de_escenarios.formula_a_usar(datos_encontrados);
        document.getElementById('respuesta_newton').innerHTML = resultado;

        console.log(datos_encontrados);
    }
    
});