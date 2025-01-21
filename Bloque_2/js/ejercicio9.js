function perimetroFinal()
{
    let lado=parseInt(prompt("Introduzca el lado del cuadrado para obtener el perímetro"))
    let perimetro=lado*4
    return "El perimetro del cuadrado es: " +perimetro
}
let resultadoFinal=perimetroFinal()
document.write(resultadoFinal)