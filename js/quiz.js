// Jogo de Perguntas e respostas

//Exercicio 04 -Url: https://opentdb.com/api.php?amount=1&category=11

//<h3 id="pergunta"></h3> <form id="opcoes"> <input type="radio" name="opcao" value="resposta1"> Resposta 1<br>
// <p id="erro_acerto"></p> <button style="display:none" id="submeter">Enviar Resposta</button>

function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {

        let index = Math.floor(Math.random() * counter);

        counter--;
    
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;

    }

    return array;

}

function pegar_pergunta(callback) {

    $.ajax({
        url : "https://opentdb.com/api.php?amount=1&category=11",
        type: "GET",
        dataType: "json",
    }).done(function(data){
        callback(data.results[0]);
    }).fail(function(){
        console.log('Erro na requisição');
    });

}
// button gerar nova pergunta
$("#nova_pergunta").click(function(){
    $("#opcoes").html("");
    $("#erro_acerto").html("");
    $("#pergunta").html("");
    $("#nova_pergunta").hide();
    pegar_pergunta(gerar_pergunta);

});

function gerar_pergunta(pergunta) {
    $("#pergunta").html(pergunta.question);
    var resposta_correta = pergunta.correct_answer;
    var respostas = pergunta.incorrect_answers;
    respostas.push(resposta_correta);
    respostas = shuffle(respostas);

    for (a = 0; a < respostas.length; a++) {
        $("#opcoes").append('<input type="radio" name="opcao" value="' + respostas[a] + '"> ' + respostas[a] + '<br>');
    }

    $("#opcoes input[name='opcao']").change(function(){
        $("#submeter").show();
        
    });

    $("#submeter").click(function(){

        var resposta_escolhida = $("#opcoes input[name='opcao']:checked").val();

        $("#submeter").hide();

        if(resposta_escolhida == resposta_correta) {
            $("#erro_acerto").html("<span style='color: green'; font-weight: bold'>Parabéns, você acertou! A resposta é: " + resposta_correta + "</span>");
        } else {
            $("#erro_acerto").html("<span style='color: red'; font-weight: bold'>Você errou! A resposta é: " + resposta_correta + "</span>");
        }

        $("#opcoes input[name='opcao']").attr('disabled', true);

        $("#nova_pergunta").show();


    });


}

pegar_pergunta(gerar_pergunta);

// 02 segunda pergunta

//Exercicio 04 -Url: https://opentdb.com/api.php?amount=1&category=11

//<h3 id="pergunta"></h3> <form id="opcoes"> <input type="radio" name="opcao" value="resposta1"> Resposta 1<br>
// <p id="erro_acerto"></p> <button style="display:none" id="submeter">Enviar Resposta</button>

function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {

        let index = Math.floor(Math.random() * counter);

        counter--;
    
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;

    }

    return array;

}

function pegar_pergunta(callback) {

    $.ajax({
        url : "https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple",
        type: "GET",
        dataType: "json",
    }).done(function(data){
        callback(data.results[0]);
    }).fail(function(){
        console.log('Erro na requisição');
    });

}
// button gerar nova pergunta
$("#nova_pergunta").click(function(){
    $("#opcoes").html("");
    $("#erro_acerto").html("");
    $("#pergunta").html("");
    $("#nova_pergunta").hide();
    pegar_pergunta(gerar_pergunta);

});

function gerar_pergunta(pergunta) {
    $("#pergunta").html(pergunta.question);
    var resposta_correta = pergunta.correct_answer;
    var respostas = pergunta.incorrect_answers;
    respostas.push(resposta_correta);
    respostas = shuffle(respostas);

    for (a = 0; a < respostas.length; a++) {
        $("#opcoes").append('<input type="radio" name="opcao" value="' + respostas[a] + '"> ' + respostas[a] + '<br>');
    }

    $("#opcoes input[name='opcao']").change(function(){
        $("#submeter").show();
        
    });

    $("#submeter").click(function(){

        var resposta_escolhida = $("#opcoes input[name='opcao']:checked").val();

        $("#submeter").hide();

        if(resposta_escolhida == resposta_correta) {
            $("#erro_acerto").html("<span style='color: green'; font-weight: bold'>Parabéns, você acertou! A resposta é: " + resposta_correta + "</span>");
        } else {
            $("#erro_acerto").html("<span style='color: red'; font-weight: bold'>Você errou! A resposta é: " + resposta_correta + "</span>");
        }

        $("#opcoes input[name='opcao']").attr('disabled', true);

        $("#nova_pergunta").show();


    });


}




pegar_pergunta(gerar_pergunta);