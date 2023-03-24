// 10 Method javaScript (Built-in-functions)
// 1. Sort : mengurutkan elemen-elemen pada suatu array di tempatnya dan mengembalikan array yang sudah diurutkan.

const number = [4,9,2,5,1]
number.sort();
console.log(number)
// output [1, 2, 3, 4, 5, 9]

// 2. Reverse : mengubah urutan elemen pada suatu array menjadi terbalik dan mengembalikan array yang sudah dibalik urutannya.

const animal = ['cat', 'dog', 'lion']
animal.reverse()
console.log(animal)
// output [ lion, god, cat]

// 3. push : menambahkan satu atau beberapa elemen baru pada akhir suatu array.

const Animals = ['cat', 'lion', 'dog'];
animal.push('tiger');
console.log(Animals);
// output ["cat", "lion", "dog", "tiger"]

// 4. map : membuat array baru dengan menerapkan suatu fungsi pada setiap elemen pada array asli. 

const users = [
       {Name:'yogi', age: 20},
       {Name:'dewa', age: 30},
       {Name:'yudi', age: 21},
];
const usersAge=users.map((users) => users.age);
console.log(usersAge)
// output [20, 30, 21]

// 5.split : Digunakan untuk memisahkan string menjadi array substring berdasarkan separator yang ditentukan.

const numbers = "1,2,3,4,5";
const numberArray = numbers.split(",");
console.log(numberArray); 
// Output: ["1", "2", "3", "4", "5"]

// 6. join : Digunakan untuk menggabungkan semua elemen dalam array menjadi sebuah string dengan separator yang ditentukan.

const fruits = ["apple", "banana", "orange"];
const fruitString = fruits.join(", ");
console.log(fruitString); 
// Output: "apple, banana, orange"

// 7. length : Mengembalikan jumlah elemen atau karakter dalam array atau string, atau jumlah argumen dalam objek Arguments.

const bio = "Nama saya yogi";
console.log(bio.length); 
// Output: 14
const paragraph = ["Nama", "saya", "yogi"];
console.log(paragraph.length);
// Output: 3

// 8. replace : Digunakan untuk mengganti suatu bagian dari string dengan string atau regular expression yang baru. 

const sentence = "I like to eat apples.";
const newSentence = sentence.replace("apples", "oranges");
console.log(newSentence); 
// Output: "I like to eat oranges."

// 9. splice : Digunakan untuk memodifikasi isi dari sebuah array dengan menghapus atau menambahkan elemen

const hobbies = ['soccer', 'voley', 'running'];
// Menghapus elemen pada indeks ke-1 (yaitu 'banana')
hobbies.splice(1, 1); 
// Output: ['voley']
console.log(hobbies); 
// Output: ['soccer', 'running']

// 10. pop :  Digunakan untuk menghapus elemen terakhir dari sebuah array dan mengembalikan elemen tersebut. 

const Kata = ['aku', 'sayang' ,'kamu'];
const lastKata = kata.pop(); // Output: 2
console.log(kata); // Output: [aku, sayang]
console.log(lastKata); // Output: kamu
f