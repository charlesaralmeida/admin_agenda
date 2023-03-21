import { aprovacao } from './aprovacao'
import { cabecalho } from './cabecalho'
import { linhas } from './linhas'

const fsize = 7

export const dados = {
    fontSize: fsize,
    table: {
        widths: ['40%', '6%', '5%', '10%', '12%', '5%', '10%', '12%'],
        body: [...cabecalho, ...linhas, ...aprovacao],
    },
}
