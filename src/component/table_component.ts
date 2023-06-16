import { type Content } from 'pdfmake/interfaces'

export const tabelKegiatan = (): Content => {
  return {
    table: {
      widths: ['auto', 'auto', 120, '*', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
      heights: ['auto', 'auto', 5],
      body: [
        [
          { text: 'KODE\nPROG/\nKEG', rowSpan: 2, alignment: 'center', marginTop: 3, style: 'headTable' },
          { text: 'KODE\nREKENING', rowSpan: 2, alignment: 'center', marginTop: 6, style: 'headTable' },
          {
            text: 'PROGRAM STANDAR\nNASIONAL PENDIDIKAN',
            rowSpan: 2,
            alignment: 'center',
            marginTop: 6,
            style: 'headTable'
          },
          { text: 'URAIAN PROGRAM KEGIATAN', rowSpan: 2, alignment: 'center', marginTop: 12, style: 'headTable' },
          { text: 'RINCIAN PERHUTUNGAN', colSpan: 3, alignment: 'center' },
          '',
          '',
          { text: 'JUMLAH BOP HARGA REGULER (Rp)', rowSpan: 2, alignment: 'center', marginTop: 12, style: 'headTable' },
          { text: 'TAHAP', colSpan: 2, alignment: 'center' },
          ''
        ],
        [
          '',
          '',
          '',
          '',
          { text: 'VOLUME', alignment: 'center', marginTop: 6, style: 'headTable' },
          { text: 'SATUAN', alignment: 'center', marginTop: 6, style: 'headTable' },
          { text: 'SATUAN\nHARGA', alignment: 'center' },
          '',
          { text: 'I', alignment: 'center', marginTop: 6, style: 'headTable' },
          { text: 'II', alignment: 'center', marginTop: 6, style: 'headTable' }
        ],
        [
          { text: '1', alignment: 'center', style: 'subTable' },
          { text: '2', alignment: 'center', style: 'subTable' },
          { text: '3', alignment: 'center', style: 'subTable' },
          { text: '4', alignment: 'center', style: 'subTable' },
          { text: '5', alignment: 'center', style: 'subTable' },
          { text: '6', alignment: 'center', style: 'subTable' },
          { text: '7', alignment: 'center', style: 'subTable' },
          { text: '8', alignment: 'center', style: 'subTable' },
          { text: '9', alignment: 'center', style: 'subTable' },
          { text: '10', alignment: 'center', style: 'subTable' }
        ]
      ]
    },
    fontSize: 8
  }
}
