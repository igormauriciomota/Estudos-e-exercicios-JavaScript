// select Box

document.getElementById("mostrar_opcao").onclick = function () {

    var campo_select = document.getElementById("options");
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;

};

//---------------------------------------------------

document.getElementById("mostrar_opcao1").onclick = function () {

    // var campo_select = document.getElementById("options");
    // var indice_selecionado = campo_select.options.selectedIndex;
    // var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    // document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;

    var valor_selecionado = document.getElementById("options1").value;
    document.getElementById("opcao_selecionada1").innerHTML = valor_selecionado;

};

 //------------------------------------------------