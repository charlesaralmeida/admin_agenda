const fsize = 9

const empresa = (info) => {
    return {
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
                        text: info,
                        bold: true,
                        margin: [0, 5],
                    },
                ],
            ],
        },
        layout: 'noBorders',
    }
}

const info = (detalhes) => {
    return {
        fontSize: fsize,
        table: {
            widths: ['16%', '25%', '10%', '15%', '10%', '13%'],
            body: [
                [
                    {
                        text: 'Tipo de Veículo:',
                        margin: [5, 0],
                    },
                    {
                        text: detalhes.veiculo.tipo,
                        bold: true,
                    },
                    {
                        text: 'Frota:',
                    },
                    {
                        text: detalhes.veiculo.frota,
                        bold: true,
                    },
                    {
                        text: 'Placa:',
                    },
                    {
                        text: detalhes.veiculo.placa,
                        bold: true,
                    },
                ],
                [
                    {
                        text: 'Condutor:',
                        margin: [5, 0],
                    },
                    {
                        text: detalhes.motorista.nome,
                        bold: true,
                    },
                    {
                        text: 'Matr./CPF:',
                    },
                    {
                        text: detalhes.motorista.matricula,
                        bold: true,
                    },
                    {
                        text: 'Telefone:',
                    },
                    {
                        text: detalhes.motorista.telefone,
                        bold: true,
                    },
                ],
            ],
        },
        layout: 'noBorders',
    }
}

export const dados = (detalhes) => [
    empresa(detalhes.veiculo_motorista.empresa.nome),
    info(detalhes.veiculo_motorista),
]
