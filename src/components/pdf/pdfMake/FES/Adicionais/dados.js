const fsize = 9

const info = (adicionais) => {
    return {
        margin: [5, 5],
        fontSize: fsize,
        table: {
            widths: ['15%', '83%'],
            body: [
                [
                    {
                        text: 'Vôo:',
                    },
                    {
                        text:
                            adicionais.voo.numero +
                            ' - Horário: ' +
                            adicionais.voo.horario,
                        bold: true,
                    },
                ],
                [
                    {
                        text: 'Informações Adicionais:',
                    },
                    {
                        text: adicionais.informacoes,
                        bold: true,
                    },
                ],
                [
                    {
                        text: 'Finalidade:',
                    },
                    {
                        text: adicionais.finalidade,
                        bold: true,
                    },
                ],
            ],
        },
        layout: 'noBorders',
    }
}

export const dados = (detalhes) => [info(detalhes.adicionais)]
