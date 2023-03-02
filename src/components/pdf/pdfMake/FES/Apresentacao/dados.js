const fsize = 9

const firstLine = {
    margin: [5, 5],
    table: {
        widths: ['17%', '11%', '15%', '4%', '18%', '5%', '15%', '15%'],
        body: [
            [
                {
                    text: 'Data Atendimento:',
                    fontSize: fsize,
                },
                {
                    text: '13/02/2023',
                    bold: true,
                    fontSize: fsize,
                    alignment: 'left',
                },
                {
                    text: 'Qtde. Passageiros:',
                    fontSize: fsize,
                },
                {
                    text: '01',
                    bold: true,
                    fontSize: fsize,
                    alignment: 'left',
                },
                {
                    text: 'Aguardar para retorno:',
                    fontSize: fsize,
                },
                {
                    text: 'SIM',
                    bold: true,
                    fontSize: fsize,
                    alignment: 'left',
                },
                {
                    text: 'Previsão Retorno:',
                    fontSize: fsize,
                },
                {
                    text: '13/02/2023 12:00',
                    bold: true,
                    fontSize: fsize,
                    alignment: 'left',
                },
            ],
        ],
    },
    layout: 'noBorders',
}

const outros = {
    margin: [5, 5],
    fontSize: fsize,
    table: {
        widths: ['15%', '83%'],
        body: [
            [
                {
                    text: 'Hora:',
                },
                {
                    text: '09:30',
                    bold: true,
                },
            ],
            [
                {
                    text: 'Passageiro:',
                },
                {
                    text: 'FREDERICO JOSé BELTRAMELLY',
                    bold: true,
                },
            ],
            [
                {
                    text: 'Telefone:',
                },
                {
                    text: '(19) 3521-8694',
                    bold: true,
                },
            ],
            [
                {
                    text: 'Local/Referência:',
                },
                {
                    text: 'ALMOXARIFADO/HEMOCENTRO',
                    bold: true,
                },
            ],
            [
                {
                    text: 'Endereço:',
                },
                {
                    text: 'RUA CARLOS CHAGAS, 480 - UNICAMP - CAMPINAS/SP',
                    bold: true,
                },
            ],
        ],
    },
    layout: 'noBorders',
}

export const dados = [firstLine, outros]
