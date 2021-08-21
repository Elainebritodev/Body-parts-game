const audio = new Audio("C:\Users\Elaine Brito\Desktop\JS\Projeto 1\musica.wav") 
window.onload = () => {
    audio.play()
}


var numeropergunta = 1
var respcerta = 0

function verificar1() {
    var sim = document.getElementById('sim')
    //var nao = document.getElementById('nao')
    
     if (sim.checked) {
        
        res1.innerHTML = 'Obaaaaa!!! \u{1F600}'
        numeropergunta = 2
    } else 
        res1.innerHTML = ` \u{1F614}`
        
} 


function verificar2() {
   var olhos = document.getElementById('olhos')
   var res1 = document.getElementById('res1')
   
   if (olhos.checked) {
       res1.innerHTML = `Você acertou!\u{1F600}`
       numeropergunta = 3 
       respcerta++  
   } else
        res1.innerHTML = `Você errou!\u{1F614}`
        numeropergunta = 3 
}
     

function verificar3() {
    var boca = document.getElementById('boca')
    var res1 = document.getElementById('res1')

   if(boca.checked) {
       res1.innerHTML = `Você acertou!\u{1F600}`
       numeropergunta = 
       respcerta++
   } else
       res1.innerHTML = `Você errou!\u{1F614}`
       numeropergunta = 4

}
function verificar4() {
    var braço = document.getElementById('braço')
    var res1 = document.getElementById('res1')

   if(braço.checked) {
       res1.innerHTML = `Você acertou!\u{1F600}`
       numeropergunta = 5
       respcerta++
   } else
       res1.innerHTML = `Você errou!\u{1F614}`
       numeropergunta = 5
}


function verificar5() {
    var nariz = document.getElementById('nariz')
    var res1 = document.getElementById('res1')

   if(nariz.checked) {
       res1.innerHTML = `Você acertou!\u{1F600}`
       numeropergunta = 6
       respcerta++
   } else
       res1.innerHTML = `Você errou!\u{1F614}`
       numeropergunta = 6

}
function verificar6() {
    var cabeça = document.getElementById('cabeça')
    var res1 = document.getElementById('res1')

   if(cabeça.checked) {
       res1.innerHTML = `Você acertou!\u{1F600}`
       numeropergunta = 7
       respcerta++
   } else
       res1.innerHTML = `Você errou!\u{1F614}`
       numeropergunta = 7

}


function verificar7() {
    var ear = document.getElementById('ear')
    var res1 = document.getElementById('res1')

   if(ear.checked) {
       res1.innerHTML = `Você acertou!\u{1F600}`
       numeropergunta = 8
       respcerta++
   } else
       res1.innerHTML = `Você errou!\u{1F614}`
       numeropergunta = 8

}

function verificar8() {
    var leg = document.getElementById('leg')
    var res1 = document.getElementById('res1')

   if(leg.checked) {
       res1.innerHTML = `Você acertou!\u{1F600}`
       numeropergunta = 9
       respcerta++
   } else
       res1.innerHTML = `Você errou!\u{1F614}`
       numeropergunta = 9

}

function verificar9() {
    var mao = document.getElementById('mao')
    var res1 = document.getElementById('res1')

   if(mao.checked) {
       res1.innerHTML = `Você acertou!\u{1F600}`
       numeropergunta = 10
       respcerta++
   } else
       res1.innerHTML = `Você errou!\u{1F614}`
       numeropergunta = 10

}

function verificar10() {
    var knee = document.getElementById('knee')
    var res1 = document.getElementById('res1')

   if(knee.checked) {
       res1.innerHTML = `Você acertou!\u{1F600}`
       numeropergunta = 11
       respcerta++
   } else
       res1.innerHTML = `Você errou!\u{1F614}`
       numeropergunta = 11

}



function verificar11() {
    var foot = document.getElementById('foot')
    var res1 = document.getElementById('res1')

   if(foot.checked) {
       res1.innerHTML = `Você acertou!\u{1F600}`
       numeropergunta = 12
       respcerta++
   } else
       res1.innerHTML = `Você errou!\u{1F614}`
       numeropergunta = 12

}


function verificar12() {
        
    var respsim = document.getElementById('respsim')
    var res1 = document.getElementById('res1')
    
     if(respsim.checked) {
       res1.innerHTML = `Vamos jogar!\u{1F600}`
       numeropergunta = 1
   } else {
       res1.innerHTML = `\u{1F614}`
       document.getElementById('proximo').style.display = 'none'
   }
   
     
}

function proximo() {
    var res1 = document.getElementById('res1')
    var msg12 = document.getElementById('msg12')
        res1.innerHTML = ''
    var perguntas = document.getElementById('perguntas')
    
    for (cont = 0; cont <= perguntas.children.length -1; cont++) {
        perguntas.children[cont].style.display = 'none'
        
    }
    
        var pergunta = document.getElementById(`pergunta${numeropergunta}`)
    pergunta.style.display = 'block' 

    msg12.innerHTML = `<p> Parabéns!!! <br><br> Você concluiu o desafio! <br><br><br> Você acertou ${respcerta} questões em um total de 10.</p>`
    
}

proximo()




