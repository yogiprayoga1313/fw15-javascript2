// variable Let adalah variable yang dapat diubah nilaynya.
// Variable Const adalah variable yang nilainya tidak dapat diubah setelah dideklatasi.
// variable Var adalah variable 

// Contoh Variable Let dalam Global Scope, Local/Function Scope , Block Scope

// Global Scope

const age = 30;

function Umurku() {
    console.log(age)
    if (age === 25) {
        console.log('Umur kamu sekarang ' + age)
    } else {
        console.log('Masukan umur yang benar !!')
    }
}

console.log(age)
// untuk menampilkan data di console kita harus memanggil detanya dengan menulis perintah console.log, apabila kita tidak menuliskan perintah console.log tidak akan tampil diconsole
// Umurku()
// Tapi apabila kita hanya memanggil funsinya saja makan yang akan sitampilkan di console adalah undifine/eror karena variable dari age tersebut terdapat diluar dari function atau block


// local Scope

function DataDiriku() {
    let MyName = 'jhon';
    console.log(MyName)
    if (MyName == 'yogi') {
        console.log(MyName + ' adalah nama kamu.')
    } else {
        console.log('kamu adalah ' + MyName + ' bukan yogi')
    }
}
// console.log(MyName)
// apabila kita memanggil var Myname dengan console.log maka diconsole tidak akan tampil atau undifiend karean variablenya berapa didalam function
DataDiriku()
// tapi jika kita ingin menampilkan data diatas delam console makan kita harus menanggil fungsinya


// Block Scope

// const age = 25;

function MyData() {
    const MyName = 'dewa';

    if (MyName == 'dewa') {
        const greetings = 'haloo ' + MyName;
        console.log(greetings)
    } else {
        console.log('kamu bukan dewa')

        console.log(greetings)
    }
}

MyData()
// console.log(greetings)
// untuk block scope apbila kita ingin menampilkan data diconsole makan kita harus menaggil fungsi dari mydata yg berisi variable const,tapi untuk console.log sendiri tidak akan-
// tampil karena variablenya terdapat diluar block dari function.