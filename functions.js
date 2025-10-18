let imagemClick = document.querySelector('.heisenberg');
let textoCaixa = document.querySelector('.textoHeisen');

let clickerMenu = document.querySelector('.clicker');
let burguer = document.querySelector('.wrapperBurguer')

const textInicial = textoCaixa.innerHTML;
let textoMuda = 1;

imagemClick.addEventListener('click', ()=>{
    if(textoMuda == 1){
        textoCaixa.textContent = "Hi, HI, HI, hi, hi";
        textoMuda += 1;
    } else if(textoMuda == 2){
        textoCaixa.textContent = "Bah";
        textoMuda += 1;
    }else if(textoMuda == 3){
        textoCaixa.textContent = "Boh";
        textoMuda += 1;
    }else if(textoMuda == 4){
        textoCaixa.textContent = "Bih";
        textoMuda = 0;
    }else if(textoMuda == 0){
        textoCaixa.innerHTML = textInicial;
        textoMuda += 1;
    }
});

clickerMenu.addEventListener('click', ()=>{
    burguer.classList.toggle('hidden')
    console.log('clicou')
}); // Também é possivel utilizar o .add e .remove no classList, mas não coloque um . antes da classe
    
// textContent Apenas muda o textoCaixa, e Inner html consegue identificar tags como a </br>