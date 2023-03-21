import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { docDefinition } from './FES'

pdfMake.vfs = pdfFonts.pdfMake.vfs

pdfMake.fonts = {
    Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf',
    },
}

export const openPdfNewWindow = () => {
    pdfMake.createPdf(docDefinition).download('Agenda_Transportes')
}
