const fsize = 9

const info = (destino) => {
    return {
        margin: [5, 5],
        fontSize: fsize,
        table: {
            widths: ['15%', '83%'],
            body: [
                [
                    {
                        text: 'Local/Referência:',
                    },
                    {
                        text: destino.referencia,
                        bold: true,
                    },
                ],
                [
                    {
                        text: 'Endereço:',
                    },
                    {
                        text: destino.endereco,
                        bold: true,
                    },
                ],
            ],
        },
        layout: 'noBorders',
    }
}

export const dados = (detalhes) => [info(detalhes.destino)]
