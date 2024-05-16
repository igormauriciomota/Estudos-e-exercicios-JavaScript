//====================================== VARIAVEIS

//Aula 03 - #Variavel->Nao pode usar identificadores Keyword. Não usar asentos;
// Variaveis e usado p/armazenar os valores de dados, sensível a letras maiúsculas e minúsculas.

//podendo ser usado;
// Letras,
// Numeros(nao pode ser no Inicio),
// Underline(_),
// Cifraõ ($),

var latitude = 40.87663;
var longitude = -8.08373;

console.log(latitude);
console.log(longitude);

//====================================== CONCATENAÇÃO

// Aula 4 - STRINGS - Não se usa calculo (e considerado uma sequencia de cacacter)

// dados Strings tipo de texto utiliza aspas duplas ou simples ("") Tipos primitivos;
// Pode usar concatenação,

var nome = "João";  // podem ser usadas aspas duplas
var sobrenome = 'Gomes';  // ou aspas simples
var cpf = '111.111.111-11';
var telefone = "998887655";
var ddd = '31';

console.log('Nome completo: ' + nome + ' ' + sobrenome);

console.log('Telefone com DDD: '+'(' + ddd + ')' + '-' + telefone);

//==================================== NUMEROS
// Aula 5 - Numbers

//Números (ou numbers) podem ser positivos, negativos, inteiros ou decimais (também chamados de floats).

var ano_nascimento = 1986;
var preco = 16.99;  // floats devem ser usadas com ponto, nunca com vírgula.
var temperatura = -5;
var numero_grande = 2.2e45; /* números muito grandes podem ser representados em Javascript pela notação exponencial.
Neste exemplo, este número significa 2.2 x 1045 */


var n1 = 10;
var n2 = 20;
var n3 = 30;
var n4 = 50;

var soma = n1 + n2 + n3 + n4;
var media = (n1 + n2 + n3 + n4) / 2;
var subtracao = n4 - n2;
var multiplicacao = n1 * n2;

console.log('Media: ' + media);
console.log('Soma total: ' + soma);

//===================================== Booleans

// Aula 6 - Tipos de dados Booleans

// Booleanos (ou booleans) são os valores verdadeiro (true) e falso (false).
// Eles são fundamentais e governam a lógica das estruturas condicionais

// verificar se o valor 60 e menor que 65 (determina se o valor e verdadeiro ou falso).

// ===Operador de Comparação
var teste = 65 < 60;
var test = 59 < 60;

console.log(teste);
console.log(test);

// ===Operador de igualdade

var idade = 65;
var teste = idade == 65;

console.log(teste);

//Verificar de que tipo e a variavel

var vtype = true;
var vtype1 = 65;
var vtype2 = "teste";


console.log(typeof vtype); // resultado = boolean
console.log(typeof vtype1); // resultado = number
console.log(typeof vtype2); // resultado = string
console.log(typeof vtype2 == "number"); //Verificar se a variavel e do tipo number. retorna (verdadeiro ou falso)


//============================ null e undefined

// Aula 7 - Tipos de dados null e undefined
// undefined tambem e um tipo de dados,

var undf;
var undf1;

console.log(undf); // undefined
console.log(typeof undf1); // undefined

var nome = "pedro";

console.log(nome[5]);

// null e undefined nao sao do mesmo tipo

var temperatura = 35;
console.log(temperatura);

temperatura = null;
console.log(temperatura);

//===FOLHA DE EXERCICIO=====



// Click aprender 
/*document.getElementById("area").innerHTML = area;

var a = window.document.getElementById('area');
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerHTML = 'Clicou'
    a.style.background = 'red'
}

function entrar() {
    a.innerHTML = 'Entrou'
}

function sair() {
    a.innerHTML = 'saiu'
    a.style.background = 'green'
}*/

//   Os comandos "break" e "continue" agem sobre a execução de um
// bloco de código e são usados principalmente com loops.

// Aula 29 -  "break" e "continue"


console.log('Exercicio-01--------');

var x = 0;

while (x < 10) {
    console.log(x);
    x++;

    if (x==5) {
        break;
    }
}

console.log('Exercicio-02--------');

var lista = [1,5,9,33,56,89,100,122,145,189,190,199,205,290];

for (a = 0; a < lista.length ; a++) {
    if (lista[a] == 33) {
        console.log('valor encontrado');
    }
    console.log('Tentativa: ' + a);
}

console.log('Exercicio-03---break-interrompe o ciclo----');

var lista = [1,5,9,33,56,89,100,122,145,189,190,199,205,290];

for (a = 0; a < lista.length ; a++) {
    if (lista[a] == 33) {
        console.log('valor encontrado');
        break;
    }
    console.log('Tentativa: ' + a);
}

// comando continue pula o valor selecionado  ex 0 1 4 5 pula o 3
console.log('Exercicio-04--"continue"-----');

var num = 0;

while (num < 20) {

    if (num == 3) {
        num++;
        continue;
    }

    console.log(num);
    num++;

}

console.log('Exercicio-05--"continue"--numero Impar---');

var num = 0;

while (num < 20) {
    num++;
 // modulo e o simbolo de porcentagem %.
    if (num % 2 == 0) {
        continue
    }

    console.log(num);


}

// --
// Aula 52 - Ajax co jQuery
// Cria um Objeto
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8be1aae68be7f754a864aa5026fb84c7",
    type: "GET",
    dataType: "json",
    success: function(data) {
        console.log(data);
    },
    error: function() {
        console.log('Erro na requisição');
    }
});



$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=London&mode=html&appid=8be1aae68be7f754a864aa5026fb84c7",
    type: "GET",
    dataType: "json",
    success: function(data) {
        console.log(data);
    },
    error: function() {
        console.log('Erro na requisição');
    }
});

// Aula 52 - Ajax co jQuery
// Cria um Objeto-> utilizar sempre http:// nao e usado X https

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8be1aae68be7f754a864aa5026fb84c7",
    type: "GET",
    dataType: "json",
}).done(function(data) {
    console.log(data.main.temp);
}).fail(function(){
    console.log('Erro na requisição');
});

// Cria um Objeto-> utilizar sempre http:// nao e usado X https

$.ajax({
    url : "http://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8be1aae68be7f754a864aa5026fb84c7",
    type: "GET",
    dataType: "json",
    success: function(data){
        console.log(data.main.humidity);
        console.log(data.main.temp);
        console.log(data.main.temp_max);
        console.log(data.main.temp_min);
    },
    error: function(){
        console.log("Erro na requisição");
    }
});


//Exercicio Aula 52

function apresentar_dados(data) {

    $("#temp_atual").html(data.main.temp);
    $("#temp_max").html(data.main.temp_max);
    $("#temp_min").html(data.main.temp_min);

}

function pegar_dados (callback) {

    $.ajax({
        url : "http://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8be1aae68be7f754a864aa5026fb84c7",
        type: "GET",
        dataType: "json",
    }).done(function(data){
        callback(data);
    }).fail(function(){
        console.log('Erro na requisição');
    });

}

pegar_dados(apresentar_dados);

// Exercicio 05 
// 01-Popule o select box abaixo com a lista de países do mundo. A tarefa deve ser realizada em duas partes:
//->name - altSpellings - area - capital - continents - languages


function pegar_paises(callback) {

    $.ajax({
        url : "https://restcountries.com/v3.1/all",
        type: "GET",
        dataType: "json",
    }).done(function(data){
        callback(data);
    }).fail(function(){
        console.log('Erro na requisição');
    });

}

function popular_paises(paises) {
    //lup for - Array
    for (var a = 0; a < paises.length; a++) {
        document.getElementById("paises").innerHTML += '<option selected value="' + paises[a].altSpellings + '">' + paises[a].altSpellings + '</option>';
    }
}

pegar_paises(popular_paises);



// 02- Crie uma função para receber o array abaixo como argumento e calcular a média de avaliações
//dos cursos e soltá-las no console. Use Try/Catch/Throw para atender às condições abaixo:

var cursos = [
    {
        "titulo": "PHP",
        "aval": []
    },
    {
        "titulo": "Javascript",
        "aval": [5,5,4.5,4,5,5,5,4.5]
    },
    {
        "titulo": "Python",
        "aval": [5,5,4,4,5,3,5,4,4,5]
    },
    {
        "titulo": "Machine Learning",
        "aval": [5,5,4.5]
    }
];

function media_aval(lista_cursos) {

    for (var a = 0; a < lista_cursos.length; a++) {

        try {

            if (lista_cursos[a].aval.length == 0) {
                throw 'curso ' + lista_cursos[a].titulo + ' não possui avaliações.';
            } else if (lista_cursos[a].aval.length < 5) {
                throw 'curso ' + lista_cursos[a].titulo + ' possui menos de 5 avaliaçoes.'
            }

            var soma = 0;

            for (var b = 0; b < lista_cursos[a].aval.length; b++) {
                soma += lista_cursos[a].aval[b];
            }

            var media = soma / lista_cursos[a].aval.length;

            console.log('curso ' + lista_cursos[a].titulo + ' tem média de avaliaçoes: ' + media.toFixed(2));

        }

        catch(err) {
            console.log(err);

        }


    }
}

media_aval(cursos);

// 03- 





