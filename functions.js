let imagemClick = document.querySelector('.heisenberg');
let textoCaixa = document.querySelector('.textoHeisen');

let clickerMenu = document.querySelector('.clicker');
let burguer = document.querySelector('.wrapperBurguer')

const textInicial = textoCaixa.innerHTML;
let textoMuda = 1;

imagemClick.addEventListener('click', ()=>{
    if(textoMuda == 1){
        textoCaixa.innerHTML = "Hm...? Oque você poderá encontrar aqui?<br><br> Bem... uma diversidade de tópicos é claro! Como você pode ver a sua esquerda, há diversos artigos! Anotei tudo que eu considero importante! <br><br> Mas bem, o que esta esperando?";
        textoMuda += 1;
    } else if(textoMuda == 2){
        textoCaixa.innerHTML = "Huh... Você parece ser uma pessoa bem peculiar e curiosa... Gosto disso... <br><br> Mas bem, não ";
        textoMuda += 1;
    }else if(textoMuda == 3){
        textoCaixa.innerHTML = "Boh";
        textoMuda += 1;
    }else if(textoMuda == 4){
        textoCaixa.innerHTML = "Bih";
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