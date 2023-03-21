import { faixa } from '../faixa'
import { dados } from './dados'

const faixaUtilizacao = faixa('UTILIZAÇÃO DO VEÍCULO')

export const Utilizacao = [
    { stack: [faixaUtilizacao, dados], unbreakable: true },
]
