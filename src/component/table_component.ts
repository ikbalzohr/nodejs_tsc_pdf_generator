import { type Content } from 'pdfmake/interfaces'

export const tabelKegiatan = (): Content => {
  return {
    table: {
      body: [
        [
          { text: 'KODE PROG/KEG', rowSpan: 2, alignment: 'center', marginTop: 12 },
          { text: 'KODE REKENING', rowSpan: 2, alignment: 'center', marginTop: 12 },
          { text: 'PROGRAM STANDAR\nNASIONAL PENDIDIKAN', rowSpan: 2, alignment: 'center', marginTop: 6 },
          { text: 'URAIAN PROGRAM KEGIATAN', rowSpan: 2, alignment: 'center', marginTop: 12 },
          { text: 'RINCIAN PERHUTUNGAN', colSpan: 3, alignment: 'center' },
          '',
          '',
          { text: 'JUMLAH BOP HARGA REGULER (Rp)', rowSpan: 2, alignment: 'center', marginTop: 12 },
          { text: 'TAHAP', colSpan: 2, alignment: 'center' },
          ''
        ],
        [
          '',
          '',
          '',
          '',
          { text: 'VOLUME', alignment: 'center', marginTop: 6 },
          { text: 'SATUAN', alignment: 'center', marginTop: 6 },
          { text: 'SATUAN\nHARGA', alignment: 'center' },
          '',
          { text: 'I', alignment: 'center', marginTop: 6 },
          { text: 'II', alignment: 'center', marginTop: 6 }
        ],
        [
          { text: '1', alignment: 'center' },
          { text: '2', alignment: 'center' },
          { text: '3', alignment: 'center' },
          { text: '4', alignment: 'center' },
          { text: '5', alignment: 'center' },
          { text: '6', alignment: 'center' },
          { text: '7', alignment: 'center' },
          { text: '8', alignment: 'center' },
          { text: '9', alignment: 'center' },
          { text: '10', alignment: 'center' }
        ]
      ]
    },
    fontSize: 8
  }
}
