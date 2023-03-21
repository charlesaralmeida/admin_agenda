const fsize = 9

const firstLine = (detalhes) => {
    const info = detalhes.apresentacao
    return {
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
                        text: info.data_atendimento,
                        bold: true,
                        fontSize: fsize,
                        alignment: 'left',
                    },
                    {
                        text: 'Qtde. Passageiros:',
                        fontSize: fsize,
                    },
                    {
                        text: info.qtde_passageiros,
                        bold: true,
                        fontSize: fsize,
                        alignment: 'left',
                    },
                    {
                        text: 'Aguardar para retorno:',
                        fontSize: fsize,
                    },
                    {
                        text: info.aguardar_retorno,
                        bold: true,
                        fontSize: fsize,
                        alignment: 'left',
                    },
                    {
                        text: 'Previsão Retorno:',
                        fontSize: fsize,
                    },
                    {
                        text: info.data_retorno + ' ' + info.horario_retorno,
                        bold: true,
                        fontSize: fsize,
                        alignment: 'left',
                    },
                ],
            ],
        },
        layout: 'noBorders',
    }
}

const outros = (detalhes) => {
    const info = detalhes.apresentacao

    return {
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
                        text: info.horario_saida,
                        bold: true,
                    },
                ],
                [
                    {
                        text: 'Passageiro:',
                    },
                    {
                        text: info.passageiro.nome,
                        bold: true,
                    },
                ],
                [
                    {
                        text: 'Telefone:',
                    },
                    {
                        text: info.passageiro.telefone,
                        bold: true,
                    },
                ],
                [
                    {
                        text: 'Local/Referência:',
                    },
                    {
                        text: info.referencia,
                        bold: true,
                    },
                ],
                [
                    {
                        text: 'Endereço:',
                    },
                    {
                        text: info.endereco,
                        bold: true,
                    },
                ],
            ],
        },
        layout: 'noBorders',
    }
}

export const dados = (detalhes) => [firstLine(detalhes), outros(detalhes)]
