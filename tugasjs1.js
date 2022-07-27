// soal 1
// Diketahui sebuah array seperti berikut 
// var arr = [10, 8, 15, 20, 1, 5, 7, 9, 1, 2, 25, 30, 8, 11, 35, 8, 40, 33]
// Buatlah sebuah fuction untuk mencetak bilangan prima dan urutkan mulai dari bilangan terkecil.

// soal 2
// Diketahui sebuah array seperti berikut 
// Var arr = [4, 10, 21, 25 ,30 ,50 , 43, 11, 41,30 ]
// Buatlah sebuah function untuk mencari nilai terbesar kedua.

// soal 3
// Buatlah sebuah function dengan satu parameter bilangan bulat (integer) dan dapat mengembalikan nilai tingkatan dengan ketentuan sebagai berikut:
// If 35 < score ≤ 40 , then grade = A.
// If 30 < score ≤ 35 , then grade = B.
// If 25 < score ≤ 30 , then grade = C.
// If 20 < score ≤ 25 , then grade = D.
// If 15 < score ≤ 20 , then grade = E.
// If 0 < score ≤ 15 , then grade = F.







// // Jawaban

// //soal 1

// //var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,40]
// var arr = [10, 8, 15, 20, 1, 5, 7, 9, 1, 2, 25, 30, 8, 11, 35, 8, 40, 33];
// //var arrnew =[]; 


// function deleteDuplicate() {
// var arrDup = [];
// var arrDupfirst = [];
// var arrDupsecond = [];

//     for (let i = 0; i < arr.length; i++) {
//         var totalDup = 0 ;
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[j] === arr[i]){
//                 totalDup += 1 ;
//             }
//         }
//         if(totalDup === 1){
//             arrDupfirst.push(arr[i]);
//         }else {
//             arrDupsecond.push(arr[i]);
//         }
//     }
//     //console.log(arrDupfirst)
//     //console.log(arrDupsecond)

//     var strDupfirst = "";
//     for (let x = 0; x < arrDupfirst.length; x++) {      
//         strDupfirst += arrDupfirst[x] + ", ";       
//     }
//     for (let a = 0; a < strDupfirst.length; a++) {
//         if(strDupfirst[a] === " "){
//             strDupfirst[a] === undefined;
//         }else if(strDupfirst[a] === ","){
//             arrDup.push(Number(strDupfirst[a-2]+strDupfirst[a-1]))
//         }
//     }

//     var arrDupsecondfinal = [];
//     for (let y = 0; y < arrDupsecond.length; y++) {
//         if (arrDupsecond[y] === arrDupsecond[y+1] ){
//             arrDupsecondfinal.push(arrDupsecond[y]);
//         }
//     }

//     var strDupsecond = "";
//     for (let z = 0; z < arrDupsecondfinal.length; z++) {      
//         strDupsecond += arrDupsecondfinal[z];       
//     }

//     for (let c = 0; c < strDupsecond.length; c++) {
//         for (let d = 0; d < strDupsecond.length; d++) {
//             if(strDupsecond[c]===strDupsecond[d]) {
//                 arrDup.push(Number(strDupsecond[c]))
//             }
//         }
//     }

//     return arrDup;
// }

// //console.log(deleteDuplicate())

// function prima () {
// var arrprima = []
// var arrnew = deleteDuplicate(arr)
// console.log(arrnew)
// for (let i = 0; i < arrnew.length; i++) {

//         var counter = 0;
//         for (let j = 0; j < arrnew.length; j++) {
//                 if(arrnew[i] % arrnew[j] === 0 && arrnew[i] != 9){
//                     counter+=1
//                 }
//         }
//         console.log(counter)
//         if(counter === 2 || counter === 1){
//             arrprima.push(arrnew[i]);
//         }
//     }    
//     return arrprima
// }
// console.log(prima());


//soal 2

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,40]
// // var arr = [4, 10, 21, 25 ,30 ,50 , 43, 11, 41,30 ]

    
// var result = [];

// function secondmax() {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr.length)
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i]>arr[j] && arr[i] < arr.length){
//                 result.push(arr[i])
//             }
//         }
//     }



//     return result;
// }

// console.log(secondmax())

//soal 3

var nilai = 19;
var rank = "";

function grade(nilai) {
    if(nilai > 35 && nilai <= 40){
        rank += "grade A";
    }else if(nilai > 30 && nilai <= 35){
        rank += "grade B";
    }else if(nilai > 25 && nilai <= 30){
        rank += "grade C";
    }else if(nilai > 20 && nilai <= 25){
        rank += "grade D";
    }else if(nilai > 15 && nilai <= 20){
        rank += "grade E";
    }else if(nilai > 0 && nilai <= 15){
        rank += "grade F";
    }else {
        rank += "Nilai 0";
    }
    return rank;
}
    
console.log(grade(nilai))

