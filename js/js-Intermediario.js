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

