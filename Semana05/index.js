
// // Exercicio 02
// const array = [2, 5, 7, 1 , 8, 12, 15, 26, 17, 19, 54, 61, 67]
// verificaPar = (num) => {
//     if (num % 2 == 0){
//         resultado = true
//     }else if (num % 2 == 1){
//         resultado = false
//     }
// };

// verificaImpar = (num) => {
//     if (num % 2 == 0){
//         resultado = false
//     }else if (num % 2 == 1){
//         resultado = true
//     }
// }

// filtro = (array, verifica) => {
//     let arrayFiltrado = [];
//     array.forEach(element => {
//         verifica(element)
//         if (verifica == true){
//             array.push(element)
//         }
        
//     });
//     console.log(arrayFiltrado)
// }

// filtro(array, verificaPar)

// array = [3, 2 , 5, 6, 7, 90, 23]

// const calcularMedia = (array) => {
//     let soma = 0;
//     for( let i = 0; i < array.length; i++ ){
//     soma += array[i];
// }

// let media = soma/array.length;
// console.log(media)
// }

// calcularMedia(array)

// array = [3, 2 ,-5, 6, -7, -9, 10 ]

// const separarPositivo = (array) => {
//     let positivo = array.filter(function(v) {
//         return v < 0;
// }
// )
// console.log(positivo)
// }
// array = [3, 4, -6, 0, -8, -1, 3, -6, 1, -8, -6, -1];
// const separarPositivo = (array) => {
//       pos = array.filter(function(v) {
//         return v > 0;
//       })
//       console.log(pos)
// }
// separarPositivo(array)

//Exercicio 03

// Utilize o if ternário para construir uma função 
// que recebe o número de dias e 
// retorna se o número pertence a primeira 
// ou a segunda quinzena

// const verificaDia = dia => dia <= 15 ? console.log("primeira quinzena") : console.log("segunda quinzena")

// verificaDia(10)


//Exercicio 04

// let array = [5, 2, 67, 37, 85, 19, 10];

// const localizaMaior = (array) =>{
//     maior = 0;
//     array.forEach((element) => {
//         if (maior < element) {
//           maior = element;
//         }
//       });
//       console.log(maior);
      
// }
// localizaMaior(array)

//Exercicio 06

// let array = [19,50,2,1,99]
// const ordenaArray = (array=[]) => {
//     return array.sort((a,b)=>a-b)
// }
// console.log(ordenaArray(array))