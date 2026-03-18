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
        textoCaixa.innerHTML = "Huh... Você parece ser uma pessoa bem peculiar e curiosa... Gosto disso... <br><br> Mas bem, não há necessidade de ficar me encarando dessa maneira... <br><br> Vá, explore o que minha enciclopedia tem a oferecer a seus olhos insaciáveis.";
        textoMuda += 1;
    }else if(textoMuda == 3){
        textoCaixa.innerHTML = "Entendo... Parece que sua curiosidade é direcionada a mim. <br><br> Infelizmente não há muito do que dizer sobre uma velha criatura como eu, sou apenas um humilde arquivista que busca manter e preservar a história desse mundo que esta a beira da destruição... <br><br> Tirando isso não há muito mais sobre mim, pelo menos não há coisas que sinto confortável em lhe contar...";
        textoMuda += 1;
    }else if(textoMuda == 4){
        textoCaixa.innerHTML = "Ainda Curioso? <br><br> Esse mundo foi criado através de um simples desenho, onse posteriormente ideias foram surgindo e lentamente formando tudo que você verá a frente. <br><br> Junto disso, uma campanha de TTRPG se passou nele com a duração de aproximadamente 2 anos. <br><br> Infelizmente ela teve que se encerrar antes do final da história, mas os momentos e memórias formadas marcarão o criador dessa história para sempre... <br><br> Agradecimentos especiais a todos os meus jogadores que fizeram parte dessa história, sou eternamente grato por fazerem parte de um dos momentos mais felizes de minha vida!";
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