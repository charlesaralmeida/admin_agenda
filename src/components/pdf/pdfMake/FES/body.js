import { Adicionais } from './Adicionais'
import { Apresentacao } from './Apresentacao'
import { Final } from './Final'
import { Gerais } from './Gerais'
import { Intermediarios } from './Intermediarios'
import { Motorista } from './Motorista'
import { Utilizacao } from './Utilizacao'

export const body = (detalhes) => {
    return detalhes.intermediarios.length
        ? [
              Gerais(detalhes),
              Apresentacao(detalhes),
              Intermediarios(detalhes),
              Final(detalhes),
              Adicionais(detalhes),
              Motorista(detalhes),
              Utilizacao,
          ]
        : [
              Gerais(detalhes),
              Apresentacao(detalhes),
              Final(detalhes),
              Adicionais(detalhes),
              Motorista(detalhes),
              Utilizacao,
          ]
}
