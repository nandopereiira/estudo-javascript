
    
    let array = ['Feijão','arroz','carne']

    var times = ["Palmeiras","Santos","Flamengo","Vasco"];
    var lista = times.toString();
    var lista2 = times.join(" / ")


    console.log(times)
    console.log(lista)
    console.log(lista2)

    times.push('Barcelona') 
    console.log(times)
       
    var dinheiro = 5
    while (dinheiro >= 0) {        
        dinheiro--
        if (dinheiro >= 1) {
            console.log(`Você tem ${dinheiro}R$ reais.`)
            console.log(``)
        } else if (dinheiro == 0) {
            console.log(`Você NÃO tem dinheiro!`)
            console.log(``)
        }
    }
    var level = 0
    do {
        if (level == 0) {            
            console.log(`Você está no level:${level} de Javascript.`)
            console.log(``)
        } else if (level < 5){
            console.log(`Você chegou ao level:${level} Parabéns.`)
            console.log(``)
        } else if (level == 5){
            console.log(`Você Atingiu o Level Máximo`)
            console.log(``)
        }
        level++
    } while (level <= 5) 
    


    
    var fatiasRes = 8, fatiasComidas = 0
    while (fatiasRes != 0){
        fatiasRes--
        fatiasComidas++
        if (fatiasRes > 0) {
            console.log(`Voce comeu ${fatiasComidas} fatias`)
            console.log(`Restam ${fatiasRes} fatias`)
            console.log(``)
        } else if (fatiasRes == 0) {
            console.log(`Vc comeu todas as fatias da pizza`)
            console.log(``)
        }
    }

    for (var teste = 0;teste <=5 ; teste++) {
        console.log(`crescendo na posição ${teste}`)
    }


