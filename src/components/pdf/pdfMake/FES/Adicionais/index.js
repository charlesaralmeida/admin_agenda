import { faixa } from '../faixa'
import { dados } from './dados'

const faixaAdicionais = faixa('INFORMAÇÕES ADICIONAIS')

export const Adicionais = [
    { stack: [faixaAdicionais, dados], unbreakable: true },
]
