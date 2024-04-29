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
