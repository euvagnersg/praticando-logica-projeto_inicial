function alterarStatus(status){
    let jogo = document.getElementById('game-'+status);
    let botao = document.getElementById('botao-'+status);
    // Seleciona a div dentro do li
    let div = jogo.querySelector('.dashboard__item__img');
    
    if (div.classList.value == "dashboard__item__img dashboard__item__img--rented") {
        div.classList.value = "dashboard__item__img";
        botao.classList.value = "dashboard__item__button";
        botao.textContent = "Alugar";
    }else{
        div.classList.value = "dashboard__item__img dashboard__item__img--rented"; 
        botao.classList.value = "dashboard__item__button dashboard__item__button--return";
        botao.textContent = "Devolver";
    }

}