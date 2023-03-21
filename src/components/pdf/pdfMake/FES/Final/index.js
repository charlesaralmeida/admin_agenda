import { faixa } from '../faixa'
import { dados } from './dados'

const faixaFinal = faixa('DESTINO FINAL')

export const Final = (detalhes) => [
    { stack: [faixaFinal, dados(detalhes)], unbreakable: true },
]
