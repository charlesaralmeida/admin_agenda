import { header } from './header'
import { footer } from './footer'
import { body } from './body'

export const docDefinition = {
    pageSize: 'A4',
    pageMargins: [10, 80, 10, 20],
    header: header,
    // footer: footer,
    content: body,
    defaultStyle: {
        font: 'Roboto',
    },
}
