
// Exercicio 01

// let idade = 29;
// const nome = "Astor Palmeira";
// var apresentacao = console.log("Olá meu nome é " + nome + " e tenho " + idade + "anos")


// Exercício 02:

// class Pato{
// 	especie;
// 	alimentacao;
// 	tamanho;
	
// 	constructor(especie, alimentacao, tamanho){
// 	this.especie = especie;
// 	this.alimentacao = alimentacao;
// 	this.tamanho = tamanho;
// }

// comer(){}
// voar(){}
// quack(){}
// }

// const novoPato = new Pato();
// novoPato.especie = "pato-real"
// novoPato.alimentacao = "insetos"
// novoPato.tamanho = "83cm"

// console.log(novoPato)


//Exercicio 04:

// class Pessoa{
//     nome;
//     idade;
//     cpf;
  
//     constructor(nome, idade, cpf){
//       this.nome = nome;
//       this.idade = idade;
//       this.cpf = cpf
//     }

//     podeDirigir(idade = this.idade){
//         if (idade >= 18){
//             return true;
//         }else {
//             return false
//         }

//     }
//   }

//   const paulo = new Pessoa();
//   paulo.nome = "Paulo"
//   paulo.idade = 22

//   console.log(paulo)


//Exercicio 06

// const cidades = [
//     { nome: 'Patos de Minas', populacao: 153585 },
//     { nome: 'Lages', populacao: 157349 },
//     { nome: 'Ibiúna', populacao: 79479 },
//     { nome: 'Maringá', populacao: 403063 },
//     { nome: 'Curitiba', populacao: 1963726 },
//     { nome: 'Florianópolis', populacao: 508826 },
//     { nome: 'Pato Branco', populacao: 84779 },
// ];


// function filtro (cidades) {
//     return cidades.populacao >= 200000
// // }

// // const grandesCidades = cidades.filter(filtro);
// // console.log(grandesCidades)

// //Exercicio 07

// let arrayAlunos = [
//     {
//         nome: "Carlos",
//         media: 10
//     },
//     {
//         nome: "Julia",
//         media: 8
//     },
//     {
//         nome: "Rayane",
//         media: 6
//     },
//     {
//         nome: "Arthur",
//         media: 5
//     }
// ]

// function filtro () {
//     arrayAlunos.forEach(element => {
//         if (element.media > 7) {
//             return true
//         } else {
//             return false
//         }
        
//     });
// }
// function notaFinal (filtro) {
//     if (filtro === true) {
//         return parabens
//     } else {
//         return 
//     }
// }