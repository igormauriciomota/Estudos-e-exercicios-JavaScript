//Questão 01-Mensagem no console

console.log("Questão 1");

console.log("O arquivo 'ex1.js' está funcionando");

console.log('--------------------------');

//Questão 02-Nome e Sobrenome ano nascimento

console.log("Questão 2");

var nome = "Igor";
var Sobrenome = "Mota";
var ano_nasc = "1985";
var ano_atual = "2024";
var idade = ano_atual - ano_nasc;

console.log('Olá, eu me chamo: ' + nome +' '+ Sobrenome +' '+ 'tenho: ' +' '+ idade +' '+ 'anos e estou estudando Javascript');

console.log("Olá, eu me chamo _____________, tenho _____ anos e estou estudando Javascript");

console.log('--------------------------');

console.log("Questão 3");

var aluno = "Pedro";
var matricula = "1234";
var n1 = 9;
var n2 = 8;

var media = (n1 + n2) / 2;

console.log("O aluno " + aluno + ", matrícula " + matricula + " obteve a média final " + media);

console.log('--------------------------');

//Crie uma variável para guardar um número de telefone celular e teste para saber se o número tem 9 dígitos.
//Se tiver, solte no console: "Resultado do teste: true". Caso contrário, solte: "Resultado do teste: false".

console.log("Questão 4");

var telefone = "981229855";


console.log("Resultado do teste: " + (telefone.length == 9)); // colocar o parenteses para que seja realizado primeiro a verificação

console.log('--------------------------');

console.log("Questão 5");

var potencia = Math.pow(32,6);

console.log('Potencia 32,6 = ' + potencia);

console.log("Solte no console o resultado da operação 32,6.");

console.log('--------------------------');