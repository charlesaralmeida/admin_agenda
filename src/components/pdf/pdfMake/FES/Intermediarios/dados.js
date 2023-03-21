const fsize = 9

const info = () => {
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
            },
        ],
        unbreakable: true,
    }
}

const getInfo = () => {
    let aux = []
    for (let i = 0; i < 5; i++) {
        aux.push(info())
    }
    return aux
}

export const dados = [...getInfo()]
