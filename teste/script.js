/* let lista = ['maria eduarda','henrique', 'patricia'],listElement 
= document.querySelector('ul');

function listarNomes(){
    let nomes = '';

    for(let nome of lista){
        nomes += `<li>Nomes: ${nome}</li>`;
    }
    listElement.innerHTML = nomes;
}

listarNomes();
*/

/*
document.querySelector('#input').addEventListener('click',

function () {
    console.log('Cliquei!!!');
})
*/

/*
let minhaFuncao = function(){console.log('Cliquei diferente!!!')};

document.querySelector('#input').addEventListener('click', minhaFuncao)
*/

/*
document.querySelector('ul').addEventListener('click',

function () {
    console.log(this);
})



document.querySelector('li').addEventListener('click',
function(event){
    event.stopPropagation()
    console.log(this)
} );


document.querySelector('button').addEventListener('contextmenu', 

function(event){
    event.preventDefault()
    console.log(this)
});



document.querySelector('input').addEventListener('keyup', 
function(event){
    if(event.keyCode == 13){
        if(this.value != ''){
            this.style.backgroundColor = 'blue'
        } else {
            this.style.backgroundColor = 'yellow'
        }
        console.log(this.value)
    }
    //console.log(event)
});

*/

/*
let meuTempo = setTimeout(function(){
    console.log(123456)
}, 2000);

clearTimeout(meuTempo);
*/

/*
let meuTempo2 = setInterval(function(){
    console.log(123456789)
}, 2000);

clearInterval(meuTempo2);
*/

function submissaoformulario(){
    let meuFormulario = document.forms.meuFormulario;
    if(meuFormulario.mensagem.value == ''){
        alert('O campo está vazio!!')
        return false;
    }
    
}