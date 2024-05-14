// Metros
const calcularMetrosACentimetros = metros => {
    return resultado = metros * 100;
};

const calcularMetrosAMillas = metros => {
    return resultado= metros / 1609;
};

const calcularMetroAKilometro = metros => {
    return resultado = metros / 1000;
};

const calcularMetroAPies = metros => {
    return resultado = metros * 3.281;
};

const calcularMetroAPulgadas = metros => {
    return resultado = metros * 39.37;
};

// Centimetros
const calcularCentimetrosAMetros = centimetros => {
    return resultado = centimetros / 100;
};

const calcularCentimetrosAMillas = centimetros => {
    return resultado = centimetros / 160900;
};

const calcularCentimetrosAKilometros = centimetros => {
    return resultado = centimetros / 100000;
};

const calcularCentimetrosAPies = centimetros => {
    return resultado = centimetros / 30.48;
};

const calcularCentimetrosAPulgadas = centimetros => {
    return resultado = centimetros / 2.54;
};

// Kilometros

const calcularKilometrosAMetros = kilometros => {
    return resultado = kilometros * 1000;
};

const calcularKilometrosAMillas = kilometros => {
    return resultado = kilometros / 1.609;
};

const calcularKilometrosAPies = kilometros => {
    return resultado = kilometros * 3281;
};

const calcularKilometrosACentimetros = kilometros => {
    return resultado = kilometros * 100000;
};

const calcularKilometrosAPulgadas = kilometros => {
    return resultado = kilometros * 39370;
};

// Millas

const calcularMillasAMetros = millas => {
    return resultado = millas * 1609;
};

const calcularMillasAKilometros = millas => {
    return resultado = millas * 1.60934;
};

const calcularMillasAPies = millas => {
    return resultado = millas * 5280;
};

const calcularMillasACentimetros = millas => {
    return resultado = millas * 160900;
};

const calcularMillasAPulgadas = millas => {
    return resultado = millas * 63360;
};

// Pies

const calcularPiesAMetros = pies => {
    return resultado = pies / 3.281;
};

const calcularPiesAKilometros = pies => {
    return resultado = pies / 3281;
};

const calcularPiesAMillas = pies => {
    return resultado = pies / 5280;
};

const calcularPiesACentimetros = pies => {
    return resultado = pies * 30.48;
};

const calcularPiesAPulgadas = pies => {
    return resultado = pies * 12;
};

// Pulgadas

const calcularPulgadasAMetros = pulgadas => {
    return resultado = pulgadas / 39.37;
};

const calcularPulgadasAKilometros = pulgadas => {
    return resultado = pulgadas / 393170;
};

const calcularPulgadasAMillas = pulgadas => {
    return resultado = pulgadas / 63360;
};

const calcularPulgadasAPies = pulgadas => {
    return resultado = pulgadas / 12;
};

const calcularPulgadasACentimetros = pulgadas => {
    return resultado = pulgadas * 2.54;
};

const listaLongitudValores = [
    {valor: 'Metros a Centimetros', metodo: calcularMetrosACentimetros},
    {valor: 'Metros a Millas', metodo: calcularMetrosAMillas},
    {valor: 'Metros a Kilometros', metodo: calcularMetroAKilometro},
    {valor: 'Metros a Pies', metodo: calcularMetroAPies},
    {valor: 'Metros a Pulgadas', metodo: calcularMetroAPulgadas},
    {valor: 'Centimetros a Metros', metodo: calcularCentimetrosAMetros},
    {valor: 'Centimetros a Millas', metodo: calcularCentimetrosAMillas},
    {valor: 'Centimetros a Kilometros', metodo: calcularCentimetrosAKilometros},
    {valor: 'Centimetros a Pies', metodo: calcularCentimetrosAPies},
    {valor: 'Centimetros a Pulgadas', metodo: calcularCentimetrosAPulgadas},
    {valor: 'Kilometros a Metros', metodo: calcularKilometrosAMetros},
    {valor: 'Kilometros a Millas', metodo: calcularKilometrosAMillas},
    {valor: 'Kilometros a Pies', metodo: calcularKilometrosAPies},
    {valor: 'Kilometros a Centimetros', metodo: calcularKilometrosACentimetros},
    {valor: 'Kilometros a Pulgadas', metodo: calcularKilometrosAPulgadas},
    {valor: 'Millas a Metros', metodo: calcularMillasAMetros},
    {valor: 'Millas a Kilometros', metodo: calcularMillasAKilometros},
    {valor: 'Millas a Pies', metodo: calcularMillasAPies},
    {valor: 'Millas a Centimetros', metodo: calcularMillasACentimetros},
    {valor: 'Millas a Pulgadas', metodo: calcularMillasAPulgadas},
    {valor: 'Pies a Metros', metodo: calcularPiesAMetros},
    {valor: 'Pies a Kilometros', metodo: calcularPiesAKilometros},
    {valor: 'Pies a Millas', metodo: calcularPiesAMillas},
    {valor: 'Pies a Centimetros', metodo: calcularPiesACentimetros},
    {valor: 'Pies a Pulgadas', metodo: calcularPiesAPulgadas},
    {valor: 'Pulgadas a Metros', metodo: calcularPulgadasAMetros},
    {valor: 'Pulgadas a Kilometros', metodo: calcularPulgadasAKilometros},
    {valor: 'Pulgadas a Millas', metodo: calcularPulgadasAMillas},
    {valor: 'Pulgadas a Pies', metodo: calcularPulgadasAPies},
    {valor: 'Pulgadas a Centimetros', metodo: calcularPulgadasACentimetros},
];