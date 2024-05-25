const formula_Aceleracion_1 = (vo, vf, t) => ((vf - vo) / t);
const formula_Aceleracion_2 = (vo, x, t) => (2 * (x - (vo * t))) / Math.pow(t, 2);
const formula_Aceleracion_3 = (vo, vf, x) => (Math.pow(vf, 2) - Math.pow(vo, 2)) / (2 * x);
const formula_Aceleracion_4 = (vf, x, t) => (2 * ((vf * t) - x)) / Math.pow(t, 2);

const formula_Distancia_1 = (vo, t, a) => (vo * t) + (0.5 * a * (Math.pow(t, 2)));
const formula_Distancia_2 = (vf, t, a) => (vf * t) - (0.5 * a * (Math.pow(t, 2)));
const formula_Distancia_3 = (vo, vf, t) => ((vo + vf) / 2) * t;
const formula_Distancia_4 = (vo, vf, a) => (Math.pow(vf, 2) - Math.pow(vo, 2)) / (2 * a);

const formula_Velocidad_Inicial_1 = (vf, t, a) => vf - (a * t);
const formula_Velocidad_Inicial_2 = (vf, x, a) => Math.sqrt(Math.pow(vf, 2) - (2 * a * x));
const formula_Velocidad_Inicial_3 = (vf, x, t) => (x -  (vf * t)) / (-1 * t);
const formula_Velocidad_Inicial_4 = (x, t, a) => (x / t) - (0.5 * a * t);

const formula_Velocidad_Final_1 = (vo, x, t) => (2 * (x / t)) - vo;
const formula_Velocidad_Final_2 = (vo, t, a) => vo + (a * t);
const formula_Velocidad_Final_3 = (vo, x, a) => Math.sqrt((Math.pow(vo, 2) + (2 * a * x)));
const formula_Velocidad_Final_4 = (x, t, a) => (x / t) + (0.5 * a * t);

const formula_Tiempo_1 = (vo, vf, a) => (vf - vo) / a;
const formula_Tiempo_2 = (vo, vf, x) => (2 * x) / (vo + vf);
const formula_Tiempo_3 = (vo, x, a) => ((-vo) + (Math.sqrt(Math.pow(vo, 2) - (4 * ((a / 2) * (-x)))))) / 2 * (a / 2);
const formula_Tiempo_4 = (vf, x, a) => ((vf) - (Math.sqrt(Math.pow(vf, 2) + (4 * ((a / 2) * (-x)))))) / 2 * (a / 2);

const conversion_MxS2_a_KmxH2 = aceleracion => (aceleracion * Math.pow(3600, 2)) / 1000;
const conversion_KmxH2_a_MxS2 = aceleracion => (aceleracion * 1000) / Math.pow(3600, 2);

const conversion_MxS_a_KmxH = velocidad => (velocidad * 3600) / 1000;
const conversion_KmxH_a_MxS = velocidad => (velocidad * 1000) / 3600;

const lista_de_conversiones_a_usar = [
    {
        tipo: 'Velocidad inicial',
        formulas: [conversion_MxS_a_KmxH, conversion_KmxH_a_MxS],
        abreviatura: ['km/h', 'm/s'],
    },
    {
        tipo: 'Velocidad final',
        formulas: [conversion_MxS_a_KmxH, conversion_KmxH_a_MxS],
        abreviatura: ['km/h', 'm/s']
    },
    {
        tipo: 'Distancia',
        formulas: [listaLongitudValores[2].metodo, listaLongitudValores[10].metodo],
        abreviatura: [listaLongitudValores[2].abreviatura, listaLongitudValores[10].abreviatura]
    },
    {
        tipo: 'Tiempo',
        formulas: [listaTiempoValores[1].metodo, listaTiempoValores[8].metodo],
        abreviatura: [listaTiempoValores[1].abreviatura, listaTiempoValores[8].abreviatura]
    },
    {
        tipo: 'Aceleracion',
        formulas: [conversion_MxS2_a_KmxH2, conversion_KmxH2_a_MxS2],
        abreviatura: ['m/s²', 'km/h²']
    }
];

const tipo_de_problema = [
    {
        escenario: 'Velocidad inicial',
        formulas_Segun_Datos: [
            {formula: formula_Velocidad_Inicial_1, datos_necesario:['Velocidad final', 'Tiempo', 'Aceleracion']}, 
            {formula: formula_Velocidad_Inicial_2, datos_necesario:['Velocidad final', 'Distancia', 'Aceleracion']},
            {formula: formula_Velocidad_Inicial_3, datos_necesario:['Velocidad final', 'Distancia', 'Tiempo']},
            {formula: formula_Velocidad_Inicial_4, datos_necesario:['Distancia', 'Tiempo', 'Aceleracion']}
        ]
    },
    {
        escenario: 'Velocidad final',
        formulas_Segun_Datos: [
            {formula: formula_Velocidad_Final_1, datos_necesario:['Velocidad inicial', 'Distancia', 'Tiempo']}, 
            {formula: formula_Velocidad_Final_2, datos_necesario:['Velocidad inicial', 'Tiempo', 'Aceleracion']},
            {formula: formula_Velocidad_Final_3, datos_necesario:['Velocidad inicial', 'Distancia', 'Aceleracion']},
            {formula: formula_Velocidad_Final_4, datos_necesario:['Distancia', 'Tiempo', 'Aceleracion']}
        ]
    },
    {
        escenario: 'Distancia',
        formulas_Segun_Datos: [
            {formula: formula_Distancia_1, datos_necesario:['Velocidad inicial', 'Tiempo', 'Aceleracion']}, 
            {formula: formula_Distancia_2, datos_necesario:['Velocidad final', 'Tiempo', 'Aceleracion']},
            {formula: formula_Distancia_3, datos_necesario:['Velocidad inicial', 'Velocidad final', 'Tiempo']},
            {formula: formula_Distancia_4, datos_necesario:['Velocidad inicial', 'Velocidad final', 'Aceleracion']},
        ]
    },
    {
        escenario: 'Tiempo',
        formulas_Segun_Datos: [
            {formula: formula_Tiempo_1, datos_necesario:['Velocidad inicial', 'Velocidad final', 'Aceleracion']}, 
            {formula: formula_Tiempo_2, datos_necesario:['Velocidad inicial', 'Velocidad final', 'Distancia']},
            {formula: formula_Tiempo_3, datos_necesario:['Velocidad inicial', 'Distancia', 'Aceleracion']},
            {formula: formula_Tiempo_4, datos_necesario:['Velocidad final', 'Distancia', 'Aceleracion']},
        ]
    },
    {
        escenario: 'Aceleracion',
        formulas_Segun_Datos: [
            {formula: formula_Aceleracion_1, datos_necesario:['Velocidad inicial', 'Velocidad final', 'Tiempo']},
            {formula: formula_Aceleracion_2, datos_necesario:['Velocidad inicial', 'Distancia', 'Tiempo']},
            {formula: formula_Aceleracion_3, datos_necesario:['Velocidad inicial', 'Velocidad final', 'Distancia']},
            {formula: formula_Aceleracion_4, datos_necesario:['Velocidad inicial', 'Velocidad final', 'Tiempo']},
        ]
    },
];