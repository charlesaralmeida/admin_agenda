import { header } from './header'
import { body } from './body'

export const docDefinition = (detalhes) => {
    return {
        pageSize: 'A4',
        pageMargins: [10, 80, 10, 20],
        header: header(detalhes),
        content: body(detalhes),
        defaultStyle: {
            font: 'Roboto',
        },
    }
}
