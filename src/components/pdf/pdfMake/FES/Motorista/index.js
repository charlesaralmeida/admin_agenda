import { faixa } from '../faixa'
import { dados } from './dados'

const faixaMotorista = faixa('VEÍCULO/MOTORISTA')

export const Motorista = (detalhes) =>
    detalhes.veiculo_motorista
        ? [
              {
                  stack: [faixaMotorista, dados(detalhes)],
                  unbreakable: true,
              },
          ]
        : null
