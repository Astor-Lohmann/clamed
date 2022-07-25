//Exercicio 01

// function parImpar (num1) {
//     if (num1 % 2 == 0) {
//         console.log("o número é par")
//     } else if(num1 % 2 == 1 ) {
//         console.log("o número é impar")
//     }
// } 

// parImpar(4)

//Exercicio 02

// array = [2, 3, 6, "J", "O"]


// function scanArray () {
//     for (i in array) {
//         console.log(array[i])
//     }
//     console.log("A Quantidade de elementos é:", array.length)
// }

// scanArray(array)

//Exercicio 03

// let arrayNumeros = [1, 3, 5, 6, 13 , 8, 45, 12, 7, 33];
// let par = [];
// let impar = [];
// console.log(arrayNumeros)

// function imprimeParImpar (array) {

//     for (i in array){
//         if (array[i] % 2 == 0) {
//             par.push(array[i])
//         } else if(array[i] % 2 == 1 ) {
//             impar.push(array[i])
//         }
//     }
//     return console.log(arrayNumeros.length ,par.length, impar.length)

// } 

// imprimeParImpar(arrayNumeros)
// document.write("<h2>A quantidade informada foi: " + arrayNumeros.length + ", a de valores pares foi: " + par.length + ", a de valores impares foi: " + impar.length + "</h2>")

//Exercício 04

// const textoAzul = document.getElementById("bluediv")

// const span1 = document.createElement("span")
// span1.innerText = "Div1 "
// span1.style.color = "blue"
// textoAzul.appendChild(span1)

// const span2 = document.createElement("span")
// span2.innerText = "Div2 "
// span2.style.color = "blue"
// textoAzul.appendChild(span2)

// const span3 = document.createElement("span")
// span3.innerText = "Div3"
// span3.style.color = "blue"
// textoAzul.appendChild(span3)

// const span4 = document.createElement("span")
// span4.innerText = "Div4"
// span4.style.color = "blue"
// textoAzul.appendChild(span4)

// const span5 = document.createElement("span")
// span5.innerText = "Div5"
// span5.style.color = "blue"
// textoAzul.appendChild(span5)

//Exercicio 05

// const textos = ["texto 1", "texto 2", "texto 3", "texto 4", "texto 5"]

// function adicionaTextos(listaDeTextos) {
//   const divTextos = document.getElementById("textos")
//   for (texto of listaDeTextos) {
//     const span = document.createElement("span")
//     span.innerText = texto
//     // se a questão pedisse para adicionar cor pelo JS
//     // span.style.color = "blue"
//     divTextos.appendChild(span)
//   }
// }
// adicionaTextos(textos)


//Exercicio 06

function listaMercado() {
    const input = document.getElementById("input1")
    const item = input.value


    const itemLista = document.createElement("li")
    itemLista.innerText = item
    
    const listaDoMercado = document.getElementById("input1")
    listaDoMercado.appendChild(itemLista)
}

//Exercicio 08

// function adicionaMensagem(){
//   const input = document.getElementById("input-mensagem")
//   const valorDoInput = input.value

//   const mensagem = document.getElementById("aparece-mensagem")
//   mensagem.innerHTML = valorDoInput
// }

// function salvaMensagem(){
//   const input = document.getElementById("input-mensagem")
//   const valorDoInput = input.value
//   const mensagem = document.getElementById("aparece-mensagem")
//   const valorDaMensagem = mensagem.innerHTML


//   if (valorDoInput.length === 0 && valorDaMensagem.length === 0) {
//     alert("Por favor, informe uma mensagem")
//   }
//   else {
//     localStorage.setItem("mensagem", valorDoInput)

//     alert("Mensagem salva com sucesso")
//   }
// }

// function mostraMensagem() {
//   const mensagemDoLocalStorage = localStorage.getItem("mensagem")
//   const divApareceMensagem = document.getElementById("aparece-mensagem")
//   if (mensagemDoLocalStorage === null) {
//     divApareceMensagem.innerHTML = "Não há mensagem salva"
//   }
//   else {

//     divApareceMensagem.innerHTML = mensagemDoLocalStorage
//   }
// }