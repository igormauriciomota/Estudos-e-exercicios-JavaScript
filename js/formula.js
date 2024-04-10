// select Box

document.getElementById("mostrar_opcao").onclick = function () {

    var campo_select = document.getElementById("options");
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;

};

//------------------Mostra os valores---------------------------------

document.getElementById("mostrar_opcao1").onclick = function () {

    // var campo_select = document.getElementById("options");
    // var indice_selecionado = campo_select.options.selectedIndex;
    // var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    // document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;

    var valor_selecionado = document.getElementById("options1").value;
    document.getElementById("opcao_selecionada1").innerHTML = valor_selecionado;

};

 //------------------------------------------------

 // Radio Buttons - radio / genero / Masculino / Feminino

document.getElementById("mostrar_radio").onclick = function () {

    // Obs: neme"genero" em todos e usado para maarcar um de cada vez
    var radio = document.getElementsByName("genero");

    var radio_selected;

    for (var a = 0; a < radio.length; a++) {
        if (radio[a].checked) {
            radio_selected = radio[a].value;
            break;
        }
    }

    document.getElementById("radio_selecionado").innerHTML = radio_selected;

};