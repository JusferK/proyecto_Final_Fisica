const calcularMetrosACentimetros = metros => resultado = metros * 100;

const calcularMetrosAMillas = metros => resultado = metros / 1609;

const calcularMetroAKilometro = metros => resultado = metros / 1000;

const calcularMetroAPies = metros => resultado = metros * 3.281;

const calcularMetroAPulgadas = metros => resultado = metros * 39.37;

const calcularCentimetrosAMetros = centimetros => resultado = centimetros / 100;

const calcularCentimetrosAMillas = centimetros => resultado = centimetros / 160900;

const calcularCentimetrosAKilometros = centimetros => resultado = centimetros / 100000;

const calcularCentimetrosAPies = centimetros => resultado = centimetros / 30.48;

const calcularCentimetrosAPulgadas = centimetros => resultado = centimetros / 2.54;

const calcularKilometrosAMetros = kilometros => resultado = kilometros * 1000;

const calcularKilometrosAMillas = kilometros => resultado = kilometros / 1.609;

const calcularKilometrosAPies = kilometros => resultado = kilometros * 3281;

const calcularKilometrosACentimetros = kilometros => resultado = kilometros * 100000;

const calcularKilometrosAPulgadas = kilometros => resultado = kilometros * 39370;

const calcularMillasAMetros = millas => resultado = millas * 1609;

const calcularMillasAKilometros = millas => resultado = millas * 1.60934;

const calcularMillasAPies = millas => resultado = millas * 5280;

const calcularMillasACentimetros = millas => resultado = millas * 160900;

const calcularMillasAPulgadas = millas => resultado = millas * 63360;

const calcularPiesAMetros = pies => resultado = pies / 3.281;

const calcularPiesAKilometros = pies => resultado = pies / 3281;

const calcularPiesAMillas = pies => resultado = pies / 5280;

const calcularPiesACentimetros = pies => resultado = pies * 30.48;

const calcularPiesAPulgadas = pies => resultado = pies * 12;

const calcularPulgadasAMetros = pulgadas => resultado = pulgadas / 39.37;

const calcularPulgadasAKilometros = pulgadas => resultado = pulgadas / 393170;

const calcularPulgadasAMillas = pulgadas => resultado = pulgadas / 63360;

const calcularPulgadasAPies = pulgadas => resultado = pulgadas / 12;

const calcularPulgadasACentimetros = pulgadas => resultado = pulgadas * 2.54;

const listaLongitudValores = [
    {valor: 'Metros a Centimetros', metodo: calcularMetrosACentimetros, abreviatura: 'cm'},
    {valor: 'Metros a Millas', metodo: calcularMetrosAMillas, abreviatura: 'mi'},
    {valor: 'Metros a Kilometros', metodo: calcularMetroAKilometro, abreviatura: 'km'},
    {valor: 'Metros a Pies', metodo: calcularMetroAPies, abreviatura: 'p'},
    {valor: 'Metros a Pulgadas', metodo: calcularMetroAPulgadas, abreviatura: 'in'},
    {valor: 'Centimetros a Metros', metodo: calcularCentimetrosAMetros, abreviatura: 'm'},
    {valor: 'Centimetros a Millas', metodo: calcularCentimetrosAMillas, abreviatura: 'mi'},
    {valor: 'Centimetros a Kilometros', metodo: calcularCentimetrosAKilometros, abreviatura: 'km'},
    {valor: 'Centimetros a Pies', metodo: calcularCentimetrosAPies, abreviatura: 'p'},
    {valor: 'Centimetros a Pulgadas', metodo: calcularCentimetrosAPulgadas, abreviatura: 'in'},
    {valor: 'Kilometros a Metros', metodo: calcularKilometrosAMetros, abreviatura: 'm'},
    {valor: 'Kilometros a Millas', metodo: calcularKilometrosAMillas, abreviatura: 'mi'},
    {valor: 'Kilometros a Pies', metodo: calcularKilometrosAPies, abreviatura: 'p'},
    {valor: 'Kilometros a Centimetros', metodo: calcularKilometrosACentimetros, abreviatura: 'cm'},
    {valor: 'Kilometros a Pulgadas', metodo: calcularKilometrosAPulgadas, abreviatura: 'in'},
    {valor: 'Millas a Metros', metodo: calcularMillasAMetros, abreviatura: 'm'},
    {valor: 'Millas a Kilometros', metodo: calcularMillasAKilometros, abreviatura: 'km'},
    {valor: 'Millas a Pies', metodo: calcularMillasAPies, abreviatura: 'p'},
    {valor: 'Millas a Centimetros', metodo: calcularMillasACentimetros, abreviatura: 'cm'},
    {valor: 'Millas a Pulgadas', metodo: calcularMillasAPulgadas, abreviatura: 'p'},
    {valor: 'Pies a Metros', metodo: calcularPiesAMetros, abreviatura: 'm'},
    {valor: 'Pies a Kilometros', metodo: calcularPiesAKilometros, abreviatura: 'km'},
    {valor: 'Pies a Millas', metodo: calcularPiesAMillas, abreviatura: 'mi'},
    {valor: 'Pies a Centimetros', metodo: calcularPiesACentimetros, abreviatura: 'cm'},
    {valor: 'Pies a Pulgadas', metodo: calcularPiesAPulgadas, abreviatura: 'in'},
    {valor: 'Pulgadas a Metros', metodo: calcularPulgadasAMetros, abreviatura: 'm'},
    {valor: 'Pulgadas a Kilometros', metodo: calcularPulgadasAKilometros, abreviatura: 'km'},
    {valor: 'Pulgadas a Millas', metodo: calcularPulgadasAMillas, abreviatura: 'mi'},
    {valor: 'Pulgadas a Pies', metodo: calcularPulgadasAPies, abreviatura: 'p'},
    {valor: 'Pulgadas a Centimetros', metodo: calcularPulgadasACentimetros, abreviatura: 'cm'},
];