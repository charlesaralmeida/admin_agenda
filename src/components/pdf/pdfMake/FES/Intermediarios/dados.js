import { faixa } from '../faixa'

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
    detalhes.intermediarios.forEach((element, index) => {
        if (index > 0) {
            aux.push({
                canvas: [
                    {
                        type: 'line',
                        x1: 22,
                        y1: 0,
                        x2: 552,
                        y2: 0,
                        lineWidth: 0.1,
                    },
                ],
            })
            aux.push(buildInfo(element))
        } else aux.push(buildInfo(element))
    })
    return aux
}

export const dados = (detalhes) => [...getInfo(detalhes)]
