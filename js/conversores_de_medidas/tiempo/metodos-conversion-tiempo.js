// segundos 
const calcularSegundosAMinutos = segundos => {
    return resultado = segundos / 60;
};

const calcularSegundosAHoras = segundos => {
    return resultado = segundos / 3600;
};

const calcularSegundosADia = segundos => {
    return resultado = segundos / 86400;
};

const calcularSegundosAYear = segundos => {
    return resultado = segundos / 3.154e+7;
};

// Minutos

const calcularMinutosASegundos = minutos => {
    return resultado =  minutos * 60;
};

const calcularMinutosAHoras = minutos => {
    return resultado = minutos / 60;
};

const calcularMinutosADia = minutos => {
    return resultado = minutos / 1440;
};

const calcularMinutosAYear = minutos => {
    return resultado = minutos / 525600;
};

// Horas

const calcularHoraASegundos = hora => {
    return resultado = hora * 3600;
}

const calcularHorasAMinutos = horas => {
    return resultado = horas * 60;
};

const calcularHorasADias = horas => {
    return resultado = horas / 24;
};

const calcularHorasAYear = horas => {
    return resultado = horas / 8760;
};

// Dias

const calcularDiasASegundos = dias => {
    return resultado = dias * 86400;
};

const calcularDiasAMinutos = dias => {
    return resultado = dias * 1440;
};

const calcularDiasAHoras = dias => {
    return resultado = dias * 24;
};

const calcularDiasAYear = dias => {
    return resultado = dias / 365;
};

// Años

const calcularYearASegundos = year => {
    return resultado = year * 3.154e+7;
};

const calcularYearAMinutos = year => {
    return resultado = year * 525600;
};

const calcularYearAHoras = year => {
    return resultado = year * 8760;
};

const calcularYearADias = year => {
    return resultado = year * 365;
};

let listaTiempoValores = [
    {valor: 'Segundos a Minutos', metodo: calcularSegundosAMinutos},
    {valor: 'Segundos a Horas', metodo: calcularSegundosAHoras},
    {valor: 'Segundos a Dias', metodo: calcularSegundosADia},
    {valor: 'Segundos a Años', metodo: calcularSegundosAYear},
    {valor: 'Minutos a Segundos', metodo: calcularMinutosASegundos},
    {valor: 'Minutos a Horas', metodo: calcularMinutosAHoras},
    {valor: 'Minutos a Dias', metodo: calcularMinutosADia},
    {valor: 'Minutos a Años', metodo: calcularMinutosAYear},
    {valor: 'Horas a Segundos', metodo: calcularHoraASegundos},
    {valor: 'Horas a Minutos', metodo: calcularHorasAMinutos},
    {valor: 'Horas a Dias', metodo: calcularHorasADias},
    {valor: 'Horas a Años', metodo: calcularHorasAYear},
    {valor: 'Dias a Segundos', metodo: calcularDiasASegundos},
    {valor: 'Dias a Minutos', metodo: calcularDiasAMinutos},
    {valor: 'Dias a Horas', metodo: calcularDiasAHoras},
    {valor: 'Dias a Años', metodo: calcularDiasAYear},
    {valor: 'Años a Segundos', metodo: calcularYearASegundos},
    {valor: 'Años a Minutos', metodo: calcularYearAMinutos},
    {valor: 'Años a Horas', metodo: calcularYearAHoras},
    {valor: 'Años a Dias', metodo: calcularYearADias}
];