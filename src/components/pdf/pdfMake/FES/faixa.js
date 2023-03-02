export const faixa = (texto) => {
    return {
        table: {
            widths: ['100%'],
            body: [
                [
                    {
                        text: texto,
                        fillColor: '#555555',
                        color: '#FFFFFF',
                        margin: [10, 0],
                        bold: true,
                    },
                ],
            ],
        },
        layout: 'noBorders',
    }
}
