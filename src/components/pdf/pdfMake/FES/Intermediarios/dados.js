const fsize = 9

const buildInfo = (info) => {
    return {
        stack: [
            {
                margin: [5, 5],
                fontSize: fsize,
                table: {
                    widths: ['15%', '83%'],
                    body: [
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
            },
        ],
        unbreakable: true,
    }
}

const getInfo = (detalhes) => {
    let aux = []
    detalhes.intermediarios.forEach((element) => aux.push(buildInfo(element)))
    return aux
}

export const dados = (detalhes) => [...getInfo(detalhes)]
