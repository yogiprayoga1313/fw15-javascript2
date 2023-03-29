// membuat program serach name dengan dibatai outputnya dengan menggunakan callback funtion

const names = ['Abigail', 'Alexande', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

function findName(name, limit, callback) {
    // .filter adalah method untuk membuat array baru yang terdiri dari elemen-elemen dari array yang memenuhi suatu kondisi tertentu. 
    const filteredNames = names.filter((item) => {
        return item.toLowerCase().includes(name.toLowerCase());
        // .toLowerCase dalah method untuk mengonversi semua karakter pada sebuah string menjadi huruf kecil (lowercase).
        // .includes adalah method untuk memeriksa apakah sutu element terdapat dalam sebuah array atau tidak.
    });
    
    // console.log(filteredNames)
    callback(filteredNames.slice(0, limit));
    // .slice digunakan untuk mengambil sebagian elemen pada sebuah array dan membuat array baru yang terdiri dari elemen-elemen tersebut.
}
findName('a', 7, (names) => {
    console.log(names);
});
