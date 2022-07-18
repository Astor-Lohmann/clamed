//Exercicio 01

// const nome = window.prompt("Digite seu nome");

// console.log(nome)

//Exercicio 02

// const nome = window.prompt("Digite seu nome");
// const email = window.prompt("digite seu e-mail")

// document.write("<h4>Seu nome é: " + nome + " e seu e-mail é: " + email + "</h4>")

//Exercicio 03

// const num1 = parseFloat(prompt("Digite um número"));
// const num2 = parseFloat(prompt("Digite outro número"));

// function somaNumeros(a, b) {
//     let resultado = a + b;
//     return document.write("<h2>A soma dos numeros é: <h2>" + resultado)
// };

// somaNumeros(num1, num2)

//Exercicio 04

// function imprimeBooleano(a,b,c) {
//     let num1 = parseFloat(a)
//     let num2 = parseFloat(b)
//     let num3 = parseFloat(c)
//     let booleano = num1==3 && !num2<=4 || num3==8;
//     console.log(booleano)
// }

// imprimeBooleano(2, -3, 4)

//Exercicio 05

// const num1 = parseFloat(prompt("Digite um número"))
// function imprimeParImpar(num1) {
//     if (num1%2 != 0){
//        return document.write("<h3>O número é ímpar</h3>")
//     } 
//     else {return document.write("<h3>O número é par</h3>")}
    
// }

// imprimeParImpar(num1)

//Exercicio 06

// const peso = prompt("Digite sua peso")
// const altura = prompt("Digite sua altura")

// function imprimeImc(peso, altura) {
//     let imc = peso/(altura*altura);
//     if (imc >= 25) {
//        return alert("Você está acima do peso, procure um médico");
//     } else if (18,5 < imc < 24,9) {
//         return document.write("<h3>PARABÉNS!! Você está no peso ideal</h3>")
//     } else {
//         return document.write("<h3>Você está abaixo do peso, procure um médico.</h3>")
//     }
// }

// imprimeImc(peso, altura)

// const userreview = prompt("Deixe sua avaliação");
// const reviews = [];

// for (i=0, i <= 4; i++){
//     while (i <= 4) {
//         i++
//         review.
//     }
// }

//Exercicio 08

// for(i=0; i <= 50; i++) {
//     document.write(5 + " x " + i + " = " + 5*i + "</br>")
// }

// for(contador = 1; contador <= 10 ; contador++){
//     if(contador%2 == 0){
//         document.write(contador+"<br />");
//     }
// }

//Exercicio 09


//Exercicio 10

const totalnota = [];


const sistemaNota = function () {
    const nome = prompt("Digite seu nome")
    i = 1
    while (i <= 4) {
        const nota = parseFloat(prompt("Digite a nota"))
        totalnota.push(nota)
        i++
    }

        let soma = 0;
        for (i in totalnota) {
            soma += totalnota[i]
        }
        const media = soma/totalnota.length

    
    if (media >= 7) {
        document.write("<h4>Nome: </h4>" + nome + "</br>" + "<h4>Média: </h4>" + media + "<h3>Parabéns! Vocẽ foi aprovado!</h3>" )
    } else if (media < 7 ) {
        document.write("<h4>Nome: </h4>" + nome + "</br>" + "<h4>Média: </h4>" + media + "<h3>Que pena! Vocẽ foi reprovado!</h3>" )
    }
    }

sistemaNota()