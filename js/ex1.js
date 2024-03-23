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

var potencia = Math.pow(32,6); //Math.pow = potencia

console.log('Potencia 32,6 = ' + potencia);

console.log("Solte no console o resultado da operação 32,6.");

console.log('--------------------------');

console.log("Questão 6");



console.log("O arquivo 'ex1.js' está funcionando");

console.log('--------------------------');

//Trabalhando com Dom;

console.log("Treino 1");


console.log("Trabalhando com Dom");

document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Folha de Exercícios JavaScript' + '</h1>';

console.log('--------------------------');

console.log("Treino 2");

console.log("Trabalhando com Dom adicionar h1 em um titulo");

var conteudo = document.getElementById("caixa_azul").innerHTML;

document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo + '</h1>';

console.log('--------------------------');

// Aula 11 - Funçoes; => function
console.log("Treino 3");

function soma_numeros() {
    var x = 5;
    var y = 2;
    var soma = x + y;
    console.log(soma);
}

soma_numeros(); //Dentro do parenteses usa argumentos/invocar a funçao desta forma

console.log('--------------------------');

console.log("Treino 4 Função");

function media_aluno() {
    var aluno1 = 10;
    var aluno2 = 6;
    var aluno3 = 7;
    var aluno4 = 8;
    var media = (aluno1 + aluno2 + aluno3 + aluno4) / 2;

    console.log(media);
}
//Invocar a função;
media_aluno();

console.log('--------------------------');

console.log("Treino 5 Função dinamica");

// Função dinamica

function soma_args(num1,num2) {
    var soma = num1 + num2;
    console.log(soma);
}

soma_args(10,25);
soma_args(100,125);
soma_args(110,250);

console.log('--------------------------');

console.log("Treino 6 função");

// Função dinamica

function soma_args(num1,num2) {
    var soma = num1 + num2;
    console.log(soma);
}

var n1 = 50;
var n2 = 30;

soma_args(n1,n2);

console.log('--------------------------');

console.log("Treino 7 Função string");

function valor_imc(peso,altura) {
    var imc = peso / (altura * altura);
    return imc;
}

var meu_peso = document.getElementById("peso").innerHTML;
var minha_altura = document.getElementById("altura").innerHTML;

var meu_imc = valor_imc(meu_peso,minha_altura);

document.getElementById("imc").innerHTML = meu_imc.toFixed(2);

console.log('--------------------------');

console.log("Treino 8 Função numero (number)");

function valor_imc(peso,altura) {
    var imc = peso / (altura * altura);
    return imc;
}

var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
console.log(typeof meu_peso);
var minha_altura = parseFloat(document.getElementById("altura").innerHTML);

var meu_imc = valor_imc(meu_peso,minha_altura);

document.getElementById("imc").innerHTML = meu_imc.toFixed(2);


onsole.log('--------------------------');

console.log("Treino 9 Tipo de dados (Arrays) ");







