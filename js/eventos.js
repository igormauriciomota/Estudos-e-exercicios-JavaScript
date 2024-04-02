
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

//=> Aula 19 - Loops são estruturas de repetição de comandos.

//Loop = for

for (var a = 0; a < 5; a++) {
    console.log(a);
}

// Array de alunos - loop for;

var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

for (var b = 0; b < alunos.length; b++) {
    console.log(alunos[b]);
}

//=> Loop (for in)

var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'

}

for (var prop in carro) {
    console.log(prop + ': ' + carro[prop]);
}

// Array loop com TagName

var elementos = document.getElementsByClassName("exemplo");

for (var c = 0; c < elementos.length; c++) {
    elementos[c].style.color = "Red";
    elementos[c].style['font-weight'] = "bold";
}

var elementos = document.getElementsByTagName("p");

for (var c = 0; c < elementos.length; c++) {
    elementos[c].style.color = "orange";
    
}











