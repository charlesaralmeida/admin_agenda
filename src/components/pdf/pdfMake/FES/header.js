import { logo_dga } from '../img/logodga'
import { logo_unicamp } from '../img/logounicamp'

export const header = (detalhes) => [
    {
        columns: [
            {
                image: logo_dga,
                width: 100,
                margin: [20, 20],
            },
            {
                alignment: 'center',
                text:
                    'Formulário de Execução de Serviços\n\nSolicitação ' +
                    detalhes.num_solicitacao,
                margin: [0, 20],
            },
            {
                image: logo_unicamp,
                width: 70,
                margin: [0, 0, -20, 0],
            },
        ],
    },
]
