function AcumularValores()
{
    let acumulador=0
    let valor

    do{
        valor=parseInt(prompt("Introduce un numeros a sumar, 9999 para finalizar"))
        if (valor!==9999){
            acumulador+=valor
        }
    }while(valor !== 9999)
    resultado = "El valor acumulado es: " +acumulador
    
    if (acumulador > 0){
        resultado = "El número es mayor que 0"
    }else{
        if(acumulador < 0){
            resultado = "El número es menor que 0"
        }else{
            resultado = "El número es igual que 0"
        }
    }
    return resultado+ " porque el resultado obtenido es: " +acumulador
}
let resultadoTotal=AcumularValores();
document.write(resultadoTotal)