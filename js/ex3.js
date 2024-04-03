// Ex: 03

/*console.log('Exercicio 03');

function celsiusToFahrenheit(temp_c) {
    var temp_f = (9 * temp_c / 5) + 32;
    return temp_f;
};

=> imput = temp_celsius
=> button = converter
=> div = temp_fahr

var celsius = parseFloat(document.getElementById("caixa_azul").innerHTML);

var fahrenheit = celsiusToFahrenheit(celsius);

document.getElementById("caixa_amarela").innerHTML = "<strong>" + fahrenheit + "</strong>";*/

console.log('----------Exercicio 03 === nº 01--------');

function celsiusToFahrenheit(temp_c) {
    var temp_f = (9 * temp_c / 5) + 32;
    return temp_f;
};

document.getElementById("converter").onclick = function () {
    var celsius = parseFloat(document.getElementById("temp_celsius").value);
    var fahrenheit = celsiusToFahrenheit(celsius);
    document.getElementById("temp_fahr").innerHTML = "<strong>" + fahrenheit + "</strong>";
}

//Exercicio 02
console.log('----------Exercicio 03 === nº 02--------');

// => anos_copa

var inicio = 1930;

document.getElementById("anos_copa").innerHTML = "";

// += armazena
for (var a = inicio; a <= 2024; a += 4) {
    document.getElementById("anos_copa").innerHTML += '<li>' + a + '</li>';
}

