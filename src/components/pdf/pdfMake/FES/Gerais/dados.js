const fsize = 9

export const dados = (detalhes) => {
    const info = detalhes.gerais
    return [
        {
            margin: [5, 5],
            fontSize: fsize,
            table: {
                widths: ['15%', '40%', '20%', '25%'],
                body: [
                    [
                        {
                            text: 'Solicitante:',
                        },
                        {
                            text: info.solicitante.nome,
                            bold: true,
                        },
                        {
                            text: 'Fone:',
                        },
                        {
                            text: info.solicitante.telefone,
                            bold: true,
                        },
                    ],
                    [
                        {
                            text: 'E-mail:',
                        },
                        {
                            text: info.solicitante.email,
                            bold: true,
                        },
                        {
                            text: 'Contato Emergência:',
                        },
                        {
                            text: info.contato.emergencia,
                            bold: true,
                        },
                    ],
                    [
                        {
                            text: 'Recursos:',
                        },
                        {
                            text: info.recursos.tipo,
                            bold: true,
                        },
                        {
                            text: 'Centro de Custo:',
                        },
                        {
                            text: info.recursos.centro_custo,
                            bold: true,
                        },
                    ],
                ],
            },
            layout: 'noBorders',
        },
    ]
}
