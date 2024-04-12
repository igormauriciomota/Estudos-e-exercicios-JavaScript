// ex 01

document.getElementById("estados").onchange = function() {
    localStorage.setItem("estado", document.getElementById("estados").value);
}

if (localStorage.estado) {
    document.getElementById("estado").value = localStorage.estado;
}
