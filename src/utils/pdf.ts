import PdfMake from 'pdfmake'
import fs from 'fs'
import { logger } from './logger'
import { type TDocumentDefinitions } from 'pdfmake/interfaces'
import docDefination from '../component/index_component'

const pdfGenerator = (): void => {
  const fonts = {
    Roboto: {
      normal: 'pdfs/fonts/roboto/Roboto-Regular.ttf',
      bold: 'pdfs/fonts/roboto/Roboto-Medium.ttf',
      italics: 'pdfs/fonts/roboto/Roboto-Italic.ttf',
      bolditalics: 'pdfs/fonts/roboto/Roboto-MediumItalic.ttf'
    }
  }

  const pdfmake = new PdfMake(fonts)

  const pdfDoc = pdfmake.createPdfKitDocument(docDefination as TDocumentDefinitions, {})
  pdfDoc.pipe(fs.createWriteStream('pdfs/result/test.pdf'))
  pdfDoc.end()
  logger.info('Pdf has created')
}

export default pdfGenerator
