import { faixa } from '../faixa'
import { dados } from './dados'

const faixaIntermediario = faixa('DESTINO INTERMEDIÁRIO')
const faixaIntermediarios = faixa('DESTINOS INTERMEDIÁRIOS')

export const Intermediarios = (detalhes) => [
    detalhes.intermediarios.length > 1
        ? faixaIntermediarios
        : faixaIntermediario,
    dados(detalhes),
]
