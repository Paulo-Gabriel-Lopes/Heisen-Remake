let imagemClick = document.querySelector('.heisenberg');
let textoCaixa = document.querySelector('.textoHeisen');

const textInicial = textoCaixa.textContent;
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
        textoCaixa.textContent = textInicial;
        textoMuda += 1;
    }
});