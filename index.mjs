import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { convertTanggalMoment } from "./convert-date.mjs";

async function main() {
    const rl = readline.createInterface({input, output})
    try {
        const date = await rl.question(`Masukkan Tanggal (format: DD-MM-YYYY) `)
        const ans = await convertTanggalMoment(date)
        console.log(`Hasil konversi format: ${ans}`)
        rl.close()
    } catch (err) {
        console.error("Input invalid")
    }
}

main()