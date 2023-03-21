import { faixa } from '../faixa'
import { dados } from './dados'

const faixaApresentacao = faixa('APRESENTAÇÃO DO VEÍCULO/MOTORISTA')

export const Apresentacao = (detalhes) => [
    { stack: [faixaApresentacao, dados(detalhes)], unbreakable: true },
]
