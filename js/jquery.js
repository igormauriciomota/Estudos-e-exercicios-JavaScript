// Aula 34 - jQuery - Sintaxe
// em JS => document.getElementById("exemplo").innerHTML = "Olá";
// ex: quando for urar os elementos => $("div").ação(); - $("p").ação();
// ex: class(.) ou id(#) => $("#exemplo").ação();
//ex: .ação(); = .html("olá"); = .css("");

//$("#exemplo").html("Olá");

/*$("#esconder").click(function(){
    $(".exemplo").css("display","none"); => .hide(); e none
});*/

$("#esconder").click(function(){
    $(".exemplo").hide();
});

//--------------------------------Aula 35 - JQuery - Manipulação do conteúdo HTML

var conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);

$("#paragrafo-html").html("Mudar o conteudo do paragrafo");

conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);

//----------------------------------------------------

//Mudando o link de um navegador com Jquery-attr-> manipular os atributos html, como "src", "href", "target", etc.

var url_link = $("#paragrafo-link").attr("href");
console.log(url_link);

$("#paragrafo-link").attr("href","https://portfolio.mindshift.top/");

url_link = $("#paragrafo-link").attr("href");
console.log(url_link);

//--------------------------------------------------

//Mudar Imagem e sumir o botão

$("#mudar_imagem").click(function(){
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#mudar_imagem").hide();
});

//------------------------------------------------

$("#paragrafo-empty").empty();

$("#paragrafo-empty1").remove();

//----------------------------------------------

//---------Aula - 36- JQuery - Loop--Each----------
console.log("---Aula-36---JQuery--Arrey--");

var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

$.each(lista,function(indice,valor){
    console.log('O elemento de indice [' + indice +'] tem o valor de: ' + valor);
});

//------------------------------------------------------
console.log("---Aula-36---JQuery--Objetos--");

//--Objeto js
var pessoa = {
    'nome': 'João Pedro',
    'DN': '20/01/1990',
    'CPF': '111.111.111-11'
};

$.each(pessoa, function( chave, valor ) {
    console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
});

//------------------------------------------------------

console.log("---Percorrendo um array de elementos HTML---");

var interesses = $("#interesses li");

$.each(interesses, function( chave, valor ) {
    console.log($(valor).text());
});

//---FORMULARIO----AULA 37-JQuery---

console.log("-aula-37--formulario--");

var conteudo_input = $("#campo_nome").val();
console.log(conteudo_input);

//-------------------------------------

//console.log($('#options').val() );

//console.log($('#options').find(":selected").text() );

$("#options").change(function(){
    var novo_selecionado = $('#options').find(":selected").text();
    console.log(novo_selecionado);
});

$("input[name='genero']:checked").val();

$("input[name='genero']:checked").parent('span').text();

//--------------------------------------------------

$("input[name='interesse']").change(function() {

    var checkboxes_selecionados = $("input[name='interesse']:checked");
    var textos = [];
    
    $.each(checkboxes_selecionados, function( index, value ) {
        
        textos.push($(value).parent("span").text());
    
    });
    
    console.log(textos);
    
});






