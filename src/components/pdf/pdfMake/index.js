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

export const savePdf = (dados) => {
    pdfMake.createPdf(docDefinition(dados)).download('Agenda_Transportes')
}

export const openPdfNewWindow = (dados) => {
    let win = window.open('', '_blank')
    pdfMake.createPdf(docDefinition(dados)).open({}, win)
}
