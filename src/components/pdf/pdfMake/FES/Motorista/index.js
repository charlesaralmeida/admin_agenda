import { faixa } from '../faixa'
import { dados } from './dados'

const faixaMotorista = faixa('VEÍCULO/MOTORISTA')

export const Motorista = (detalhes) => [
    { stack: [faixaMotorista, dados(detalhes)], unbreakable: true },
]
