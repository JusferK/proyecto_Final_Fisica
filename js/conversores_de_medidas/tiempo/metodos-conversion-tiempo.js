const calcularSegundosAMinutos = segundos => resultado = segundos / 60;

const calcularSegundosAHoras = segundos => resultado = segundos / 3600;

const calcularSegundosADia = segundos => resultado = segundos / 86400;

const calcularSegundosAYear = segundos => resultado = segundos / 3.154e+7;

const calcularMinutosASegundos = minutos => resultado =  minutos * 60;

const calcularMinutosAHoras = minutos => resultado = minutos / 60;

const calcularMinutosADia = minutos => resultado = minutos / 1440;

const calcularMinutosAYear = minutos => resultado = minutos / 525600;

const calcularHoraASegundos = hora => resultado = hora * 3600;

const calcularHorasAMinutos = horas => resultado = horas * 60;

const calcularHorasADias = horas => resultado = horas / 24;

const calcularHorasAYear = horas => resultado = horas / 8760;

const calcularDiasASegundos = dias => resultado = dias * 86400;

const calcularDiasAMinutos = dias => resultado = dias * 1440;

const calcularDiasAHoras = dias => resultado = dias * 24;

const calcularDiasAYear = dias => resultado = dias / 365;

const calcularYearASegundos = year => resultado = year * 3.154e+7;

const calcularYearAMinutos = year => resultado = year * 525600;

const calcularYearAHoras = year => resultado = year * 8760;

const calcularYearADias = year => resultado = year * 365;

let listaTiempoValores = [
    {valor: 'Segundos a Minutos', metodo: calcularSegundosAMinutos, abreviatura: 'm'},
    {valor: 'Segundos a Horas', metodo: calcularSegundosAHoras, abreviatura: 'h'},
    {valor: 'Segundos a Dias', metodo: calcularSegundosADia, abreviatura: 'd'},
    {valor: 'Segundos a Años', metodo: calcularSegundosAYear, abreviatura: 'a'},
    {valor: 'Minutos a Segundos', metodo: calcularMinutosASegundos, abreviatura: 's'},
    {valor: 'Minutos a Horas', metodo: calcularMinutosAHoras, abreviatura: 'h'},
    {valor: 'Minutos a Dias', metodo: calcularMinutosADia, abreviatura: 'd'},
    {valor: 'Minutos a Años', metodo: calcularMinutosAYear, abreviatura: 'a'},
    {valor: 'Horas a Segundos', metodo: calcularHoraASegundos, abreviatura: 's'},
    {valor: 'Horas a Minutos', metodo: calcularHorasAMinutos, abreviatura: 'm'},
    {valor: 'Horas a Dias', metodo: calcularHorasADias, abreviatura: 'd'},
    {valor: 'Horas a Años', metodo: calcularHorasAYear, abreviatura: 'a'},
    {valor: 'Dias a Segundos', metodo: calcularDiasASegundos, abreviatura: 's'},
    {valor: 'Dias a Minutos', metodo: calcularDiasAMinutos, abreviatura: 'm'},
    {valor: 'Dias a Horas', metodo: calcularDiasAHoras, abreviatura: 'h'},
    {valor: 'Dias a Años', metodo: calcularDiasAYear, abreviatura: 'a'},
    {valor: 'Años a Segundos', metodo: calcularYearASegundos, abreviatura: 's'},
    {valor: 'Años a Minutos', metodo: calcularYearAMinutos, abreviatura: 'm'},
    {valor: 'Años a Horas', metodo: calcularYearAHoras, abreviatura: 'h'},
    {valor: 'Años a Dias', metodo: calcularYearADias, abreviatura: 'd'}
];