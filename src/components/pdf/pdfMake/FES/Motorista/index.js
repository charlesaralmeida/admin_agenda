import { faixa } from '../faixa'
import { dados } from './dados'

const faixaMotorista = faixa('VEÍCULO/MOTORISTA')

export const Motorista = [{ stack: [faixaMotorista, dados], unbreakable: true }]
