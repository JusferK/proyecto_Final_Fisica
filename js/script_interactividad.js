


const btn_ir_a_conversiones = document.getElementById('btn_menu_conversiones');
const btn_ir_a_problemas_fisicos = document.getElementById('btn_menu_problemas_fisicos');
const btn_ir_a_info_estudiante = document.getElementById('btn_menu_info_estudiante');
const btn_ir_menu_principal = document.getElementById('menu_principal');
const ultimo_chance = null;

const lista_de_checkbox_mru_intera = [
    document.getElementById('velocidad_checkbox'),
    document.getElementById('tiempo_checkbox'),
    document.getElementById('distancia_checkbox')
];

const lista_de_entrada_mru_intera = [
    document.getElementById('datos_mru_velocidad'), 
    document.getElementById('datos_mru_tiempo'), 
    document.getElementById('datos_mru_distancia')
];

let lista_de_magnitudes_de_respuesta_mru_intera = [
    document.getElementById('respuesta_magnitudes_velocidad'),
    document.getElementById('respuesta_magnitudes_tiempo'),
    document.getElementById('respuesta_magnitudes_distancia')
];

document.addEventListener('DOMContentLoaded', () => {
    const lista_de_div_mayores = [
        document.getElementById('seccion_Conversiones'),
        document.getElementById('escoge_tu_problema_fisico'),
        document.getElementById('division_mru_y_mruv'),
        document.getElementById('seccion_mru'),
        document.getElementById('seccion_mruv'),
        document.getElementById('seccion_leyes_de_newton'),
        document.getElementById('informacion_del_estudiante')
    ];

    lista_de_div_mayores.forEach(element => {
        element.style.display = 'none';
    });
    btn_ir_menu_principal.style.display = 'none';

    lista_de_checkbox_mru_intera.forEach(elemento => elemento.checked = false);
});

btn_ir_a_conversiones.addEventListener('click', () => {
    document.getElementById('seccion_Conversiones').style.display = 'grid';
    btn_ir_menu_principal.style.display = 'grid';
    document.getElementById('pantalla_bienvenida').style.display = 'none';
});

btn_ir_menu_principal.addEventListener('click', () => {

    const lista_de_div_mayores = [
        document.getElementById('seccion_Conversiones'),
        document.getElementById('escoge_tu_problema_fisico'),
        document.getElementById('division_mru_y_mruv'),
        document.getElementById('seccion_mru'),
        document.getElementById('seccion_mruv'),
        document.getElementById('seccion_leyes_de_newton'),
        document.getElementById('informacion_del_estudiante')
    ];

    lista_de_div_mayores.forEach(element => {
        element.style.display === 'grid' ? element.style.display = 'none' : false;
    });


    document.getElementById('pantalla_bienvenida').style.display = 'grid';
    btn_ir_menu_principal.style.display = 'none';
});

btn_ir_a_problemas_fisicos.addEventListener('click', () => {
    document.getElementById('pantalla_bienvenida').style.display = 'none';
    document.getElementById('escoge_tu_problema_fisico').style.display = 'grid';
    btn_ir_menu_principal.style.display = 'grid';
});

btn_ir_a_info_estudiante.addEventListener('click', () => {
    document.getElementById('informacion_del_estudiante').style.display = 'grid';
    document.getElementById('pantalla_bienvenida').style.display = 'none';
    btn_ir_menu_principal.style.display = 'grid';
});

document.getElementById('mru_mruv').addEventListener('click', () => {
    document.getElementById('escoge_tu_problema_fisico').style.display = 'none';
    document.getElementById('division_mru_y_mruv').style.display = 'grid';
    btn_ir_menu_principal.style.display = 'none';
});

document.getElementById('btn_un_paso_atras_3').addEventListener('click', () => {
    document.getElementById('division_mru_y_mruv').style.display = 'none';
    document.getElementById('escoge_tu_problema_fisico').style.display = 'grid';
    btn_ir_menu_principal.style.display = 'grid';
});

document.getElementById('mru_seccion_def').addEventListener('click', () => {
    document.getElementById('seccion_mru').style.display = 'grid';
    document.getElementById('division_mru_y_mruv').style.display = 'none';
    document.getElementById('btn_un_paso_atras_3').style.display = 'none';
});

document.getElementById('btn_un_paso_atras_4').addEventListener('click', () => {
    document.getElementById('seccion_mru').style.display = 'none';
    document.getElementById('division_mru_y_mruv').style.display = 'grid';
    document.getElementById('btn_un_paso_atras_3').style.display = 'grid';
});

document.getElementById('mruv_seccion_def').addEventListener('click', () => {
    document.getElementById('division_mru_y_mruv').style.display = 'none';
    document.getElementById('seccion_mruv').style.display = 'grid';
    document.getElementById('btn_un_paso_atras_3').style.display = 'none';
});

document.getElementById('btn_un_paso_atras_1').addEventListener('click', () => {
    document.getElementById('seccion_mruv').style.display = 'none';
    document.getElementById('division_mru_y_mruv').style.display = 'grid';
    document.getElementById('btn_un_paso_atras_3').style.display = 'grid';
});

document.getElementById('newton').addEventListener('click', () => {
    document.getElementById('escoge_tu_problema_fisico').style.display = 'none';
    document.getElementById('btn_un_paso_atras_3').style.display = 'none';
    document.getElementById('seccion_leyes_de_newton').style.display = 'grid';
    document.getElementById('menu_principal').style.display = 'none';
});

document.getElementById('btn_un_paso_atras_5').addEventListener('click', () => {
    document.getElementById('seccion_leyes_de_newton').style.display = 'none';
    document.getElementById('escoge_tu_problema_fisico').style.display = 'grid'
    document.getElementById('menu_principal').style.display = 'grid';
});

document.getElementById('longitud_opciones').addEventListener('focusout', () => {
    if(document.getElementById('longitud_opciones').value === document.getElementById('longitud_opciones_2').value) {
        const randomNumber = () => Math.floor(Math.random() * 6);
        let valor = randomNumber();
        if(document.getElementById('longitud_opciones_2').children[valor].value !== document.getElementById('longitud_opciones').value) {
            document.getElementById('longitud_opciones_2').value = document.getElementById('longitud_opciones_2').children[valor].value;
        } else {
            valor = randomNumber();
            document.getElementById('longitud_opciones_2').value = document.getElementById('longitud_opciones_2').children[valor].value
        }
    }
});

document.getElementById('longitud_opciones_2').addEventListener('focusout', () => {
    if(document.getElementById('longitud_opciones_2').value === document.getElementById('longitud_opciones').value) {
        const randomNumber = () => Math.floor(Math.random() * 6);
        let valor = randomNumber();
        if(document.getElementById('longitud_opciones').children[valor].value !== document.getElementById('longitud_opciones').value) {
            document.getElementById('longitud_opciones').value = document.getElementById('longitud_opciones').children[valor].value;
        } else {
            valor = randomNumber();
            document.getElementById('longitud_opciones').value = document.getElementById('longitud_opciones').children[valor].value
        }
    }
});

document.getElementById('masa_opcion').addEventListener('focusout', () => {
    if(document.getElementById('masa_opcion').value === document.getElementById('masa_opcion_2').value) {
        const randomNumber = () => Math.floor(Math.random() * 4);
        let valor = randomNumber();
        if(document.getElementById('masa_opcion_2').children[valor].value !== document.getElementById('masa_opcion').value) {
            document.getElementById('masa_opcion_2').value = document.getElementById('masa_opcion_2').children[valor].value;
        } else {
            valor = randomNumber();
            document.getElementById('masa_opcion_2').value = document.getElementById('masa_opcion_2').children[valor].value
        }
    }
});

document.getElementById('masa_opcion_2').addEventListener('focusout', () => {
    if(document.getElementById('masa_opcion_2').value === document.getElementById('masa_opcion').value) {
        const randomNumber = () => Math.floor(Math.random() * 4);
        let valor = randomNumber();
        if(document.getElementById('masa_opcion').children[valor].value !== document.getElementById('masa_opcion_2').value) {
            document.getElementById('masa_opcion').value = document.getElementById('masa_opcion').children[valor].value;
        } else {
            valor = randomNumber();
            document.getElementById('masa_opcion').value = document.getElementById('masa_opcion').children[valor].value
        }
    }
});

document.getElementById('tiempo_opcion').addEventListener('focusout', () => {
    if(document.getElementById('tiempo_opcion').value === document.getElementById('tiempo_opcion_2').value) {
        const randomNumber = () => Math.floor(Math.random() * 5);
        let valor = randomNumber();
        if(document.getElementById('tiempo_opcion_2').children[valor].value !== document.getElementById('tiempo_opcion').value) {
            document.getElementById('tiempo_opcion_2').value = document.getElementById('tiempo_opcion_2').children[valor].value;
        } else {
            valor = randomNumber();
            document.getElementById('tiempo_opcion_2').value = document.getElementById('tiempo_opcion_2').children[valor].value
        }
    }
});

document.getElementById('tiempo_opcion_2').addEventListener('focusout', () => {
    if(document.getElementById('tiempo_opcion_2').value === document.getElementById('tiempo_opcion').value) {
        const randomNumber = () => Math.floor(Math.random() * 5);
        let valor = randomNumber();
        if(document.getElementById('tiempo_opcion').children[valor].value !== document.getElementById('tiempo_opcion_2').value) {
            document.getElementById('tiempo_opcion').value = document.getElementById('tiempo_opcion').children[valor].value;
        } else {
            valor = randomNumber();
            document.getElementById('tiempo_opcion').value = document.getElementById('tiempo_opcion').children[valor].value
        }
    }
});

lista_de_checkbox_mru_intera.forEach((elemento, indice) => elemento.addEventListener('change', () => {
    
    
    switch(indice) {
        case 0:
            for(let i = 0; i < lista_de_checkbox_mru_intera.length; i++) {
                if(i === 0) {
                    lista_de_entrada_mru_intera[i].style.display = 'none';
                    lista_de_magnitudes_de_respuesta_mru_intera[i].style.display = 'none';
                } else {
                    lista_de_entrada_mru_intera[i].style.display = 'grid';
                    lista_de_magnitudes_de_respuesta_mru_intera[i].style.display = 'grid';
                    lista_de_checkbox_mru_intera[i].checked = false;
                }
            }

            break;
        case 1:
            for(let i = 0; i < lista_de_checkbox_mru_intera.length; i++) {
                if(i === 1) {
                    lista_de_entrada_mru_intera[i].style.display = 'none';
                    lista_de_magnitudes_de_respuesta_mru_intera[i].style.display = 'none';
                } else {
                    lista_de_entrada_mru_intera[i].style.display = 'grid';
                    lista_de_magnitudes_de_respuesta_mru_intera[i].style.display = 'grid';
                    lista_de_checkbox_mru_intera[i].checked = false;
                }
            }
            
            break;
        case 2:
            for(let i = 0; i < lista_de_checkbox_mru_intera.length; i++) {
                if(i === 2) {
                    lista_de_entrada_mru_intera[i].style.display = 'none';
                    lista_de_magnitudes_de_respuesta_mru_intera[i].style.display = 'none';
                } else {
                    lista_de_entrada_mru_intera[i].style.display = 'grid';
                    lista_de_magnitudes_de_respuesta_mru_intera[i].style.display = 'grid';
                    lista_de_checkbox_mru_intera[i].checked = false;
                }
            }
            break;
    }
}));


let lista_de_magnitudes_mruv_respuesta = [
    document.getElementById('velocidad_inicial_label_MRUV'),
    document.getElementById('velocidad_final_label_MRUV'),
    document.getElementById('distancia_label_MRUV'),
    document.getElementById('tiempo_label_MRUV'),
    document.getElementById('aceleracion_label_MRUV'),
];

let lista_datos_mruv_todas_mag = [
    document.getElementById('datos_mruv_velocidad_inicial'),
    document.getElementById('datos_mruv_velocidad_final'),
    document.getElementById('datos_mruv_distancia'),
    document.getElementById('datos_mruv_tiempo'),
    document.getElementById('datos_mruv_aceleracion')
];

let lista_de_magnitudes_respuesta = [
    document.getElementById('respuesta_magnitudes_vo_mruv'),
    document.getElementById('respuesta_magnitudes_vf_mruv'),
    document.getElementById('respuesta_magnitudes_distancia_mruv'),
    document.getElementById('respuesta_magnitudes_tiempo_mruv'),
    document.getElementById('respuesta_magnitudes_aceleracion')
]

const verificacion_de_colores = () => {
    for(let i = 0; i < lista_de_magnitudes_mruv_respuesta.length; i++) {
        if(window.getComputedStyle(lista_de_magnitudes_mruv_respuesta[i]).color === 'rgb(0, 0, 0)') {
            lista_datos_mruv_todas_mag[i].style.display = 'grid';
            lista_de_magnitudes_respuesta[i].style.display = 'grid';
        }
    }
}

for(let i = 0; i < lista_de_magnitudes_mruv_respuesta.length; i++) {
    lista_de_magnitudes_mruv_respuesta[i].addEventListener('click', () => {
        verificacion_de_colores();
        if(window.getComputedStyle(lista_de_magnitudes_mruv_respuesta[i]).color === 'rgb(255, 0, 0)') {
            lista_datos_mruv_todas_mag[i].style.display = 'none';
            lista_de_magnitudes_respuesta[i].style.display = 'none';
        } else if(window.getComputedStyle(lista_de_magnitudes_mruv_respuesta[i]).color === 'rgb(0, 0, 0)') {
            lista_datos_mruv_todas_mag[i].style.display = 'grid';
            lista_de_magnitudes_respuesta[i].style.display = 'grid';
        }
    });
    
}