// Kilogramo

const calcularKilogramoAGramo = kilogramo => {
    return resultado = kilogramo * 1000;
};

const calcularKilogramoALibra = kilogramo => {
    return resultado = kilogramo * 2.205;
};

const calcularKilogramoAOnzas = kilogramo => {
    return resultado = kilogramo * 35.274;
};

// Gramo

const calcularGramoAKilogramo = gramo => {
    return resultado = gramo / 1000;
};

const calcularGramoALibra = gramo => {
    return resultado = gramo / 453.6;
};

const calcularGramoAOnzas = gramo => {
    return resultado = gramo / 28.35;
};

// Libra

const calcularLibraAKilogramo = libra => {
    return resultado = libra / 2.205;
};

const calcularLibraAGramo = libra => {
    return resultado = libra * 453.6;
};

const calcularLibraAOnza = libra => {
    return resultado = libra * 16;
};

// Onza

const calcularOnzaAKilogramo = onza => {
    return resultado = onza / 35.274;
};

const calcularOnzaAGramo = onza => {
    return resultado = onza * 28.3495;
};

const calcularOnzasALibra = onza => {
    return resultado = onza / 16;
};

let listaMasaValores = [
    {valor: 'Kilogramo a Gramo', metodo: calcularKilogramoAGramo, abreviatura: 'g'},
    {valor: 'Kilogramo a Libra', metodo: calcularKilogramoALibra, abreviatura: 'lb'},
    {valor: 'Kilogramo a Onzas', metodo: calcularKilogramoAOnzas, abreviatura: 'oz'},
    {valor: 'Gramo a Kilogramo', metodo: calcularGramoAKilogramo, abreviatura: 'kg'},
    {valor: 'Gramo a Libra', metodo: calcularGramoALibra, abreviatura: 'lb'},
    {valor: 'Gramo a Onzas', metodo: calcularGramoAOnzas, abreviatura: 'oz'},
    {valor: 'Libra a Kilogramo', metodo: calcularLibraAKilogramo, abreviatura: 'kg'},
    {valor: 'Libra a Gramo', metodo: calcularLibraAGramo, abreviatura: 'g'},
    {valor: 'Libra a Onzas', metodo: calcularLibraAOnza, abreviatura: 'oz'},
    {valor: 'Onzas a Kilogramo', metodo: calcularOnzaAKilogramo, abreviatura: 'kg'},
    {valor: 'Onzas a Gramo', metodo: calcularOnzaAGramo, abreviatura: 'g'},
    {valor: 'Onzas a Libra', metodo: calcularOnzasALibra, abreviatura: 'lb'}
];