import { header } from './header'
import { body } from './body'

export const docDefinition = (dados) => {
    return {
        pageSize: 'A4',
        pageMargins: [10, 80, 10, 20],
        header: header,
        content: body(dados),
        defaultStyle: {
            font: 'Roboto',
        },
    }
}
