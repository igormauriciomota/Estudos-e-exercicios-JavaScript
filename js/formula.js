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

//------------------
// Check Boxes

document.getElementById("mostrar_check").onclick = function () {
    document.getElementById("check_selecionado").innerHTML = "";


    var check = document.getElementsByName("interesse");

    for (var b = 0; b < check.length; b++) {
        if (check[b].checked) {
            document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
        }
    }


};

//-----------------------
// Data evento

document.getElementById("mostrar_data").onclick = function () {

    // lemento HTML do tipo <input> é usado para criar controles interativos para formulários.
    var data_select = document.getElementById("data_evento").value;
    var data_completa = new Date(data_select);
    document.getElementById("data_selecionada").innerHTML = data_completa;

};

// AULA 31 - O elemento onChange

document.getElementById("escolaridade").onchange = function () {

    var campo_select = document.getElementById("escolaridade");
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

};
