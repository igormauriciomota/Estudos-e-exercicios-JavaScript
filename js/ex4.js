// ex 01

document.getElementById("estados").onchange = function() {
    localStorage.setItem("estado", document.getElementById("estados").value);
}

if (localStorage.estado) {
    document.getElementById("estados").value = localStorage.estado;
}

//--------------

// ex 02

function add_left_zero(number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}

function format_date(timestamp) {
    //                            dia
    var dia = add_left_zero(new Date(timestamp).getDate());
    //                           mes de 0 a 11
    var mes = add_left_zero(new Date(timestamp).getMonth() + 1);
    //                            Ano
    var ano = add_left_zero(new Date(timestamp).getFullYear());
    return dia + "-" + mes + "-" + ano;
}

document.getElementById("confirmar_pedido").onclick = function() {

    var selection = document.getElementById("envios").value;

    if (selection == "escolha") {
        alert("Escolha um modelo de envio");
    } else {
        if (selection == "normal") {
            var dias_entrega = 18;
        } else if (selection == "express") {
            var dias_entrega = 12;
        }

        var data_envio = new Date().getTime();
        var data_entrega = data_envio + (dias_entrega * 86400000);

        document.getElementById("data_pedido").innerHTML = format_date(data_envio);
        document.getElementById("data_entrega").innerHTML = format_date(data_entrega);

    }

}