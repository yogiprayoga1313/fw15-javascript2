function seleksiNilai (nilaiAwal, nilaiAkhir, dataAray){

    // if nilai akhir lebih kecil dari nilai awal return, nilai akhir harus lebih besar dari nilai awal
    if (nilaiAkhir <= nilaiAwal ){
        return console.log('Nilai akhir harus lebih besar dari nilai awal')
    }

    // if data array  kurang dari lima return data array harus lebih dari lima, clue : length

    if (dataAray.length <= 5) {
        return console.log('Jumlah angka dalam aray harus lebih dari 5')
    }

// Mengurutkan element
    dataAray.sort((a, b) => {
        return a - b;
    });

    let penampunganHasilAkhir = [];

    for (let index = 0; index < dataAray.length; index++) {
        if (dataAray[index] >= nilaiAwal && dataAray[index] <= nilaiAkhir) {
            penampunganHasilAkhir = [...penampunganHasilAkhir,dataAray[index]]
        }
        
    }

    // if penampung hasil akhir tidak ada isinya return isinya tidak ditemukan, clue : length
    if (penampunganHasilAkhir.length === 0){
        return console.log('Nilai tidak ditemukan')
    }

    console.log(penampunganHasilAkhir)
}
seleksiNilai(3,30,[1,7,34,6,8,9])
seleksiNilai(2,4,[2,5,6])
seleksiNilai(23,5,[3])

// nilaiAwal : 3
// nilaiAkhir : 30
// dataArray : [1,7,34,6,8,9]