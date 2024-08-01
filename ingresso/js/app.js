let ingrVendidosPista = 0;
let ingrVendidosCadeiraSuperior = 0;
let ingrVendidosCadeiraInferior = 0;

function comprar(){
    //receber a quantidade de insgressos e o tipo
    let ingressosPedido = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    //receber os insgressos disponiveis
    let disponivelPista = parseInt(document.getElementById('qtd-pista').textContent);
    let disponivelSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let disponivelInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    //verificar se há ingressos disponiveis e efetue a venda
    if (ingressosPedido=='pista'){
        //pista
        if(quantidadeIngresso>disponivelPista){
            alert('Ingressos indiponível para a pista');
            alert(`Atenção: Há apenas ${disponivelPista} para as pistas`);
        }else{
            ingrVendidosPista = ingrVendidosPista + quantidadeIngresso;
            disponivelPista = disponivelPista - quantidadeIngresso;
            document.getElementById('qtd-pista').textContent = disponivelPista;
        }
        
    }else if(ingressosPedido=='inferior') {
        //inferior
        if(quantidadeIngresso>disponivelInferior){
            alert(`Atenção: Há apenas ${disponivelInferior} para as cadeiras inferiores`);
        }else{
            ingrVendidosCadeiraInferior = ingrVendidosCadeiraInferior + quantidadeIngresso;
            disponivelInferior = disponivelInferior - quantidadeIngresso;
            document.getElementById('qtd-inferior').textContent = disponivelInferior;
        }
    }else{
        //superior
        if(quantidadeIngresso>disponivelSuperior){
            alert(`Atenção: Há apenas ${disponivelSuperior} para as cadeiras superiores`);
        }else{
            ingrVendidosCadeiraSuperior = ingrVendidosCadeiraSuperior + quantidadeIngresso;
            disponivelSuperior = disponivelSuperior - quantidadeIngresso;
            document.getElementById('qtd-superior').textContent = disponivelSuperior;
        }
    }
    document.getElementById('qtd').value=0;
}