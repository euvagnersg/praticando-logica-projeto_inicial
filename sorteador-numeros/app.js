function sortear(){
    let quantidade =  parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }     
        sorteados.push(numero);   
    }    
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();
}


function alterarStatusBotao(){
    let botao = document.getElementById("btn-reiniciar");

    if (botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }else{
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function validarNumeros(){
    let quantidade =  parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let diferenca = ate - de;

    if (quantidade > ate){
        alert("Atenção: O numero máximo não pode ser menor que o a quantidade de número selecionados");
        document.getElementById("ate").value = "";
    }else if (de > ate) {
        alert("Atenção: O numero minimo não pode ser maior que o número maximo");     
        document.getElementById("de").value = "";
        document.getElementById("ate").value = "";   
    }else if (quantidade > diferenca){
        alert("Atenção: A quantidade de números sorteados não pode ser maior que a diferença dos números mínimo e máximo");
        document.getElementById("de").value = "";
        document.getElementById("ate").value = "";
    }
}