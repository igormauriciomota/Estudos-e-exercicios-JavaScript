// Aula 43 - Funçoes Callback 

function pegar_usuario(callback){

    window.setTimeout(function(){

        var u = {
            'nome': 'Igor'
        };

        callback(u);

    },2000);
}
        

        
pegar_usuario(function(user){
    console.log('Olá ' + user.nome + ', como vai?');
});

//----------------------------------------------------

// Aula 44 - Erros handling

function pegar_usuario(){

    window.setTimeout(function(){
        var u = {
            'nome': 'João'
        };
        return u;
    }, 1000);
    
}
        
function saudar_usuario(user) {
    console.log('Olá ' + user.nome + ', como vai?');
}

try {
// comandos que geraram erro utilizando o comanto (try) e colocando dentro dele para evitar o erro
var user = pegar_usuario();
saudar_usuario(user);
} catch {
    console.log('Olá, como vai?') ;
} finally {
    console.log('Este comando sera sempre executado');
}


console.log('Novo comando para executar ao final');

//---------------------------------Em branco

function saudar_usuario(user) {
    console.log('Olá ' + user.nome + ', como vai?');
}

var user = {'nome': ''};

try {

    if (user.nome == '') {
        throw 'Nome em Branco';
    }

} catch(err) {
    console.log(err);
}

// Aula 45 - Operador If Ternário

var nome = "";

if (nome) {
    var mensagem ="Olá " + nome;
} else {
    var mensagem = "Nome não informado";
}

console.log(mensagem);

//-----1- forma de escrever menos codigo--------------------

var mensagem;

nome ? mensagem = "Olá " + nome : mensagem = "Nome não informado";

console.log(mensagem);

//-----2- forma de escrever menos codigo--------------------

// If ternario

var mensagem;

mensagem = nome ? "Olá " + nome : "Nome não informado";

console.log(mensagem);

//-----3- forma de escrever muitos codigo-como o Operador If Ternário-

nome = "";
idade = "";

mensagem = (nome && idade) ? "Olá " + nome + ",  voce tem " + idade + " anos."
: (!nome && !idade) ? "Nome e idade não informado"
: (!idade) ? "Idade não informado"
: "Nome não informado";

console.log(mensagem);

// Aula 46 - Escopo dois tipos de escopo global e local
// variavel local

function criar_nome() {
    var nome = 'Maria';
    console.log(nome); // O console mostrará 'Maria'
}

// Variavel Global (criar a variavel antes), dentro do objeto window---

var nome;

function criar_nome() {
    nome = 'Maria';
    console.log(nome); // O console mostrará 'Maria'
}

criar_nome();

console.log(nome);

// Objeto eindow - vaiavel foi criado fora do escopo global
// let dentro das estruturas de bloco / kiword (const)

var x = 0;

if (x== 0) {
    var nome = "Mariana";
}

console.log(nome);

for (let a = 0; a < 5; a++) {
    console.log(a);
}

//-Aula 47 - Namespaces -simulação colocar um nome que nao gere conflitos

//Ex; dentro do objeto


var meuWebapp1 = {

    'nome': "Igor",
    'ver_nome': function () {
        console.log(meuWebapp1);
    }
};


// dentro de uma função

var meuWebapp = (function(){

    var nome = "Igor";

    return {
        'ver_nome': function(){
            return nome;
        },
        'mudar_nome': function(novo_nome) {
            nome = novo_nome;
        },
        'apagar_nome': function() {
            nome = null;
        }
    }

})();
// mudar nome
meuWebapp.mudar_nome("João");
console.log(meuWebapp.ver_nome() );
// apagar nome
meuWebapp.apagar_nome();
console.log(meuWebapp.ver_nome() );

// Aula 48 - JSON.stringify/JSON.parse

//-> ele transforma um objeto ou array em uma string
var funcionario = {
    'nome': "Fernanda Costa",
    'd_nascimento': '1988-10-01',
    'CPF': '111.111.111-11'
};
//Transforma o Objeto em uma string
var funcionario_json = JSON.stringify(funcionario);

//Transforma uma string em um objeto
var funcionario_obj = JSON.parse(funcionario_json);

console.log(funcionario_obj);

// Aula 50 - Ajax Rrquest - Requisição de HTTP
// requisição HTTP, primeiro devemos criar um novo objeto XMLHttpRequest.

// uso normal de requisição
//-> var XMLHttp = new XMLHttpRequest();

// uso antigo a uma versão antiga do internet explore

var XMLHttp = new XMLHttpRequest();

// sempre colocar a função antes do pedido
// -> onreadystatechange: monitora qualquer mudança do estado da requisição,

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

// via "GET" ou "POST".

xhttp.open("GET", "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");
xhttp.send();

