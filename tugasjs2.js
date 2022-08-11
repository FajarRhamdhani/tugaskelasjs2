// Soal 

// Soal 1
// Print angka 10 sampai 100 dengan kondisi sebagai berikut:
// jika angka tersebut kelipatan 3, maka ganti angka tersebut dengan kata “Kelas”
// jika angka tersebut kelipatan 5, maka ganti angka tersebut dengan kata “Tambahan”
// Dan jika angka tersebut kelipatan 3, dan 5 maka ganti dengan kata “KelasTambahan”.

// Soal 2
// Diketaui sebuah string = “Selamat datang di kelas tambahan”, 
// buatlah sebuah function untuk mencetak kaliamat tersebut dengan menbalik huruf setiap kata, 
// sehingga akan menjadi seperti ini “tamaleS gnatad id salek nahabmat” 
// (1 fungsi js, yg bisa di pake untuk membalikkan kata)

// Soal 3
// Buatlah sebuah function untuk mengecek 2 buah kaliamat , jika kalimat tersebut anagram maka kembalikan 
// nilai true, jika bukan maka false, Contoh kata anagram (anda,nada);


// Jawaban

// Soal 1

// function changeName() {
//     var strFirst = "";
//     var strSecond = "";
//     var strChange = "";
//     for (let i = 10; i <= 100; i++){
//         if(i % 3 === 0 ) {
//             strFirst += "Kelas, "
//         }else if(i % 5 === 0) {
//             strFirst += "Tambahan, "
//         }
//     }
//     for (let j = 0; j < 100; j++) {
//         if(j % 3 === 0 && j % 5 === 0) {
//             strSecond += "KelasTambahan, "
//         }
//     }
//     strChange = strFirst + strSecond;
//     return strChange;
// }
//  console.log(changeName());


// Soal 2

// function strReverse() {
//     var str = "Selamat datang di kelas tambahan";
//     var strChange = "";
//     var result = "";

//     for (let i = str.length-1; i >=0; i--) {
//         strChange += str[i];  
//     }

//     var strNew = "";
//     var strArr = [];
//     for (let i =0 ; i < strChange.length; i++) {
//         if(strChange[i] !== " "){
//             strNew += strChange[i];
//         }else{
//             strArr.push(strNew);
//             strNew = "";
//         }
//     }
//     strArr.push(strNew);

//     for (let j = strArr.length-1; j >=0; j--) {
//         result += strArr[j] + " ";
//     }

//    return result;
// }
// console.log(strReverse())

//soal 3

// function anagram() {
// var alphabet= "abcdefghijklmnopqrstuvwxyz"
// var strOne = "anda";
// var strTwo = "nada";
// var resultone = "";
// var resulttwo = "";

//     for (let i = 0; i < alphabet.length; i++) {
//         for (let  j= 0;  j< strOne.length; j++) {
//             if(alphabet[i]===strOne[j]){
//                 resultone+=alphabet[i]
//             }

//         }    
//     }

//     for (let x = 0; x < alphabet.length; x++) {
//         for (let  y= 0;  y< strTwo.length; y++) {
//             if(alphabet[x]===strTwo[y]){
//                 resulttwo+=alphabet[x]
//             }

//         }    
//     }

//     if(resultone === resulttwo){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(anagram())
