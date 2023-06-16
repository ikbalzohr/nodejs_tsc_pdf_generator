import { judul, profil } from './header_component'
import { tabelKegiatan } from './table_component'

const docDefination = {
  pageSize: { width: 934.9, height: 609.9 }, // F4
  pageOrientation: 'landscape',
  content: [],
  styles: {
    headTable: {
      bold: true
    },
    subTable: {
      italics: true,
      fontSize: 6
    }
  }
}

// styles

// judul
docDefination.content.push(judul('KESETARAAN PAKET B', 'PKBM RUMPIN KUONOTO', 2023) as never)

// profil
docDefination.content.push(profil('NAMA SEKOLAH', 'PKBM RUMPIN KUONOTO', 100) as never)
docDefination.content.push(profil('DESA', 'AIR TERANG', 100 + 14) as never)
docDefination.content.push(profil('KECAMATAN', 'TILOAN', 100 + 14 * 2) as never)
docDefination.content.push(profil('KABUPATEN', 'BUOL', 100 + 14 * 3) as never)
docDefination.content.push(profil('PROVINSI', 'SULAWESI TENGAH', 100 + 14 * 4) as never)
docDefination.content.push(profil('PAGU', '3 Org X 1.500.000 = Rp, 4.500.000,-', 100 + 14 * 5) as never)

// table
docDefination.content.push(tabelKegiatan() as never)

export default docDefination
