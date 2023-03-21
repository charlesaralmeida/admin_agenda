const cabecalho1 = [
    {
        margin: [0, 7],
        text: 'PERCURSO/DESTINO',
        rowSpan: 2,
    },
    {
        alignment: 'center',
        margin: [0, 2],
        text: 'COD ATEND',
        rowSpan: 2,
    },
    {
        alignment: 'center',
        text: 'INÍCIO DO PERCURSO',
        colSpan: 3,
    },
    '',
    '',
    {
        alignment: 'center',
        text: 'TÉRMINO DO PERCURSO',
        colSpan: 3,
    },
    '',
    '',
]

const cabecalho2 = [
    {
        text: '',
    },
    {
        alignment: 'center',
        text: '',
    },
    { alignment: 'center', text: 'DIA' },
    { alignment: 'center', text: 'HORA' },
    { alignment: 'center', text: 'ODÔMETRO' },
    { alignment: 'center', text: 'DIA' },
    { alignment: 'center', text: 'HORA' },
    { alignment: 'center', text: 'ODÔMETRO' },
]

export const cabecalho = [cabecalho1, cabecalho2]
