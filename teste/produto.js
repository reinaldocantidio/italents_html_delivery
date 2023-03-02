// Favoritar (não teve vídeo demonstrando. Apliquei pelo que apareceu no vídeo de incremento/decremento)

let coracao = document.querySelector('.bi-heart-fill');
coracao.addEventListener('click', function(event){
    if(event.target.nodeName === "I"){
        event.target.classList.toggle('red');
    }
});





// Incrementar e decrementar

let decrementar = document.querySelector('.bi-dash-square');
let incrementar = document.querySelector('.bi-plus-square');
let textoProduto = document.querySelector('#quantidade-selecionada');
let qtdeProduto = parseInt(textoProduto.textContent);


incrementar.addEventListener('click', function(){
    qtdeProduto++;
    textoProduto.innerHTML = qtdeProduto;
}) ;

decrementar.addEventListener('click', function(){
    if(qtdeProduto <=1) {
        alert('A quantidade não pode ser menor do que 1 ')
    }else {
    qtdeProduto--;
    textoProduto.innerHTML = qtdeProduto;
    }
}) ;




console.log(decrementar);
console.log(incrementar);
console.log(qtdeProduto);