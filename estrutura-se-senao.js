
function acaoBotao(params) {
    valor01 = prompt("digite o primeiro valor")
operacao = prompt("Digite a operacao: Ex: +, -, *, /")
valor02 = prompt("digite o segundo valor")

if (operacao == "+" ){
    resultado = parseInt (valor01) + parseInt (valor02)
}else if(operacao == "-"){
    resultado = parseInt (valor01) - parseInt (valor02)
}else if(operacao == "*"){
    resultado = parseInt (valor01) * parseInt (valor02)   
}else if(operacao == "/"){
    resultado = parseInt (valor01) / parseInt (valor02) 
}
document.getElementById("paragrafo").innerText = resultado
    
}

