
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











