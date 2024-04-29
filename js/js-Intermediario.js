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