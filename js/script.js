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

// Função dinamica

function soma_args(num1,num2) {
    var soma = num1 + num2;
    console.log(soma);
};

var n1 = 50;
var n2 = 30;

soma_args(n1,n2);

console.log('--------------------------');

console.log("Treino 7 Função string");

function valor_imc(peso,altura) {
    var imc = peso / (altura * altura);
    return imc;
};

var meu_peso = document.getElementById("peso").innerHTML;
var minha_altura = document.getElementById("altura").innerHTML;

var meu_imc = valor_imc(meu_peso,minha_altura);

document.getElementById("imc").innerHTML = meu_imc.toFixed(2);

console.log('--------------------------');

console.log('Array');

var alunos = [ "João" , "Maria", "José" ];
var num_primos = [ 2, 3, 5, 7, 11, 13 ];

console.log(alunos.length);
console.log(num_primos[2]);
console.log(num_primos[10]);

console.log('---------------------------------------');

console.log('Array' + ' multi dimencionais ');

var grupos = [
    [ "João" , "Maria" ],  //Primeiro elemento (0)
    [ "Pedro" , "Joana", "André", "Júlio" ], //segundo elemento (1)
    [ "Carolina" , "Helena", "Marcelo" ] //terceiro elemento (2)
];

console.log(grupos.length);
console.log(grupos[1]);
console.log(grupos[1] [1]);

console.log('---------------------------------------');

//============================================

// Operações com arrays

// Push - Adiciona elementos ao final de um array
// Pop - Remove o último elemento de um array
// hift - Remove o primeiro elemento de um array
// Unshift - Adiciona elementos ao início de um array

var cursos = [ "HTML", "Python", "PHP" ];

cursos.push("Javascript");

console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

cursos.unshift("Bootstrap");

console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

cursos.pop();

console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

cursos.shift();

console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]

console.log('---------------------------------------');

console.log('Mudar o nome' + '"pão branco", "queijo", "presunto"');

var ingredientes = ["pão branco", "queijo", "presunto" ];

ingredientes[0] = "pão integral";

console.log(ingredientes);

ingredientes[3] = "maionese";

console.log(ingredientes);

//Para acrescentar sempre usaar o push ou o Unshift.

ingredientes.push("pão frances", "mostarda");

console.log(ingredientes);

console.log('---------------------------------------');

// Array 0 e o joão

alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ]; // console: ["João" , "Maria", "José"]

console.log(alunos.slice(0,3));
console.log(alunos.slice(0,-2));
console.log(alunos.slice(-2));
console.log(alunos.slice(-1));

alunos.push("Luiz", "Igor");

console.log(alunos);

console.log('---------------------------------------');

// ============ Objetos =====================

console.log('Objetos');

var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
};

console.log(funcionario['nome']);
console.log(funcionario.ano_nasc);

funcionario.cargo = "Gerente de T.I";
funcionario.cnh = "1982736455";

console.log(funcionario);

console.log('---------------------------------------');

console.log('Arreys e Objetos multe dimencionais');

var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
];

console.log(cursos[1].categorias[0]);

cursos[2].categorias[1] = "Administração de empresas";

console.log(cursos);

console.log(cursos[2].categorias[1]);


console.log('---------------------------------------');

console.log('Metodos de objetos'); // Açoes que podem ser aplicada em um objeto.

var aluno = {
    'nome': 'Maria',
    'sobrenome': 'Pereira',
    'ano_nasc': 1992,
    'nome_completo': function () {
        var n_completo = this.nome + " " + this.sobrenome;
        return n_completo;
    },
    'ver_idade': function () {
        var idade = 2024 - this.ano_nasc;
        return idade;
    }
};

console.log( aluno.nome_completo() );

console.log('A idade e: ' + aluno.ver_idade());


console.log('---------------------------------------');


console.log('Metodos de objetos ex1'); // Açoes que podem ser aplicada em um objeto.

var aluno = {
    'nome': 'Maria',
    'sobrenome': 'Pereira',
    'ano_nasc': 1992,
    'ano_atual': 2024,
    'idade': function () {
        var idad = this.ano_atual - " " - this.ano_nasc;
        return idad;
    }
};

console.log( aluno.idade() );

console.log('---------------------------------------');

// cosole e um -> objeto
// log e um argumento

console.log( typeof document.getElementById("tudo_obj") );

console.log( document.getElementById("tudo_obj").innerHTML );

//parsefloat -> transformar em numero uma string
console.log('exercicio 01');

var nun1 = parseFloat(document.getElementById("num_1").innerHTML);
var nun2 = parseFloat(document.getElementById("num_2").innerHTML);
var soma_nun = nun1 + nun2;

document.getElementById('resultado').innerHTML = "<strong>" + soma_nun + "</strong>";

console.log('--------------------------');

//--------------------------------------
// Ex: 02

console.log('Exercicio 02');

function celsiusToFahrenheit(temp_c) {
    var temp_f = (9 * temp_c / 5) + 32;
    return temp_f;
};


var celsius = parseFloat(document.getElementById("caixa_azul1").innerHTML);

var fahrenheit = celsiusToFahrenheit(celsius);

document.getElementById("caixa_amarela1").innerHTML = "<strong>" + fahrenheit + "</strong>";

console.log('--------------------------');

//--------------------------------------
// Ex: 03  "Mariana", "Felipe" e "Carla".

console.log('Exercicio 03');

var grupos = [
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
];

var novos_grupos = grupos.slice(-2);

novos_grupos.push([ "Mariana", "Felipe", "Carla" ]);

console.log(novos_grupos);


console.log('--------------------------');

//--------------------------------------
// Ex: 04

console.log('Exercicio 04');

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'total_aval': function () {
        var t_aval = this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela;
        return t_aval;
    },
    'media_aval': function () {
        var m_aval = ( ( 5 * this.n_aval_5_estrelas ) + ( 4 * this.n_aval_4_estrelas ) + ( 3 * this.n_aval_3_estrelas ) + ( 2 * this.n_aval_2_estrelas ) + ( 1 * this.n_aval_1_estrela ) ) / (this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela);
        return m_aval;
    }
}

var cat_principal = curso.categoria[0];

document.getElementById("categoria_principal").innerHTML = cat_principal;

var total_av = curso.total_aval();

var media_av = curso.media_aval().toFixed(2); // sempre colocar o parenteses e dentro quantas casas decimais

document.getElementById("media_aval").innerHTML = media_av;

document.getElementById("total_aval").innerHTML = total_av;



console.log('--------------------------');

//--------------------------------------
// Ex: 05 --  Criar o Objeto+

console.log('Exercicio 05');

var pessoa = {
    'nome': 'Marina',
    'sobrenome': 'Lopes',
    'email': 'igormota@gmail.com'
};

function criar_tabela(person) {
    var tabelaHTLM = '<div class="tableBox">';
    tabelaHTLM +=       '<table>';
    tabelaHTLM +=           '<tr>';
    tabelaHTLM +=               '<th>Nome Completo</th>';
    tabelaHTLM +=                '<th>Email</th>';
    tabelaHTLM +=           '</tr>';
    tabelaHTLM +=           '<tr>';
    tabelaHTLM +=               '<td>' + person.nome + ' ' + person.sobrenome + '</td>';
    tabelaHTLM +=               '<td>' + person.email + '</td>';
    tabelaHTLM +=           '</tr>';
    tabelaHTLM +=        '</table>';
    tabelaHTLM +=     '</div>';
    return tabelaHTLM;
}

var tabela = criar_tabela(pessoa);

document.getElementById("tabela").innerHTML = tabela;


console.log('--------------------------');

//--------------------------------------

// Eventos Aula 16

document.getElementById("click-me").onclick = function () {
    alert("Voce clicou no botão");
};

console.log('--------------------------');

//--------------------------

document.getElementById("hover-me").onmouseover = function () {
    alert("Voce passou com o cursor no botão");
};

//-------------------------

document.getElementById("leave-me").onmouseout = function () {
    alert("Voce saiu com o cursor do botão");
};

//----------------------------------

document.onkeydown = function() {
    alert('Você apertou a tecla: ');
};

//========================================================= Eventos Js

function eventoClick() {
    //alert('Adicinou um evento de Click');
    document.body.style.backgroundColor = "yellow";
}

//============================================================== JQuery

// Aula 34 - jQuery - Sintaxe
// em JS => document.getElementById("exemplo").innerHTML = "Olá";
// ex: quando for urar os elementos => $("div").ação(); - $("p").ação();
// ex: class(.) ou id(#) => $("#exemplo").ação();
//ex: .ação(); = .html("olá"); = .css("");

//$("#exemplo").html("Olá");

$("#esconder").click(function(){
    $(".exemplo").css("display","none");
});

//==============================================================

