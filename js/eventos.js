
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
