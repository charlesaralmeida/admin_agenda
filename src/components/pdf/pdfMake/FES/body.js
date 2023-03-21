import { Adicionais } from './Adicionais'
import { Apresentacao } from './Apresentacao'
import { Final } from './Final'
import { Intermediarios } from './Intermediarios'
import { Motorista } from './Motorista'
import { Utilizacao } from './Utilizacao'

export const body = (detalhes) => [
    Apresentacao(detalhes),
    Intermediarios(detalhes),
    Final(detalhes),
    Adicionais(detalhes),
    Motorista(detalhes),
    Utilizacao,
]
