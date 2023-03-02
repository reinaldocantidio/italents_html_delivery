

let btnAdd = document.querySelector('#addBotao');

btnAdd.addEventListener('click', function(){
    let inputValor = document.querySelector('#usuario').value;
    if(inputValor === "") {
        alert("É necessário preencher os campos!!!");
    } else{
        //alert("Login realizado com sucesso!");
        document.querySelector('#mensagem-ok').insertAdjacentElement(
            'afterend', 
            `<div class="card-teste"> 
            <span> Login Efutado com sucesso!</span>
            </div>
            `
        );
    }

        let mensagem = document.querySelector('.card-teste');
    setTimeout(()=>{
        mensagem.style.display = "none";
    }, 3000);

    document.querySelector('#usuario').value = "";

});