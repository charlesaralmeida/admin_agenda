import { faixa } from '../faixa'
import { dados } from './dados'

const faixaIntermediarios = faixa('DESTINO(S) INTERMEDIÁRIO(S)')

export const Intermediarios = (detalhes) => [
    faixaIntermediarios,
    dados(detalhes),
]
