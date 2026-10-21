import moment from 'moment';

// const tanggal = "01-01-2026"

function convertTanggal(date){
    const approved = cekFormat(date)
    let ans = ""
    if (approved) {
        ans = date.replace("-", "/")
        ans = ans.replace("-", "/")
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

// const ans = convertTanggal(tanggal)
// console.log(ans)

function convertTanggalMoment(str) {
    const ans = moment(str, "DD-MM-YYYY").format("DD/MM/YYYY")
    return ans
}

// const tanggalMoment = convertTanggalMoment(tanggal)
// console.log(tanggalMoment)

export {convertTanggal, cekFormat, convertTanggalMoment}