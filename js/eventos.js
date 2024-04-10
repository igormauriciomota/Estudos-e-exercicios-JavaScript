
//==================== Eventos Js


function eventoDblClick() {
    alert('Evento de clique duplo');
}

function eventoClick1() {
    document.body.style.backgroundColor = "yellow";
}

function eventoClick2() {
    document.body.style.backgroundColor = "white";
}

function button_clicked() {
    alert("Voce clicou no botão");
}

document.getElementById("botao_cor").onclick = function() {
    document.getElementById("botao_cor").style.height = "100px";
};

document.getElementById("botao_cor1").onclick = function() {
    document.getElementById("botao_cor1").style['background-color'] = "black";
};

document.getElementById("botao_cor2").onclick = function() {
    document.getElementById("botao_cor2").style['background-color'] = "black";
    document.getElementById("botao_cor2").style.transform = "translateX(100px)";
};

// Para evitar escrever muitos codigos pode usar a Kiword (this.)

document.getElementById("botao_cor3").onclick = function() {
    this.style['background-color'] = "red";
    this.style.transform = "translateX(150px)";
};

// Pode usar tambemn uma variavel para manipular um botão;

var botao = document.getElementById("botao_cor");

botao.onclick = function() {
    botao.style['background-color'] = "red";
    botao.style.transform = "translateX(150px)";
};

// => document.getElementById (puchar o Elemento pelo -> Id ); retorna um OBJETO
//=> document.getElementsByClassName (pucha o Elemento pela -> class ) retorna um Arrey

var exemplo = document.getElementsByClassName("exemplo");

exemplo[0].innerHTML = "teste1";

console.log(exemplo);

//==============================================================================

//=> Aula 19 - Loops são estruturas de repetição de comandos.

//======= Loop => for

for (var a = 0; a < 5; a++) {
    console.log(a);
}

// Array de alunos - loop for;

var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

for (var b = 0; b < alunos.length; b++) {
    console.log(alunos[b]);
}

//======> Loop ====== (for in)

var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'

}

for (var prop in carro) {
    console.log(prop + ': ' + carro[prop]);
}

// Array ===== loop =====com TagName

var elementos = document.getElementsByClassName("exemplo");

for (var c = 0; c < elementos.length; c++) {
    elementos[c].style.color = "Red";
    elementos[c].style['font-weight'] = "bold";
}

var elementos = document.getElementsByTagName("p");

for (var c = 0; c < elementos.length; c++) {
    elementos[c].style.color = "orange";
    
}

//===== Loop ==== while

/*var count = 0;

while (count < 5) {
    console.log(count);
    count++;
}*/
//=================================================
var count2 = 10;

do {
    console.log(count2);
    count2++;
} while (count2 < 5);

// ==========> Condicionais ===== if = se / else if / else = seNão.

var idade = 18;

if (idade < 18) {
    console.log("Menor de idade");
} else if (idade == 18) {
    console.log("Tem 18 anos")
} else {
    console.log("Maior de idade");
}

//================================================

var nota = 8;
var faltas = 4;

// So vai retornar verdadeiro se as duas condiçoes forme verdadeiras (Maior ou igual a 7)
if (nota >= 7 && faltas <= 4) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//===============================================

var nota = 6;
var faltas = 5;

// So vai retornar verdadeiro se as duas condiçoes forme verdadeiras (Maior ou igual a 7)
if (nota >= 7 && faltas <= 4) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//===============================================

var nota = 8;
var faltas = 1;

if (nota < 7 || faltas > 4) {
    console.log("Reprovado");
} else {
    console.log("Aprovado");
}

//===============================================

var nome = "Ivan";

if (nome) {
    console.log("Nome: " + nome);
} else {
    console.log("Nome não informado ");
}

//==============================================
//==== Aninhamento de loops e condicionais======
//==============================================
//Variavel

var socio = false;
var idade = 25;

//se
if (socio == true || idade >= 65) {
    console.log("O ingresso é grátis");
// se não
} else {
//  se;
    if (idade < 18) {
        console.log("Preço a pagar: R$ 6,00");
//  se não;
    } else {
        console.log("Preço a pagar: R$ 12,00");
    }

}

//------------=================----------------

var socio = false;
var idade = 17;

//se
if (socio == true || idade >= 65) {
    console.log("O ingresso é grátis");
// se não
} else {
//  se;
    if (idade < 18) {
        console.log("Preço a pagar: R$ 6,00");
//  se não;
    } else {
        console.log("Preço a pagar: R$ 12,00");
    }

}

//------------=================----------------
// sabendo que socio = true; pode usar => if (socio || idade >= 65)

var socio = true;
var idade = 25;

//se
if (socio || idade >= 65) {
    console.log("O ingresso é grátis");
// se não
} else {
//  se;
    if (idade < 18) {
        console.log("Preço a pagar: R$ 6,00");
//  se não;
    } else {
        console.log("Preço a pagar: R$ 12,00");
    }

}

//------------=================----------------

// Aninhamento de loops e condicionais [Arrey]

var funcionarios = [
        
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
    },

    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': ['João Pedro Pereira de Souza']
        
    },

    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
    }

];

var list_element = document.getElementById("filhos");

for (var a = 0; a < funcionarios.length; a++) {
    var lista_filhos = funcionarios[a].filhos;

    for (var b = 0; b < lista_filhos.length; b++) {
        list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho de ' + funcionarios[a].nome + '</li>';
    }
}
//=================================================

var funcionarios = [
        
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
    },

    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': undefined
        
    },

    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
    }

];

var list_element = document.getElementById("filhos1");
list_element.innerHTML = "";

for (var a = 0; a < funcionarios.length; a++) {

    if (funcionarios[a].filhos) {

        var lista_filhos = funcionarios[a].filhos;

        for (var b = 0; b < lista_filhos.length; b++) {
            list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho de ' + funcionarios[a].nome + '</li>' + '<br>';
        }

    }

    
}
//==============--------------=====================---------================

// Aula 25 -Local Storage


//window.localStorage.setItem("nome", "João"); => Fica gravado mesmo fechando a pagina

//console.log(localStorage['nome']);

//localStorage.removeItem("nome"); remover o que esta gravado em -> Local Storage

//console.log(localStorage['nome']);

// Gravar nome e emails nas paginas (id. enviar-nome / nome-usuario / name-field / welcome-text / not-me)

document.getElementById("enviar-nome").onclick = function () {
    // guardar o nome digitado em local storage - nome-usuario.
    var nome = document.getElementById("nome-usuario").value;
    localStorage.setItem("nome", nome);

    // esconder o formulario - name-field
    document.getElementById("name-field").style.display = "none";

    // atualizar e mostrar mensagem de boas vindas
    document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
    document.getElementById("welcome-area").style.display = "initial";

};

if (localStorage.nome) {
     // esconder o formulario - name-field
    document.getElementById("name-field").style.display = "none";

    // atualizar e mostrar mensagem de boas vindas
    document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
    document.getElementById("welcome-area").style.display = "initial";

}

document.getElementById("not-me").onclick = function () {

    // remover chave nome do local storage (Não é xxxx ?)
    localStorage.removeItem("nome");

    // esconder a mensagens de boas vindas (display = none " remove o elemento" )
    document.getElementById("welcome-area").style.display = "none";

    // mostrar formulario em branco
    document.getElementById("name-field").style.display = "initial";

}

// ====----

// Aula 26 - data e hora
// (new) kiword pra criar uma class
//var data_hoje = new Date();

//console.log( data_hoje.getDate() );

//var data_nascimento = "1985-04-16";

//var ano_nascimento = new Date("1985-04-16").getFullYear();
//var ano_atual = new Date().getFullYear();
//var idade = ano_atual - ano_nascimento;
//console.log(idade);

// 1 ano mile segundos 31536000000
//var data = new Date();

//console.log(data.getTime() / 31536000000);

// Data do envio mile segundos 1 dia 86400000

// 20 Março de 2018 e entregue no dia 06 de Abril de 2018,

var envio = new Date("2018-03-20");
envio = envio.getTime();

var entrega = new Date("2018-04-06");
entrega = entrega.getTime();

var dias = (entrega - envio) / 86400000;

document.getElementById("dias_entrega").innerHTML = dias;

//----Ano nascimento

var data_nascimento = new Date("1985-04-16");
data_nascimento = data_nascimento.getTime();

var ano_atual = new Date("2024-06-07");
ano_atual = ano_atual.getTime();

var idade = (ano_atual - data_nascimento) / 31536000000;

console.log(idade);

// Hora: 3600000
// Minuto: 60000


//Horas
var hora = new Date();
hora = hora.getHours();

document.getElementById("horas").innerHTML = hora;

//Minutos
var min = new Date();

min = min.getMinutes();

document.getElementById("minutos").innerHTML = min;

// animação de loader por 5 segundos - spinner-loader /buton mostrar-loader

document.getElementById("mostrar-loader").onclick = function () {

    document.getElementById("spinner-loader").style.display = "initial";

    window.setTimeout(function(){
        document.getElementById("spinner-loader").style.display = "none";
    },5000);

};
//---------------------

//---tempo => relogio

window.setInterval(function(){

    var hora_atual = new Date();

    var horas = hora_atual.getHours();
    var minutos = hora_atual.getMinutes();
    var segundos = hora_atual.getSeconds();


    //Formatando o Time (18:1:1) para o formato correto (18:01:01) - função
    function format_time(time) {
        if (time >= 0 && time <= 9) {
            var format_time = time.toString();
            format_time = "0" + format_time;
        } else {
            var format_time = time.toString();
        }
        return format_time;
    }

    // lançar no HTML as horas
    document.getElementById("relogio").innerHTML = format_time(horas) + ":" + format_time(minutos) + ":" + format_time(segundos);


},1000);

//---------------- Aula 28 - Switch -sistema de pedagio e valores

function valor_pedagio (categoria) {

    switch(categoria) {

        case '1':
            return 11.22;
            break;
        
        case '2':
            return 22.45;
            break;

        case '3':
            return 16.88;
            break;

        case '4':
            return 33.65;
            break;

        default:
            return 'categoria não encontrada';

    }

}

var categoria_veiculo = "3";

console.log(valor_pedagio (categoria_veiculo));

var categoria_veiculo = "2";

console.log(valor_pedagio (categoria_veiculo));

var categoria_veiculo = "5";

console.log(valor_pedagio (categoria_veiculo));













