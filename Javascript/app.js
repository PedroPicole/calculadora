function ConverterDolar() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value; 
    var valorEmDolarNumerico = parseFloat(valor)
    console.log (valorEmDolarNumerico);

    var valorEmReal = valorEmDolarNumerico * 5.16
    console.log(valorEmReal)

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido
}

function ConverterLibra() {
    var valorParaConverterEmLibra = document.getElementById("valorParaLibra");
    var valor = valorParaConverterEmLibra.value;
    var valorEmLibra = parseFloat(valor);
    console.log (valorEmLibra);
    
    var valorConvertidoEmLibra = valorEmLibra * 5.87
    console.log (valorConvertidoEmLibra)

    var elementoValorConvertidoLibra = document.getElementById("valorConvertidoLibra")
    var valorConvertidoLibra = "O resultado em real é £ " + valorConvertidoEmLibra
    elementoValorConvertidoLibra.innerHTML = valorConvertidoLibra
}