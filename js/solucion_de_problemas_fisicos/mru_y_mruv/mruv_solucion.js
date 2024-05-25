const btn_solucion_mruv_calculo = document.getElementById('solucion_mruv_calculo');

const checkBox_Vi_Vf_Distancia_Tiempo_Aceleracion = [
    document.getElementById('velocidad_inicial_label_MRUV'),
    document.getElementById('velocidad_final_label_MRUV'),
    document.getElementById('distancia_label_MRUV'), 
    document.getElementById('tiempo_label_MRUV'), 
    document.getElementById('aceleracion_label_MRUV')
];

const identificador = [
    {index: 0, magnitudDeseada: 'Velocidad inicial', HTMLID: 'Velocidad_inicial_valor'},
    {index: 1, magnitudDeseada: 'Velocidad final', HTMLID: 'Velocidad_final_valor'},
    {index: 2, magnitudDeseada: 'Distancia', HTMLID: 'distancia_valor_mruv'},
    {index: 3, magnitudDeseada: 'Tiempo', HTMLID: 'tiempo_valor_mruv'},
    {index: 4, magnitudDeseada: 'Aceleracion', HTMLID: 'aceleracion_valor_mruv'},
];

const significado_de_magnitudes = [
    {
        magnitud: 'Velocidad inicial',
        abreviaciones_posibles: ['m/s', 'k/h'],
        significado: ['metros/segundos', 'kilometros/horas']
    },
    {
        magnitud: 'Velocidad final',
        abreviaciones_posibles: ['m/s', 'k/h'],
        significado: ['metros/segundos', 'kilometros/horas']
    },
    {
        magnitud: 'Distancia',
        abreviaciones_posibles: ['m', 'k'],
        significado: ['metros', 'kilometros']
    },
    {
        magnitud: 'Tiempo',
        abreviaciones_posibles: ['s', 'h'],
        significado: ['segundos', 'horas']
    },
    {
        magnitud: 'Aceleracion',
        abreviaciones_posibles: ['m/s', 'k/h'],
        significado: ['metros/segundos al cuadrado', 'kilometros/horas al cuadrado']
    },
]

let arreglo_De_Indices = [];
let informacion_del_problema_general = null;
let informacion_del_problema_general_length_3 = null;
let resultados_finales = [];
let contador_de_entradas = 0;

const arreglos_por_defecto = () => {
    arreglo_De_Indices = [];
    informacion_del_problema_general = null;
    informacion_del_problema_general_length_3 = null;
    resultados_finales = [];
    entradas_a_trabajar = [];
}

const handleClick = event => {
    
    let magnitudQuerida = event.currentTarget;
    let index = checkBox_Vi_Vf_Distancia_Tiempo_Aceleracion.indexOf(magnitudQuerida);
    let holder = false;
    let holder_2;

    
    if(arreglo_De_Indices.length) {
        for(let i = 0; i < arreglo_De_Indices.length; i++) {
            if(index === arreglo_De_Indices[i] && checkBox_Vi_Vf_Distancia_Tiempo_Aceleracion[index].style.color === 'red') {
                holder = true;
                holder_2 = checkBox_Vi_Vf_Distancia_Tiempo_Aceleracion[index];
                arreglo_De_Indices.splice(i, 1);
            }
        }
    }


    if (arreglo_De_Indices.length < 2 && holder === false) {
        arreglo_De_Indices.push(index);
        checkBox_Vi_Vf_Distancia_Tiempo_Aceleracion[index].style.color = 'red';
    } else if (arreglo_De_Indices.length === 2 && holder === false) {
        let elemento_a_borrar = arreglo_De_Indices[0];
        checkBox_Vi_Vf_Distancia_Tiempo_Aceleracion[elemento_a_borrar].addEventListener('click', handleClick);
        checkBox_Vi_Vf_Distancia_Tiempo_Aceleracion[elemento_a_borrar].style.color = 'black';
        arreglo_De_Indices[0] = arreglo_De_Indices[1];
        arreglo_De_Indices[1] = index;
        checkBox_Vi_Vf_Distancia_Tiempo_Aceleracion[index].style.color = 'red';
    }
    
    arreglo_De_Indices.length !== 0 ? esperar_Entradas(arreglo_De_Indices) : false;
    holder ? cambioDeColor(holder_2) : false;  
};

const cambioDeColor = label_a_cambiar => label_a_cambiar.style.color = 'black';

checkBox_Vi_Vf_Distancia_Tiempo_Aceleracion.forEach(magnitudQuerida => magnitudQuerida.addEventListener('click', handleClick));

const esperar_Entradas = arregloDeLosIndices => {

    let informacion_del_problema = [];
    let objeto_con_info_del_problema = null;
    let objeto_con_info_del_problema_length_3 = [];
    let entradas_a_trabajar = [];

    for(let int = 0; int < identificador.length; int++) {
        
        let objeto = identificador[int];
        if(arregloDeLosIndices.length === 1) {
            if(objeto.index === arregloDeLosIndices[0]) {
                informacion_del_problema.push(objeto.magnitudDeseada);
            } else {
                entradas_a_trabajar.push({entrada_del_input: document.getElementById(objeto.HTMLID), valor_a_recibir: objeto.magnitudDeseada});
            }
        } else if(arregloDeLosIndices.length === 2) {
            if(objeto.index === arregloDeLosIndices[0] || objeto.index === arregloDeLosIndices[1]) {
                informacion_del_problema.push(objeto.magnitudDeseada);
                console.log(informacion_del_problema)
            } else {
                entradas_a_trabajar.push({entrada_del_input: document.getElementById(objeto.HTMLID), valor_a_recibir: objeto.magnitudDeseada});
            }
        }
    }

    contador_de_entradas = entradas_a_trabajar.length

  

    if(entradas_a_trabajar.length === 4) { 

        for(const objeto of tipo_de_problema) {
            if(objeto.escenario === informacion_del_problema[0]) {
                objeto_con_info_del_problema = objeto
                break;
            }
        }

        informacion_del_problema_general = {
            datos_necesarios_para_formulas: [objeto_con_info_del_problema.formulas_Segun_Datos[0].datos_necesario, objeto_con_info_del_problema.formulas_Segun_Datos[1].datos_necesario, objeto_con_info_del_problema.formulas_Segun_Datos[2].datos_necesario, objeto_con_info_del_problema.formulas_Segun_Datos[3].datos_necesario],
            formulas_posibles: [objeto_con_info_del_problema.formulas_Segun_Datos[0].formula, objeto_con_info_del_problema.formulas_Segun_Datos[1].formula, objeto_con_info_del_problema.formulas_Segun_Datos[2].formula, objeto_con_info_del_problema.formulas_Segun_Datos[3].formula],
            inputs_esperados: [entradas_a_trabajar[0].entrada_del_input, entradas_a_trabajar[1].entrada_del_input, entradas_a_trabajar[2].entrada_del_input, entradas_a_trabajar[3].entrada_del_input],
            magnitud_que_recibe: [entradas_a_trabajar[0].valor_a_recibir, entradas_a_trabajar[1].valor_a_recibir, entradas_a_trabajar[2].valor_a_recibir, entradas_a_trabajar[3].valor_a_recibir],
            problema_a_resolver: objeto_con_info_del_problema.escenario
        };
    } else if(entradas_a_trabajar.length === 3) {

        let escenario_encontrado = informacion_del_problema[0] + ' y ' + informacion_del_problema[1];

        for(let i = 0; i < tipo_de_problema.length; i++) {

            if(escenario_encontrado.includes(tipo_de_problema[i].escenario)) {
                objeto_con_info_del_problema_length_3.push(tipo_de_problema[i]);
            }
        }

        informacion_del_problema_general_length_3 = {
            datos_necesarios_para_formulas: [ 
                {
                    datos_para_problema_a_resolver: informacion_del_problema[0],
                    datos: [
                        objeto_con_info_del_problema_length_3[0].formulas_Segun_Datos[0].datos_necesario,
                        objeto_con_info_del_problema_length_3[0].formulas_Segun_Datos[1].datos_necesario,
                        objeto_con_info_del_problema_length_3[0].formulas_Segun_Datos[2].datos_necesario,
                        objeto_con_info_del_problema_length_3[0].formulas_Segun_Datos[3].datos_necesario
                    ]
                },
                {
                    datos_para_problema_a_resolver: informacion_del_problema[1],
                    datos: [
                        objeto_con_info_del_problema_length_3[1].formulas_Segun_Datos[0].datos_necesario,
                        objeto_con_info_del_problema_length_3[1].formulas_Segun_Datos[1].datos_necesario,
                        objeto_con_info_del_problema_length_3[1].formulas_Segun_Datos[2].datos_necesario,
                        objeto_con_info_del_problema_length_3[1].formulas_Segun_Datos[3].datos_necesario
                    ]
                }
            ],
            formulas_posibles: [
                {
                    formulas_para: informacion_del_problema[0],
                    formula: [
                        objeto_con_info_del_problema_length_3[0].formulas_Segun_Datos[0].formula,
                        objeto_con_info_del_problema_length_3[0].formulas_Segun_Datos[1].formula,
                        objeto_con_info_del_problema_length_3[0].formulas_Segun_Datos[2].formula,
                        objeto_con_info_del_problema_length_3[0].formulas_Segun_Datos[3].formula
                    ]
                },
                {
                    formulas_para: informacion_del_problema[1],
                    formula: [
                        objeto_con_info_del_problema_length_3[1].formulas_Segun_Datos[0].formula,
                        objeto_con_info_del_problema_length_3[1].formulas_Segun_Datos[1].formula,
                        objeto_con_info_del_problema_length_3[1].formulas_Segun_Datos[2].formula,
                        objeto_con_info_del_problema_length_3[1].formulas_Segun_Datos[3].formula
                    ]
                }
            ],
            inputs_esperados: [entradas_a_trabajar[0].entrada_del_input, entradas_a_trabajar[1].entrada_del_input, entradas_a_trabajar[2].entrada_del_input],
            magnitud_que_recibe: [entradas_a_trabajar[0].valor_a_recibir, entradas_a_trabajar[1].valor_a_recibir, entradas_a_trabajar[2].valor_a_recibir],
            problemas_a_resolver: escenario_encontrado
        };

    }
};

btn_solucion_mruv_calculo.addEventListener('click', () => {
    let magnitud_ingresadas = [
        document.getElementById('magnitud_velocidad_inicial_valor_mruv').value,
        document.getElementById('magnitud_velocidad_final_valor_mruv').value,
        document.getElementById('magnitud_distancia_mruv').value,
        document.getElementById('magnitud_tiempo_mruv').value,
        document.getElementById('magnitud_aceleracion_mruv').value
    ];

    let magnitud_esperadas = [
        document.getElementById('magnitud_respuesta_velocidad_inicial').value,
        document.getElementById('magnitud_respuesta_velocidad_final').value,
        document.getElementById('magnitud_respuesta_distancia_mruv').value,
        document.getElementById('magnitud_respuesta_tiempo_mruv').value,
        document.getElementById('magnitud_respuesta_aceleracion').value
    ];
    
    if(informacion_del_problema_general !== null && contador_de_entradas === 4) {
        let datos_recibidos_definitivos = '';
        let pegado_con_chicle = '';
        let contador_de_palabras = 0;
        let formula_a_usar;
        let valores_a_usar = [];
        let magnitudes_ingresadas = [];
        let indice = arreglo_De_Indices[0];
        let magnitud_de_la_respuesta = {magnitud: informacion_del_problema_general.problema_a_resolver, unidad_esperada: magnitud_esperadas[indice]};

        
        for(let i = 0; i < informacion_del_problema_general.inputs_esperados.length; i++) {
            if(informacion_del_problema_general.inputs_esperados[i].value !== '') {
                valores_a_usar.push(parseFloat(informacion_del_problema_general.inputs_esperados[i].value));
                contador_de_palabras++;
                datos_recibidos_definitivos += contador_de_palabras !== 3 ? informacion_del_problema_general.magnitud_que_recibe[i] + ', ' : informacion_del_problema_general.magnitud_que_recibe[i];
            } 
        }

        let arreglo_de_indices_para_magnitudes = [];

        identificador.forEach(objeto => {
            objeto.magnitudDeseada === informacion_del_problema_general.magnitud_que_recibe[0] && document.getElementById(objeto.HTMLID).value !== '' ? arreglo_de_indices_para_magnitudes.push(objeto.index) : false;
            objeto.magnitudDeseada === informacion_del_problema_general.magnitud_que_recibe[1] && document.getElementById(objeto.HTMLID).value !== '' ? arreglo_de_indices_para_magnitudes.push(objeto.index) : false;
            objeto.magnitudDeseada === informacion_del_problema_general.magnitud_que_recibe[2] && document.getElementById(objeto.HTMLID).value !== '' ? arreglo_de_indices_para_magnitudes.push(objeto.index) : false;
            objeto.magnitudDeseada === informacion_del_problema_general.magnitud_que_recibe[3] && document.getElementById(objeto.HTMLID).value !== '' ? arreglo_de_indices_para_magnitudes.push(objeto.index) : false;
        });

        let indice_ingresado_1 = arreglo_de_indices_para_magnitudes[0], indice_ingresado_2 = arreglo_de_indices_para_magnitudes[1], indice_ingresado_3 = arreglo_de_indices_para_magnitudes[2];

        magnitudes_ingresadas = {
            magnitudes_ingresadas_combo: [magnitud_ingresadas[indice_ingresado_1], magnitud_ingresadas[indice_ingresado_2], magnitud_ingresadas[indice_ingresado_3]],
            magnitudes: [lista_de_conversiones_a_usar[indice_ingresado_1].tipo, lista_de_conversiones_a_usar[indice_ingresado_2].tipo, lista_de_conversiones_a_usar[indice_ingresado_3].tipo]
        };

        for(let i = 0; i < informacion_del_problema_general.datos_necesarios_para_formulas.length; i++) {
            let arreglo = informacion_del_problema_general.datos_necesarios_para_formulas[i];
            
            pegado_con_chicle += arreglo[0] + ', ' + arreglo[1] + ', ' + arreglo[2];
                
            if(pegado_con_chicle === datos_recibidos_definitivos) {
                formula_a_usar = informacion_del_problema_general.formulas_posibles[i];
                break;
            }

            pegado_con_chicle = '';
        }

        switch(magnitud_de_la_respuesta.magnitud) {
            case 'Velocidad inicial':

                let formula_vo_a_usar;
                if(magnitud_de_la_respuesta.unidad_esperada === 'k/h') {
                    for(let i = 0; i < magnitudes_ingresadas.magnitudes_ingresadas_combo.length; i++) {
                        if(!magnitud_de_la_respuesta.unidad_esperada.includes(magnitudes_ingresadas.magnitudes_ingresadas_combo[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(magnitudes_ingresadas.magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    formula_vo_a_usar = lista_de_conversiones_a_usar[j].formulas[0];
                                    let nuevo_valor = formula_vo_a_usar(valores_a_usar[i]);
                                    valores_a_usar.splice(i, 1, nuevo_valor);
                                }
                            }
                        }
                    }
                } else if(magnitud_de_la_respuesta.unidad_esperada === 'm/s') {
                    for(let i = 0; i < magnitudes_ingresadas.magnitudes_ingresadas_combo.length; i++) {
                        if(!magnitud_de_la_respuesta.unidad_esperada.includes(magnitudes_ingresadas.magnitudes_ingresadas_combo[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(magnitudes_ingresadas.magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    formula_vo_a_usar = lista_de_conversiones_a_usar[j].formulas[1];
                                    let nuevo_valor = formula_vo_a_usar(valores_a_usar[i]);
                                    valores_a_usar.splice(i, 1, nuevo_valor);
                                }
                            }
                        }
                    }
                }

                break;
            case 'Velocidad final':

                let formula_vf_a_usar;

                if(magnitud_de_la_respuesta.unidad_esperada === 'k/h') {
                    for(let i = 0; i < magnitudes_ingresadas.magnitudes_ingresadas_combo.length; i++) {
                        if(!magnitud_de_la_respuesta.unidad_esperada.includes(magnitudes_ingresadas.magnitudes_ingresadas_combo[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(magnitudes_ingresadas.magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    formula_vf_a_usar = lista_de_conversiones_a_usar[j].formulas[0];
                                    let nuevo_valor = formula_vo_a_usar(valores_a_usar[i]);
                                    valores_a_usar.splice(i, 1, nuevo_valor);
                                }
                            }
                        }
                    }
                } else if(magnitud_de_la_respuesta.unidad_esperada === 'm/s') {
                    for(let i = 0; i < magnitudes_ingresadas.magnitudes_ingresadas_combo.length; i++) {
                        if(!magnitud_de_la_respuesta.unidad_esperada.includes(magnitudes_ingresadas.magnitudes_ingresadas_combo[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(magnitudes_ingresadas.magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    formula_vf_a_usar = lista_de_conversiones_a_usar[j].formulas[1];
                                    let nuevo_valor = formula_vo_a_usar(valores_a_usar[i]);
                                    valores_a_usar.splice(i, 1, nuevo_valor);
                                }
                            }
                        }
                    }
                }


                break;
            case 'Distancia':

                let formula_x_a_usar;

                if(magnitud_de_la_respuesta.unidad_esperada === 'k') {
                    for(let i = 0; i < magnitudes_ingresadas.magnitudes_ingresadas_combo.length; i++) {
                        if(info_de_conversion_x.tipo_de_magnitudes[i] !== 'h' && info_de_conversion_x.tipo_de_magnitudes[i] !== 's') {
                            if(!magnitud_de_la_respuesta.unidad_esperada.includes(magnitudes_ingresadas.magnitudes_ingresadas_combo[i])) {
                                for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                    if(magnitudes_ingresadas.magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                        formula_x_a_usar = lista_de_conversiones_a_usar[j].formulas[0];
                                        let nuevo_valor = formula_vo_a_usar(valores_a_usar[i]);
                                        valores_a_usar.splice(i, 1, nuevo_valor);
                                    }
                                }
                            }
                        }
                    }
                } else if(magnitud_de_la_respuesta.unidad_esperada === 'm') {
                    for(let i = 0; i < magnitudes_ingresadas.magnitudes_ingresadas_combo.length; i++) {
                        if(info_de_conversion_x.tipo_de_magnitudes[i] !== 'h' && info_de_conversion_x.tipo_de_magnitudes[i] !== 's') {
                            if(!magnitud_de_la_respuesta.unidad_esperada.includes(magnitudes_ingresadas.magnitudes_ingresadas_combo[i])) {
                                for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                    if(magnitudes_ingresadas.magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                        formula_x_a_usar = lista_de_conversiones_a_usar[j].formulas[1];
                                        let nuevo_valor = formula_vo_a_usar(valores_a_usar[i]);
                                        valores_a_usar.splice(i, 1, nuevo_valor);
                                    }
                                }
                            }   
                        }
                    }
                }

                break;
            case 'Tiempo':
                
                let formula_t_a_usar;

                if(magnitud_de_la_respuesta.unidad_esperada === 'h') {
                    for(let i = 0; i < magnitudes_ingresadas.magnitudes_ingresadas_combo.length; i++) {
                        if(!magnitud_de_la_respuesta.unidad_esperada.includes(magnitudes_ingresadas.magnitudes_ingresadas_combo[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(magnitudes_ingresadas.magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    formula_t_a_usar = lista_de_conversiones_a_usar[j].formulas[0];
                                    let nuevo_valor = formula_vo_a_usar(valores_a_usar[i]);
                                    valores_a_usar.splice(i, 1, nuevo_valor);
                                }
                            }
                        }
                    }
                } else if(magnitud_de_la_respuesta.unidad_esperada === 's') {
                    for(let i = 0; i < magnitudes_ingresadas.magnitudes_ingresadas_combo.length; i++) {
                        if(!magnitud_de_la_respuesta.unidad_esperada.includes(magnitudes_ingresadas.magnitudes_ingresadas_combo[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(magnitudes_ingresadas.magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    formula_t_a_usar = lista_de_conversiones_a_usar[j].formulas[1];
                                    let nuevo_valor = formula_vo_a_usar(valores_a_usar[i]);
                                    valores_a_usar.splice(i, 1, nuevo_valor);
                                }
                            }
                        }
                    }
                }

                break;
            case 'Aceleracion':
                let formula_a_a_usar;

                if(magnitud_de_la_respuesta.unidad_esperada === 'k/h') {
                    for(let i = 0; i < magnitudes_ingresadas.magnitudes_ingresadas_combo.length; i++) {
                        if(!magnitud_de_la_respuesta.unidad_esperada.includes(magnitudes_ingresadas.magnitudes_ingresadas_combo[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(magnitudes_ingresadas.magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    formula_a_a_usar = lista_de_conversiones_a_usar[j].formulas[0];
                                    let nuevo_valor = formula_vo_a_usar(valores_a_usar[i]);
                                    valores_a_usar.splice(i, 1, nuevo_valor);
                                }
                            }
                        }
                    }
                } else if(magnitud_de_la_respuesta.unidad_esperada === 'm/s') {
                    for(let i = 0; i < magnitudes_ingresadas.magnitudes_ingresadas_combo.length; i++) {
                        if(!magnitud_de_la_respuesta.unidad_esperada.includes(magnitudes_ingresadas.magnitudes_ingresadas_combo[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(magnitudes_ingresadas.magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    formula_a_a_usar = lista_de_conversiones_a_usar[j].formulas[1];
                                    let nuevo_valor = formula_vo_a_usar(valores_a_usar[i]);
                                    valores_a_usar.splice(i, 1, nuevo_valor);
                                }
                            }
                        }
                    }
                }
                break;               
        }

        let resultado = formula_a_usar(valores_a_usar[0], valores_a_usar[1], valores_a_usar[2]);
        document.getElementById('respuesta_1_mruv').innerHTML = resultado + ' ' + magnitud_de_la_respuesta.unidad_esperada;

    } else if(informacion_del_problema_general_length_3 !== null && contador_de_entradas === 3) {

        let valores_a_usar = [];
        let magnitudes_a_trabajar = [];
        let magnitudes_esperadas = [];
        let datos_recibidos_definitivos = '';
        let contador_de_palabras = 0;
        let formula_a_usar = null;
        let segunda_formula_a_usar = null;
        let problema_a_resolver_encontrado = null;
        let unidad_a_usar_1 = '';
        let unidad_a_usar_2 = '';

        for(let u = 0; u < identificador.length; u++) {
            let object = identificador[u];
            let checker = document.getElementById(object.HTMLID).value;
            
            checker !== '' ? magnitudes_a_trabajar.push({magnitud_recibida: magnitud_ingresadas[u], magnitud: object.magnitudDeseada}) : magnitudes_esperadas.push({magnitud_esperada: magnitud_esperadas[u], magnitud: object.magnitudDeseada});
        }

        console.log(magnitudes_esperadas)


        for(let i = 0; i < informacion_del_problema_general_length_3.inputs_esperados.length; i++) {
            valores_a_usar.push(parseFloat(informacion_del_problema_general_length_3.inputs_esperados[i].value));
            contador_de_palabras++;
            datos_recibidos_definitivos += contador_de_palabras !== 3 ? informacion_del_problema_general_length_3.magnitud_que_recibe[i] + ', ' : informacion_del_problema_general_length_3.magnitud_que_recibe[i];
        }

        let arreglo_copia = [valores_a_usar[0], valores_a_usar[1], valores_a_usar[2]];
        let info_de_conversion_vo = null, info_de_conversion_vf = null, info_de_conversion_x = null, info_de_conversion_t = null, info_de_conversion_a = null;
        let magnitud_puras = [magnitudes_a_trabajar[0].magnitud_recibida, magnitudes_a_trabajar[1].magnitud_recibida, magnitudes_a_trabajar[2].magnitud_recibida];

        switch(magnitudes_esperadas[0].magnitud) {
            case 'Velocidad inicial':
                info_de_conversion_vo = {valores_ingresados: arreglo_copia, tipo_de_magnitudes: [magnitudes_a_trabajar[0].magnitud, magnitudes_a_trabajar[1].magnitud, magnitudes_a_trabajar[2].magnitud], magnitud_ingresada: magnitud_puras};
                let conversion_a_usar_vo = null;

                if(magnitudes_esperadas[0].magnitud_esperada === 'k/h') {
                    for(let i = 0; i < info_de_conversion_vo.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[0].magnitud_esperada.includes(info_de_conversion_vo.magnitud_ingresada[i])) {
                            
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_vo.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_vo = lista_de_conversiones_a_usar[j].formulas[0];
                                    info_de_conversion_x.magnitud_ingresada[i] = lista_de_conversiones_a_usar[j].abreviatura[0];
                                    unidad_a_usar_1 = 'km/h';
                                    let nuevoValor = conversion_a_usar_vo(info_de_conversion_vo.valores_ingresados[i]);
                                    info_de_conversion_vo.valores_ingresados.splice(i, 1, nuevoValor);
                                }

                            }
                        }
                    }
                } else if(magnitudes_esperadas[0].magnitud_esperada === 'm/s') {
                    for(let i = 0; i < info_de_conversion_vo.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[0].magnitud_esperada.includes(info_de_conversion_vo.magnitud_ingresada[i])) {
                            
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_vo.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_vo = lista_de_conversiones_a_usar[j].formulas[1];
                                    info_de_conversion_x.magnitud_ingresada[i] = lista_de_conversiones_a_usar[j].abreviatura[1];
                                    unidad_a_usar_1 = 'm/s';
                                    let nuevoValor = conversion_a_usar_vo(info_de_conversion_vo.valores_ingresados[i]);
                                    info_de_conversion_vo.valores_ingresados.splice(i, 1, nuevoValor);
                                }

                            }
                        }
                    }
                }

                break;
            case 'Velocidad final':
                info_de_conversion_vf = {valores_ingresados: arreglo_copia, tipo_de_magnitudes: [magnitudes_a_trabajar[0].magnitud, magnitudes_a_trabajar[1].magnitud, magnitudes_a_trabajar[2].magnitud], magnitud_ingresada: magnitud_puras};
                
                let conversion_a_usar_vf = null;

                if(magnitudes_esperadas[0].magnitud_esperada === 'k/h') {
                    for(let i = 0; i < info_de_conversion_vf.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[0].magnitud_esperada.includes(info_de_conversion_vf.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_vf.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_vf = lista_de_conversiones_a_usar[j].formulas[0];
                                    info_de_conversion_x.magnitud_ingresada[i] = lista_de_conversiones_a_usar[j].abreviatura[0];
                                    unidad_a_usar_1 = 'km/h';
                                    let nuevoValor = conversion_a_usar_vf(info_de_conversion_vf.valores_ingresados[i]);
                                    info_de_conversion_vf.valores_ingresados.splice(i, 1, nuevoValor);
                                }

                            }
                        }
                    }
                } else if(magnitudes_esperadas[0].magnitud_esperada === 'm/s') {
                    for(let i = 0; i < info_de_conversion_vf.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[0].magnitud_esperada.includes(info_de_conversion_vf.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_vf.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_vf = lista_de_conversiones_a_usar[j].formulas[1];
                                    info_de_conversion_x.magnitud_ingresada[i] = lista_de_conversiones_a_usar[j].abreviatura[1];
                                    unidad_a_usar_1 = 'm/s';
                                    let nuevoValor = conversion_a_usar_vf(info_de_conversion_vf.valores_ingresados[i]);
                                    info_de_conversion_vf.valores_ingresados.splice(i, 1, nuevoValor);
                                }

                            }
                        }
                    }
                }
                
                break;
            case 'Distancia':
                info_de_conversion_x = {valores_ingresados: arreglo_copia, tipo_de_magnitudes: [magnitudes_a_trabajar[0].magnitud, magnitudes_a_trabajar[1].magnitud, magnitudes_a_trabajar[2].magnitud], magnitud_ingresada: magnitud_puras};
                
                let conversion_a_usar_x = null;

                if(magnitudes_esperadas[0].magnitud_esperada === 'k') {
                    for(let i = 0; i < info_de_conversion_x.magnitud_ingresada.length; i++) {
                        if(info_de_conversion_x.tipo_de_magnitudes[i] !== 'h' && info_de_conversion_x.tipo_de_magnitudes[i] !== 's') {
                            if(!info_de_conversion_x.magnitud_ingresada[i].includes(magnitudes_esperadas[0].magnitud_esperada)) {
                                for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                    if(info_de_conversion_x.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                        conversion_a_usar_x = lista_de_conversiones_a_usar[j].formulas[0];
                                        info_de_conversion_x.magnitud_ingresada[i] = lista_de_conversiones_a_usar[j].abreviatura[0];
                                        unidad_a_usar_1 = 'k';
                                        let nuevoValor = conversion_a_usar_x(info_de_conversion_x.valores_ingresados[i]);
                                        info_de_conversion_x.valores_ingresados.splice(i, 1, nuevoValor);
                                    }
    
                                }
                            }
                        }
                    }
                } else if(magnitudes_esperadas[0].magnitud_esperada === 'm') {
                    for(let i = 0; i < info_de_conversion_x.magnitud_ingresada.length; i++) {

                        let cinturon_de_seguridad = info_de_conversion_x.magnitud_ingresada[i] !== 's'; 
                        let cinturon_de_seguridad_2 = info_de_conversion_x.magnitud_ingresada[i] !== 'h';

                        if(cinturon_de_seguridad && cinturon_de_seguridad_2) {
                            if(!info_de_conversion_x.magnitud_ingresada[i].includes(magnitudes_esperadas[0].magnitud_esperada)) {
                                for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                    if(info_de_conversion_x.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                        conversion_a_usar_x = lista_de_conversiones_a_usar[j].formulas[1];
                                        info_de_conversion_x.magnitud_ingresada[i] = lista_de_conversiones_a_usar[j].abreviatura[1];
                                        unidad_a_usar_1 = 'm';
                                        let nuevoValor = conversion_a_usar_x(info_de_conversion_x.valores_ingresados[i]);
                                        info_de_conversion_x.valores_ingresados.splice(i, 1, nuevoValor);
                                    }
    
                                }
                            }
                        }
                    }
                }
                
                break;
            case 'Tiempo':
                info_de_conversion_t = {valores_ingresados: arreglo_copia, tipo_de_magnitudes: [magnitudes_a_trabajar[0].magnitud, magnitudes_a_trabajar[1].magnitud, magnitudes_a_trabajar[2].magnitud], magnitud_ingresada: magnitud_puras};
                
                let conversion_a_usar_t = null;

                if(magnitudes_esperadas[0].magnitud_esperada === 'h') {
                    for(let i = 0; i < info_de_conversion_t.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[0].magnitud_esperada.includes(info_de_conversion_t.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_t.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_t = lista_de_conversiones_a_usar[j].formulas[0];
                                    info_de_conversion_x.magnitud_ingresada[i] = lista_de_conversiones_a_usar[j].abreviatura[0];
                                    unidad_a_usar_1 = 'h';
                                    let nuevoValor = conversion_a_usar_t(info_de_conversion_t.valores_ingresados[i]);
                                    info_de_conversion_t.valores_ingresados.splice(i, 1, nuevoValor);
                                }

                            }
                        }
                    }
                } else if(magnitudes_esperadas[0].magnitud_esperada === 's') {
                    for(let i = 0; i < info_de_conversion_t.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[0].magnitud_esperada.includes(info_de_conversion_t.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_t.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_t = lista_de_conversiones_a_usar[j].formulas[1];
                                    info_de_conversion_x.magnitud_ingresada[i] = lista_de_conversiones_a_usar[j].abreviatura[1];
                                    unidad_a_usar_1 = 's';
                                    let nuevoValor = conversion_a_usar_t(info_de_conversion_t.valores_ingresados[i]);
                                    info_de_conversion_t.valores_ingresados.splice(i, 1, nuevoValor);
                                }

                            }
                        }
                    }
                }
                
                break;
            case 'Aceleracion':
                info_de_conversion_a = {valores_ingresados: arreglo_copia, tipo_de_magnitudes: [magnitudes_a_trabajar[0].magnitud, magnitudes_a_trabajar[1].magnitud, magnitudes_a_trabajar[2].magnitud], magnitud_ingresada: magnitud_puras};

                let conversion_a_usar_a = null;

                if(magnitudes_esperadas[0].magnitud_esperada === 'm/s') {
                    for(let i = 0; i < info_de_conversion_a.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[0].magnitud_esperada.includes(info_de_conversion_a.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_a.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_a = lista_de_conversiones_a_usar[j].formulas[0];
                                    info_de_conversion_x.magnitud_ingresada[i] = 'k/h';
                                    unidad_a_usar_1 = 'km/h²';
                                    let nuevoValor = conversion_a_usar_a(info_de_conversion_a.valores_ingresados[i]);
                                    info_de_conversion_a.valores_ingresados.splice(i, 1, nuevoValor);
                                }

                            }
                        }
                    }
                } else if(magnitudes_esperadas[0].magnitud_esperada === 'k/h') {
                    for(let i = 0; i < info_de_conversion_a.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[0].magnitud_esperada.includes(info_de_conversion_a.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_a.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_a = lista_de_conversiones_a_usar[j].formulas[1];
                                    info_de_conversion_x.magnitud_ingresada[i] = 'm/s';
                                    unidad_a_usar_1 = 'km/h²';
                                    let nuevoValor = conversion_a_usar_a(info_de_conversion_a.valores_ingresados[i]);
                                    info_de_conversion_a.valores_ingresados.splice(i, 1, nuevoValor);
                                }

                            }
                        }
                    }
                }

                break;
        }

        let lista_de_info_de_conversiones = [info_de_conversion_vo, info_de_conversion_vf, info_de_conversion_x, info_de_conversion_t, info_de_conversion_a];

        for(let i = 0; i < lista_de_info_de_conversiones.length; i++) {
            let info = lista_de_info_de_conversiones[i];
            if(info !== null) {
                valores_a_usar = [info.valores_ingresados[0], info.valores_ingresados[1], info.valores_ingresados[2]];
                magnitud_puras = [info.magnitud_ingresada[0], info.magnitud_ingresada[1], info.magnitud_ingresada[2]]
                lista_de_info_de_conversiones.splice(i, 1);
            }
        }

        for(let i = 0; i < informacion_del_problema_general_length_3.datos_necesarios_para_formulas.length; i++) {
            let objeto = informacion_del_problema_general_length_3.datos_necesarios_para_formulas[i];
            
            for(let j = 0; j < objeto.datos.length; j++) {
                let comparador = objeto.datos[j][0] + ', ' + objeto.datos[j][1] + ', ' + objeto.datos[j][2];
                
                if(datos_recibidos_definitivos === comparador) {
                    problema_a_resolver_encontrado = objeto.datos_para_problema_a_resolver;
                    formula_a_usar = informacion_del_problema_general_length_3.formulas_posibles[i].formula[j];
                    break;
                }
            }

            if(formula_a_usar !== null) {
                break;
            }
        }


        let resultado = formula_a_usar(valores_a_usar[0], valores_a_usar[1], valores_a_usar[2]);
        resultados_finales.push(resultado);
        document.getElementById('respuesta_1_mruv').innerHTML = resultado + ' ' + magnitudes_esperadas[0].magnitud_esperada;

        for(let i = 0; i < identificador.length; i++) {
            if(problema_a_resolver_encontrado === identificador[i].magnitudDeseada) {
                valores_a_usar.splice(identificador[i].index, 0, resultado);
                informacion_del_problema_general_length_3.magnitud_que_recibe.splice(identificador[i].index, 0, problema_a_resolver_encontrado);
            }    
        }


        let combinaciones = [];

        for (let i = 0; i < informacion_del_problema_general_length_3.magnitud_que_recibe.length; i++) {
            for (let j = 0; j < informacion_del_problema_general_length_3.magnitud_que_recibe.length; j++) {
                if (j === i) continue;
                for (let k = 0; k < informacion_del_problema_general_length_3.magnitud_que_recibe.length; k++) {
                    if (k === i || k === j) continue;
                    combinaciones.push(informacion_del_problema_general_length_3.magnitud_que_recibe[i] + ', ' + informacion_del_problema_general_length_3.magnitud_que_recibe[j] + ', ' + informacion_del_problema_general_length_3.magnitud_que_recibe[k]);
                }
            }
        }

        let datos_a_usar = null;

        for(let i = 0; i < informacion_del_problema_general_length_3.datos_necesarios_para_formulas[1].datos.length; i++) {
            let pegado_con_chicle_2 = informacion_del_problema_general_length_3.datos_necesarios_para_formulas[1].datos[i][0] + ', ' + informacion_del_problema_general_length_3.datos_necesarios_para_formulas[1].datos[i][1] + ', ' +  informacion_del_problema_general_length_3.datos_necesarios_para_formulas[1].datos[i][2];
            
            for(let k = 0; k < combinaciones.length; k++) {
                if(pegado_con_chicle_2 === combinaciones[k]) {
                    datos_a_usar = pegado_con_chicle_2;
                    segunda_formula_a_usar = informacion_del_problema_general_length_3.formulas_posibles[1].formula[i];
                    break
                }
            }
            if (segunda_formula_a_usar !== null) break;
        }

        let indeces_para_segunda_respuesta = [];
        
        for(let i = 0; i < informacion_del_problema_general_length_3.magnitud_que_recibe.length; i++) {
            if(datos_a_usar.includes(informacion_del_problema_general_length_3.magnitud_que_recibe[i])) {
                indeces_para_segunda_respuesta.push(i);
            }
        }

        let indice_1 = indeces_para_segunda_respuesta[0], indice_2 = indeces_para_segunda_respuesta[1], indice_3 = indeces_para_segunda_respuesta[2];

        let segundo_arreglo_copia = [valores_a_usar[indice_1], valores_a_usar[indice_2], valores_a_usar[indice_3]];

        let ultimo_arreglo_a_trabajar = []

        switch(magnitudes_esperadas[1].magnitud) {
            case 'Velocidad inicial':
                
                info_de_conversion_vo = {valores_ingresados: segundo_arreglo_copia, tipo_de_magnitudes: [magnitudes_a_trabajar[0].magnitud, magnitudes_a_trabajar[1].magnitud, magnitudes_a_trabajar[2].magnitud], magnitud_ingresada: magnitud_puras};
                let conversion_a_usar_vo = null;

                if(magnitudes_esperadas[1].magnitud_esperada === 'k/h') {
                    for(let i = 0; i < info_de_conversion_vo.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[1].magnitud_esperada.includes(info_de_conversion_vo.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_vo.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_vo = lista_de_conversiones_a_usar[j].formulas[0];
                                    unidad_a_usar_2 = 'km/h';
                                    let nuevoValor = conversion_a_usar_vo(info_de_conversion_vo.valores_ingresados[i]);
                                    ultimo_arreglo_a_trabajar.push(nuevoValor);
                                }
                            }
                        } else {
                            ultimo_arreglo_a_trabajar.push(info_de_conversion_a.valores_ingresados[i]);
                            unidad_a_usar_2 = 'km/h';
                        }
                    }
                } else if(magnitudes_esperadas[1].magnitud_esperada === 'm/s') {
                    for(let i = 0; i < info_de_conversion_vo.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[1].magnitud_esperada.includes(info_de_conversion_vo.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_vo.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_vo = lista_de_conversiones_a_usar[j].formulas[1];
                                    unidad_a_usar_2 = 'm/s';
                                    let nuevoValor = conversion_a_usar_vo(info_de_conversion_vo.valores_ingresados[i]);
                                    ultimo_arreglo_a_trabajar.push(nuevoValor);
                                }
                            }
                        } else {
                            ultimo_arreglo_a_trabajar.push(info_de_conversion_a.valores_ingresados[i]);
                            unidad_a_usar_2 = 'm/s';
                        }
                    }
                }

                break;
            case 'Velocidad final':
                info_de_conversion_vf = {valores_ingresados: segundo_arreglo_copia, tipo_de_magnitudes: [magnitudes_a_trabajar[0].magnitud, magnitudes_a_trabajar[1].magnitud, magnitudes_a_trabajar[2].magnitud], magnitud_ingresada: magnitud_puras};


                let conversion_a_usar_vf = null;

                if(magnitudes_esperadas[1].magnitud_esperada === 'k/h') {
                    for(let i = 0; i < info_de_conversion_vf.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[1].magnitud_esperada.includes(info_de_conversion_vf.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_vf.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_vf = lista_de_conversiones_a_usar[j].formulas[0];
                                    unidad_a_usar_2 = 'km/h';
                                    let nuevoValor = conversion_a_usar_vf(info_de_conversion_vf.valores_ingresados[i]);
                                    ultimo_arreglo_a_trabajar.push(nuevoValor);
                                }
                            }
                        } else {
                            ultimo_arreglo_a_trabajar.push(conversion_a_usar_vf.valores_ingresados[i]);
                            unidad_a_usar_2 = 'km/h';
                        }
                    }
                } else if(magnitudes_esperadas[1].magnitud_esperada === 'm/s') {
                    for(let i = 0; i < info_de_conversion_vf.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[1].magnitud_esperada.includes(info_de_conversion_vf.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_vf.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_vf = lista_de_conversiones_a_usar[j].formulas[1];
                                    unidad_a_usar_2 = 'm/s';
                                    let nuevoValor = conversion_a_usar_vf(info_de_conversion_vf.valores_ingresados[i]);
                                    ultimo_arreglo_a_trabajar.push(nuevoValor);
                                }

                            }
                        } else {
                            ultimo_arreglo_a_trabajar.push(info_de_conversion_vf.valores_ingresados[i]);
                            unidad_a_usar_2 = 'm/s';
                        }
                    }
                }

                break;
            case 'Distancia':
                
                info_de_conversion_x = {valores_ingresados: segundo_arreglo_copia, tipo_de_magnitudes: [magnitudes_a_trabajar[0].magnitud, magnitudes_a_trabajar[1].magnitud, magnitudes_a_trabajar[2].magnitud], magnitud_ingresada: magnitud_puras};
                
                let conversion_a_usar_x = null;

                if(magnitudes_esperadas[1].magnitud_esperada === 'k') {
                    for(let i = 0; i < info_de_conversion_x.magnitud_ingresada.length; i++) {
                        if(info_de_conversion_x.tipo_de_magnitudes[i] !== 'h' && info_de_conversion_x.tipo_de_magnitudes[i] !== 's') {
                            if(!info_de_conversion_x.magnitud_ingresada[i].includes(magnitudes_esperadas[1].magnitud_esperada)) {
                                for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                    if(info_de_conversion_x.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                        conversion_a_usar_x = lista_de_conversiones_a_usar[j].formulas[0];
                                        unidad_a_usar_2 = 'k';
                                        let nuevoValor = conversion_a_usar_x(info_de_conversion_x.valores_ingresados[i]);
                                        ultimo_arreglo_a_trabajar.push(nuevoValor);
                                    }
    
                                }
                            } else {
                                ultimo_arreglo_a_trabajar.push(conversion_a_usar_x.valores_ingresados[i]);
                                unidad_a_usar_2 = 'k';
                            }
                        }
                    }
                } else if(magnitudes_esperadas[1].magnitud_esperada === 'm') {
                    for(let i = 0; i < info_de_conversion_x.magnitud_ingresada.length; i++) {
                        let cinturon_de_seguridad = info_de_conversion_x.magnitud_ingresada[i] !== 's' 
                        let cinturon_de_seguridad_2 = info_de_conversion_x.magnitud_ingresada[i] !== 'h'

                        if(cinturon_de_seguridad && cinturon_de_seguridad_2) {
                            if(!info_de_conversion_x.magnitud_ingresada[i].includes(magnitudes_esperadas[1].magnitud_esperada)) {
                                for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                    if(info_de_conversion_x.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                        conversion_a_usar_x = lista_de_conversiones_a_usar[j].formulas[1];
                                        unidad_a_usar_2 = 'm';
                                        let nuevoValor = conversion_a_usar_x(info_de_conversion_x.valores_ingresados[i]);
                                        ultimo_arreglo_a_trabajar.push(nuevoValor);
                                    }
                                }
                            } else {
                                ultimo_arreglo_a_trabajar.push(conversion_a_usar_x.valores_ingresados[i]);
                                unidad_a_usar_2 = 'm';
                            }
                        }
                    }
                }

                break;
            case 'Tiempo':

                info_de_conversion_t = {valores_ingresados: segundo_arreglo_copia, tipo_de_magnitudes: [magnitudes_a_trabajar[0].magnitud, magnitudes_a_trabajar[1].magnitud, magnitudes_a_trabajar[2].magnitud], magnitud_ingresada: magnitud_puras};
                
                let conversion_a_usar_t = null;

                if(magnitudes_esperadas[1].magnitud_esperada === 'h') {
                    for(let i = 0; i < info_de_conversion_t.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[1].magnitud_esperada.includes(info_de_conversion_t.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_t.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_t = lista_de_conversiones_a_usar[j].formulas[0];
                                    unidad_a_usar_2 = 'h';
                                    let nuevoValor = conversion_a_usar_t(info_de_conversion_t.valores_ingresados[i]);
                                    ultimo_arreglo_a_trabajar.push(nuevoValor);
                                }

                            }
                        } else {
                            ultimo_arreglo_a_trabajar.push(conversion_a_usar_t.valores_ingresados[i]);
                            unidad_a_usar_2 = 'h';
                        }
                    }
                } else if(magnitudes_esperadas[1].magnitud_esperada === 's') {
                    for(let i = 0; i < info_de_conversion_t.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[1].magnitud_esperada.includes(info_de_conversion_t.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_t.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_t = lista_de_conversiones_a_usar[j].formulas[1];
                                    unidad_a_usar_2 = 's';
                                    let nuevoValor = conversion_a_usar_t(info_de_conversion_t.valores_ingresados[i]);
                                    ultimo_arreglo_a_trabajar.push(nuevoValor);
                                }

                            }
                        } else {
                            ultimo_arreglo_a_trabajar.push(conversion_a_usar_t.valores_ingresados[i]);
                            unidad_a_usar_2 = 's';
                        }
                    }
                }

                break;
            case 'Aceleracion':

                info_de_conversion_a = {valores_ingresados: segundo_arreglo_copia, tipo_de_magnitudes: [magnitudes_a_trabajar[0].magnitud, magnitudes_a_trabajar[1].magnitud, magnitudes_a_trabajar[2].magnitud], magnitud_ingresada: magnitud_puras};

                let conversion_a_usar_a = null;

                if(magnitudes_esperadas[1].magnitud_esperada === 'k/h') {
                    for(let i = 0; i < info_de_conversion_a.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[1].magnitud_esperada.includes(info_de_conversion_a.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_a.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_a = lista_de_conversiones_a_usar[j].formulas[0];
                                    unidad_a_usar_2 = 'km/h²';
                                    let nuevoValor = conversion_a_usar_a(info_de_conversion_a.valores_ingresados[i]);
                                    ultimo_arreglo_a_trabajar.push(nuevoValor);
                                }

                            }
                        } else {
                            ultimo_arreglo_a_trabajar.push(info_de_conversion_a.valores_ingresados[i])
                            unidad_a_usar_2 = 'km/h²';
                        }
                    }
                } else if(magnitudes_esperadas[1].magnitud_esperada === 'm/s') {
                    for(let i = 0; i < info_de_conversion_a.magnitud_ingresada.length; i++) {
                        if(!magnitudes_esperadas[1].magnitud_esperada.includes(info_de_conversion_a.magnitud_ingresada[i])) {
                            for(let j = 0; j < lista_de_conversiones_a_usar.length; j++) {
                                if(info_de_conversion_a.tipo_de_magnitudes[i] === lista_de_conversiones_a_usar[j].tipo) {
                                    conversion_a_usar_a = lista_de_conversiones_a_usar[j].formulas[1];
                                    unidad_a_usar_2 = 'm/s²';
                                    let nuevoValor = conversion_a_usar_a(info_de_conversion_a.valores_ingresados[i]);
                                    ultimo_arreglo_a_trabajar.push(nuevoValor);
                                }

                            }
                        } else {
                            ultimo_arreglo_a_trabajar.push(info_de_conversion_a.valores_ingresados[i]);
                            unidad_a_usar_2 = 'm/s²';
                        }
                    }
                }

                break;
        }

        let ultimo_indice_1 = ultimo_arreglo_a_trabajar[0], ultimo_indice_2 = ultimo_arreglo_a_trabajar[1], ultimo_indice_3 = ultimo_arreglo_a_trabajar[2];

        
        let resultado_2 = segunda_formula_a_usar(ultimo_indice_1, ultimo_indice_2, ultimo_indice_3);
        document.getElementById('respuesta_2_mruv').innerHTML = resultado_2 + ' ' + unidad_a_usar_2;
    } else {
        alert('Por favor selecciona alguna magnitud que deseas obtener');
    }

    arreglos_por_defecto();
});