import { faixa } from '../faixa'
import { dados } from './dados'

const faixaAdicionais = faixa('INFORMAÇÕES ADICIONAIS')

export const Adicionais = (detalhes) => [
    { stack: [faixaAdicionais, dados(detalhes)], unbreakable: true },
]
