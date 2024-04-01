
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


