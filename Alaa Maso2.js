let escolha = 0
let inventario = []
var pontosDeAtletismo = 0
let escolhaFala = 0

alert("Seja bem vindo!!!")
alert("Esse jogo é baseado em Alaa Maso")
alert("Nadador olimpico refugiado da Síria")
alert("Nesse jogo você vai ter um inventario onde vai guardar emoções que ganha ao longo do jogo")
alert("E um sistema de pontos chamado de pontos de atletismo, ele serve para o final do jogo ver se ganhou")
alert("Bom jogo")

alert("Mãe: ei filho, acorda")
alert("filho, filho, voce vai se atrasar para escola")


    while (escolha != 1 & escolha != 2){
escolha = Number(prompt("oi mãe, bom dia...\n1- levantar\n2- pedir mais um tempo para dormir\n5- abrir inventário\n6- ver pontos de atletismo"))    
    if (escolha === 1) {
        alert("Você levanta e vai se arrumar")
        alert("Você toma um café e vai para a ecola")
        alert("Assim que você chegou na escola estava perto do horario de entrada")
        alert("E acaba se encontrando com seus amigos e fica converando com eles antes da aula")
        alert("Foi um dia normal de aula")
        alert("Você ficou muito feliz +1 emoção")
        inventario.push("Felicidade")

    } else if (escolha === 2) {
        alert("Sua mãe te deixa dormir mais 10 minutinhos")
        alert("Após esses minutos você acorda novamente e levanta")
        alert("Se arruma mas não tem tempo para o café")
        alert("Indo para a escola")
        alert("Você chega um pouco atrasado")
        alert("Foi só um dia normal de aula")
        alert("Voce não ganha nenhuma emoção")
    } else if (escolha === 5) {
        abrirInventario()
    } else if (escolha === 6){
        alert("Seus pontos de atletismo são: " + verPontosDeAtletismo())
    } else if (escolha != 1 & escolha != 2 & escolha != 5 & escolha != 6){
        alert("Essa opção não existe")
    }
}
escolha = 0

alert("Chegando em casa você é recebido por sua mãe")
alert("Mãe: Boa tarde filho, o almoço ja esta na mesa")
    while (escolha != 1 & escolha != 2){
escolha = Number(prompt("Senta na mesa e vem almoçar\n1- ir almoçar\n2- ir para o quarto\n5- abrir inventário\n6- ver pontos de atletismo"))
    if (escolha === 1) {
        alert("Você almoça com sua família, foi um ótimo almoço")
        alert("Sua mãe fica contente que você esta feliz hoje")
        alert("Nova emoção (Amor)")
        inventario.push("Amor")
    } else if (escolha === 2) {
        alert("Não mãe, não quero almoçar agora")
        alert("Sua mãe fica triste com você")
        alert("Você vai para o seu quarto e tira um cochilo")
        alert("Você não ganha nenhuma emoção")
        alert("Não demora muito para você acordar")
    } else if (escolha === 3) {
        alert("Essa opção não existe")
    } else if (escolha === 5) {
        abrirInventario()
    } else if (escolha === 6){
        alert("Seus pontos de atletismo são: " + verPontosDeAtletismo())
    } else if (escolha != 1 & escolha != 2 & escolha != 5 & escolha != 6){
        alert("Essa opção não existe")
    }        
    } escolha = 0
    alert("De tardezinha é horario da sua natação")
    while(escolha != 1 & escolha != 2) {
    escolha = Number(prompt("Pai: Você vai ir treinar natação comigo hoje filho?\n1- sim \n2- não\n5- abrir inventário\n6- ver pontos de atletismo"))
    if (escolha === 1) {
        alert("Você vai para o treino")
        alert("Após um tempinho caminhando com seu pai você chega até o local")
        alert("entrando la você e seu pai começam a se ajeitar")
        alert("Ele fica muito feliz em ver que você realmente esta gostando de nadar")
        alert("Ele olha para você e fala que a cada dia que passa fica mais orgulhoso de te ter como aluno e filho")
        alert("Começando os treinos você se destaca no meio dos outros atletas")
        alert("No final do treino você recebe varios elogios dos seus colegas e pai")
        alert("Mais 1 ponto de atletismo")
        pontosDeAtletismo++
        alert("Voces vão para casa")
        alert("Após mais um tempinho caminhando voces chegam em casa")
    } else if (escolha === 2) {
        alert("Você apenas volta a dormir")
        alert("Você acorda após um tempo")
    }  else if (escolha === 5) {
        abrirInventario()
    } else if (escolha === 6){
        alert("Seus pontos de atletismo são: " + verPontosDeAtletismo())
    } else if (escolha != 1 & escolha != 2 & escolha != 5 & escolha != 6){
        alert("Essa opção não existe")
    }
}
escolha = 0
    alert("Voces veem sua família na sala olhando televisão")
    alert("Voces vão se aproximando e ouvindo a notícia ao mesmo tempo")
    alert("A cada passo voces vão ficando ainda mais nervosos")
    alert("Na televisão voces ouvem um aviso")
    alert("alerta? Guerra? Evacuação")
    alert("Sem nem pensar duas vezes seus pais começam a arrumar as coisas")
    alert("Sua casa esta um caos pela ansiedade que a televisão deu")
    alert("Sem você mal perceber ja estava no carro evacuando da cidade")
    alert("Vocês vão em direção ao continente Europeu")
    alert("E decidem se estabelecer na Alemanha")
    alert("Um tempo se passou e você e sua família se estabeleceram normalmente")
    alert("Você e seu pai acharam um novo lugar para nadar")
    while (escolha != 1 & escolha != 2){
        escolha = Number(prompt("Você vai querer ir ver o lugar hoje?\n1- sim \n2- não\n5- abrir inventário\n6- ver pontos de atletismo"))
        if (escolha === 1) {
            alert("Durante o caminho você e seu pai vão conversando sobre a situação")
            while(escolhaFala != 1 & escolhaFala != 2){
                escolhaFala = Number(prompt("Pai: então filho, como você está em relação a essas mudanças?\n1- Bem até\n2- Nem um pouco bem"))
                if (escolhaFala === 1) {
                    alert("Que bom meu filho, tudo vai melhorar você sabe, seu futuro vai ser incrivel")
                } else if (escolhaFala === 2) {
                    alert("Eu sei como é, também não estou tão contente com isso")
                    alert("Mas você sabe que tudo vai melhorar.")
                } else if (escolhaFala != 1 & escolhaFala != 2) {
                    alert("Essa opção não existe")
                } else if (escolha === 5) {
                    abrirInventario()
                } else if (escolha === 6){
                    alert("Seus pontos de atletismo são: " + verPontosDeAtletismo())
                }
            }escolhaFala = 0
            alert("Chegando no local você e seu pai vão treinar")
            alert("Como sempre ele se orgulha de você vendo que esta cada vez melhor")
            alert("Você ganhou mais 1 ponto de atletismo")
            pontosDeAtletismo++
            alert("Indo para casa")
            alert("No caminho de casa seu pai fala que quer ver você sendo um nadador profissional")
            alert("Você ganha uma nova meta")
            alert("Você quer chegar nas olimpiadas um dia pelo seu pai")
            alert("Nova emoção (Ambição)")
            inventario.push("Ambição")
            alert("Você chega em casa e vai em direção a sala")

        } else if ( escolha === 2) {
            alert("Pai: ah ok... Deixamos para outro dia")
            alert("Seu pai fica meio triste")
            alert("Após isso você vai para a sala")
        }else if (escolha === 5) {
            abrirInventario()
        } else if (escolha === 6){
            alert("Seus pontos de atletismo são: " + verPontosDeAtletismo())
    }
} escolha = 0
    alert("Chegando na sala você ve sua mãe vendo televisão")
    alert("Nela fala que daqui 3 anos começa as olimpiadas")
    if (inventario.includes("Ambição")){
        alert("Vendo isso você Fica extremamente empolgado")
        alert("Apartir de agora você PRECISA ir para as olimpiadas")
    } else {
        alert("Olhando isso você imagina a possibilidade de estar la um dia")
    } 
    alert("A noite chega e você vai dormir")
    alert("Durante seu sono você tem um sonho")
    alert("Você sonha que esta nas olimpiadas disputando na natação")
    if (pontosDeAtletismo >= 3){
        alert("No sonho você estava quase ganhando, mas é ultrapassado e acaba ganhando 2 lugar")
    } else if (pontosDeAtletismo < 3) {
        alert("Você perde feio")
    }
        alert("Após esse sonho se passou um tempo, 2 anos para ser mais especifico")
        alert("Você treinou muito esses ultimos anos")
        alert("Suas emoções serão convertida em pontos de atletismo")
        if (inventario.includes("Felicidade")) {
            alert("Você possui felicidade, convertido para +1 ponto de atletismo")
            pontosDeAtletismo++
        } if (inventario.includes("Amor")) {
            alert("Você possui Amor, convertido para +1 ponto de atletismo")
            pontosDeAtletismo++
        } if (inventario.includes("Ambição")) {
            alert("Você possui Ambição, convertido para +1 ponto de atletismo")
            pontosDeAtletismo++
        }
        let ganhouSimNão = 0
        let pontosDeAtletismo = 6
        let escolhaDesafio = 0
        let distancia = 0
        let distanciaPercorrida = 0
        let atleta1 = 0
        let atleta2 = 0
        let atleta3 = 0
        let atleta4 = 0
        let seusPontosTotais = pontosDeAtletismo
        
        alert("Finalmente chegou o grande dia do teste para você ser selecionado para as olimpiadas");
        alert("Você e todos atletas se preparam para saltar na piscina")
        
        while (ganhouSimNão === 0) {
            escolhaDesafio = Number(prompt(`NADE O MAIS RAPIDO QUE PUDER!!!\n você possui ${pontosDeAtletismo} pontos\nDeseja usar 1 para ganhar uma ajuda?\n1- sim\n2- não`))
        
            if (escolhaDesafio === 1) {
                if (pontosDeAtletismo >= 1){
                pontosDeAtletismo -= 1
                distanciaPercorrida = Math.ceil(Math.random() * 4)
                distancia += distanciaPercorrida + 2
                atleta1 += Math.ceil(Math.random() * 4) 
                atleta2 += Math.ceil(Math.random() * 4) 
                atleta3 += Math.ceil(Math.random() * 4) 
                atleta4 += Math.ceil(Math.random() * 4) 
                distanciaPercorrida = 0
        
                alert(`Distâncias nadadas:\nVocê = ${distancia} metros\nAtleta 1 = ${atleta1} metros\nAtleta 2 = ${atleta2} metros\nAtleta 3 = ${atleta3} metros\nAtleta 4 = ${atleta4} metros`)
        
                if (distancia >= 100) {
                    alert("PARABÉNS VOCÊ PASSOU PARA AS OLIMPIADAS")
                    alert("OBRIGADO POR JOGAR!!!!")
                    ganhouSimNão = 1
                } else if (atleta1 >= 100 || atleta2 >= 100 || atleta3 >= 100 || atleta4 >= 100) {
                    alert("Você perdeu, tente novamente")
                    pontosDeAtletismo = seusPontosTotais
                    atleta1 = 0
                    atleta2 = 0
                    atleta3 = 0
                    atleta4 = 0
                    distancia = 0
                }
            } else {
                alert("Você não tem mais pontos de atletismo")
            }
            } else if (escolhaDesafio === 2) {
                distanciaPercorrida = Math.ceil(Math.random() * 4)
                distancia += distanciaPercorrida
                atleta1 += Math.ceil(Math.random() * 4)
                atleta2 += Math.ceil(Math.random() * 4)
                atleta3 += Math.ceil(Math.random() * 4)
                atleta4 += Math.ceil(Math.random() * 4)
        
                alert(`Distâncias nadadas:\nVocê = ${distancia} metros\nAtleta 1 = ${atleta1} metros\nAtleta 2 = ${atleta2} metros\nAtleta 3 = ${atleta3} metros\nAtleta 4 = ${atleta4} metros`)
        
                if (distancia >= 100) {
                    alert("PARABÉNS VOCÊ PASSOU PARA AS OLIMPIADAS")
                    alert("OBRIGADO POR JOGAR!!!!")
                    ganhouSimNão = 1;
                } else if (atleta1 >= 100 || atleta2 >= 100 || atleta3 >= 100 || atleta4 >= 100) {
                    alert("Você perdeu, tente novamente")
                    pontosDeAtletismo = seusPontosTotais;
                    atleta1 = 0
                    atleta2 = 0
                    atleta3 = 0
                    atleta4 = 0
                    distancia = 0
                }
        
            } else {
                alert("Essa opção não existe")
            }
        }

    function abrirInventario() {
          alert(inventario.join(", "))
        }
    

    function verPontosDeAtletismo() {
        console.log(pontosDeAtletismo)
        let verPontos = pontosDeAtletismo

        return(verPontos)
    }