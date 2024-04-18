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
