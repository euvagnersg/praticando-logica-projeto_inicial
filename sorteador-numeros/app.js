function sortear(){
    let quantidade =  parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let numero = obternumeroaleatorio(de, ate);
    console.log(numero);
}

function obternumeroaleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    console.log("Reiniciar");
}