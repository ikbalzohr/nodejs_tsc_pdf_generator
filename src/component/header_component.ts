import { type Content } from 'pdfmake/interfaces'

export const judul = (jenis: string, namaSekolah: string, tahun: number): Content => {
  return {
    alignment: 'center',
    text: [
      `RENCANA KEGAIATAN DAN ANGGARAN SEKOLAH (RKAS) BOP ${jenis} \n`,
      namaSekolah,
      '\n',
      `TAHUN ANGGARAN ${tahun}`
    ],
    fontSize: 10,
    bold: true,
    margin: [0, 0, 0, 120]
  }
}

export const profil = (text: string, text2: string, positionY: number): Content => {
  return [
    {
      alignment: 'left',
      text,
      style: 'header',
      fontSize: 10,
      bold: true,
      absolutePosition: { x: 40, y: positionY }
    },
    {
      alignment: 'left',
      text: `: ${text2}`,
      style: 'header',
      fontSize: 10,
      bold: true,
      absolutePosition: { x: 200, y: positionY }
    }
  ]
}
