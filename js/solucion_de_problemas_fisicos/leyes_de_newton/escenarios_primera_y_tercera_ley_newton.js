const g = 9.8;

const formula_masa = w => w / g;
const formula_peso = m => m * g;
const formula_coeficiente_cinetico = (n, Fc) => Fc / n;
const formula_coeficiente_estatica = (n, Fe) => Fe / n;
const formula_normal = m => m * g;
const sumatoria_de_fuerzas = arreglo_de_fuerzas => {
    let numeros_positvos = [];
    let numeros_negativos = [];

    for(let i = 0; i < arreglo_de_fuerzas.length; i++) {
        let digito = arreglo_de_fuerzas[i];
        digito.toString().includes('-') ? numeros_negativos.push(parseFloat(digito)) : numeros_positvos.push(parseFloat(digito));
    }

    let suma = 0, resta = 0;

    for(const positivo of numeros_positvos) suma += positivo;
    for(const negativo of numeros_negativos) resta += negativo;

    console.log(suma)
    console.log(resta)

    let resultado = suma - (resta * (-1));

    if(resultado === 0) return 'Esta en reposo, la sumatoria de las fuerzas es: ' + resultado;
    if(resultado !== 0) return 'No esta en reposo, este es la sumatoria de las fuerzas: ' + resultado; 
};
const formula_friccion_estatica = (coeficiente_estatico, normal) => coeficiente_estatico * normal;
const formula_friccion_cinetica = (coeficiente_cinetica, normal) => coeficiente_cinetica * normal;
const formula_fuerza_aplicada = (m, a) => m * a;

const lista_de_problemas = [
    {escenario: 'Peso', datos_necesitados: ['masa'], formula_a_usar: formula_peso, abreviacion: 'n'},
    {escenario: 'Masa', datos_necesitados: ['peso'], formula_a_usar: formula_masa, abreviacion: 'kg'},
    {escenario: 'Coeficiente de friccion cinetica', datos_necesitados: ['normal', 'friccion cinetica'], formula_a_usar: formula_coeficiente_cinetico, abreviacion: 'µk'},
    {escenario: 'Coeficiente de friccion estatica', datos_necesitados: ['normal', 'friccion estatica'], formula_a_usar: formula_coeficiente_estatica, abreviacion: 'μs'},
    {escenario: 'normal', datos_necesitados: ['masa'], formula_a_usar: formula_normal, abreviacion: 'n'},
    {escenario: 'El objeto esta en reposo o no', datos_necesitados: ['peso', 'tension', 'normal', 'Fuerza aplicada', 'Friccion estatica', 'Friccion cinetica'], formula_a_usar: sumatoria_de_fuerzas},
    {escenario: 'Friccion estatica', datos_necesitados: ['normal', 'Coeficiente de friccion estatica'], formula_a_usar: formula_friccion_estatica, abreviacion: 'Fs'},
    {escenario: 'Friccion cinetica', datos_necesitados: ['normal', 'Coeficiente de friccion cinetica'], formula_a_usar: formula_friccion_cinetica, abreviacion: 'Fk'},
    {escenario: 'Fuerza aplicada', datos_necesitados: ['masa, aceleracion', 'velocidad inicial, velocidad final, tiempo'], formula_a_usar: [formula_fuerza_aplicada, formula_Aceleracion_1], abreviacion: 'n'}
];