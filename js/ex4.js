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

// ex 03------------------------




// ex 04 ----------------------------------------------

var carros = [

    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }

];



function valor_a_pagar (veiculo) {

    switch(veiculo.categoria) {

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
                console.log('veículo de placa ' + veiculo.placa + ' não fez pagamento por erro de categoria (' + veiculo.categoria + ')');
                return 0;
                

    }

}

var total_arrecadado = 0;

for (var a = 0; a < carros.length; a++) {
    total_arrecadado += valor_a_pagar(carros[a]);
}

document.getElementById("faturamento_total").innerHTML = total_arrecadado.toFixed(2);
