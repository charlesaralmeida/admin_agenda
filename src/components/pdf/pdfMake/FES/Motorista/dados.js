const fsize = 9

const empresa = {
    fontSize: fsize,
    table: {
        widths: ['15%', '85%'],
        body: [
            [
                {
                    text: 'Empresa:',
                    margin: [5, 5],
                },
                {
                    text: 'UNICAMP',
                    bold: true,
                    margin: [0, 5],
                },
            ],
        ],
    },
    layout: 'noBorders',
}

const info = {
    fontSize: fsize,
    table: {
        widths: ['16%', '25%', '10%', '8%', '15%', '15%'],
        body: [
            [
                {
                    text: 'Tipo de Veículo:',
                    margin: [5, 0],
                },
                {
                    text: 'FURGÃO',
                    bold: true,
                },
                {
                    text: 'Frota:',
                },
                {
                    text: '543',
                    bold: true,
                },
                {
                    text: 'Placa:',
                },
                {
                    text: 'DMN-5466',
                    bold: true,
                },
            ],
            [
                {
                    text: 'Condutor:',
                    margin: [5, 0],
                },
                {
                    text: 'OSVALDO ALVES',
                    bold: true,
                },
                {
                    text: 'Matrícula:',
                },
                {
                    text: '227650',
                    bold: true,
                },
                {
                    text: 'Telefone Condutor:',
                },
                {
                    text: '99882-4927',
                    bold: true,
                },
            ],
        ],
    },
    layout: 'noBorders',
}

export const dados = [empresa, info]
