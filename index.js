import moment from "moment";

const tanggal = "21-10-2026"

function convertTanggal(date){
    const approved = cekFormat(date)
    let ans = ""
    if (approved) {
        for (let x = 0; x < date.length; x++) {
            if (date[x] == "-") {
                ans += "/"
            } else {
                ans += date[x]
            }
        }
    } else {
        ans = ""
        ans += "Format tanggal tidak valid."
    }
    return ans
}

function cekFormat(str) {
    let cek = str.split("-")
    if (cek.length != 3) {
        cek = 0
    } else if (cek[0].length != 2 || parseInt(cek[0]) < 0 || parseInt(cek[0]) > 31) {
        cek = 0
    } else if (cek[1].length != 2 || parseInt(cek[1]) < 0 || parseInt(cek[1]) > 12) {
        cek = 0
    } else if (cek[2].length != 4 || parseInt(cek[2]) < 0) {
        cek = 0
    } else {
        cek = 1
    }
    return cek
}

const ans = convertTanggal(tanggal)
console.log(ans)

// const tanggalMoment = moment().format('DD-MM-YYYY')
const tanggalMoment = moment().format('DD/MM/YYYY')

console.log(tanggalMoment)