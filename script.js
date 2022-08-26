const historico = new Array()




const calcular = function(){
    let x = document.getElementById('peso').value 
    let y = document.getElementById('altura').value 
    z = parseFloat(x) / parseFloat(y*y) 
    document.getElementById('imc').value = z
    historicoimc = `${x}/${y*y}=${z}`
    historico.push(historicoimc)
    console.log(historico)
    if (z <= 18.5) {alert('Você está em nível de magreza')
        
    } else if (z <= 24.9){alert ('Você está no peso normal')}
    else if (z <= 29.9){alert ('Você está acima do peso')}
    else if (z <= 39.9){alert ('Você está obeso')}
    else if (z >= 40){alert ('Você está em obesidade mórbida')}
    
}



const limpar = function(){
    document.getElementById('peso').value = "limpar"
    document.getElementById('altura').value = "limpar"
    document.getElementById('imc').value = "imc"
}