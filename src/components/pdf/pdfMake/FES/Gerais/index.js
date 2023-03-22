import { faixa } from '../faixa'
import { dados } from './dados'

const faixaGerais = (num) => faixa('SOLICITAÇÃO\n' + num)

export const Gerais = (detalhes) => {
    return {
        stack: [
            {
                ...faixaGerais(detalhes.gerais.num_solicitacao),
                alignment: 'center',
            },
            dados(detalhes),
        ],
        unbreakable: true,
    }
}
