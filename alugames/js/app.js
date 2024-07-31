//Corigo escrito pelo Vagner Guimarães
// function alterarStatus(status){
//     let jogo = document.getElementById('game-'+status);
//     let botao = document.getElementById('botao-'+status);
//     // Seleciona a div dentro do li
//     let div = jogo.querySelector('.dashboard__item__img');
    
//     if (div.classList.value == "dashboard__item__img dashboard__item__img--rented") {
//         div.classList.value = "dashboard__item__img";
//         botao.classList.value = "dashboard__item__button";
//         botao.textContent = "Alugar";
//     }else{
//         div.classList.value = "dashboard__item__img dashboard__item__img--rented"; 
//         botao.classList.value = "dashboard__item__button dashboard__item__button--return";
//         botao.textContent = "Devolver";
//     }
// }

//Codigo escrito pelo esctutores do curso 

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img'); 
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        //jogo alugado, vamos devolver
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        //jogo disponivel, vamos alugar
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}