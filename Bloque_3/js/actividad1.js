function procesarArray() 
{
    let vec = new Array(8);
    let sumaTotal = 0;
    let sumaMayor36 = 0;
    let cantidadMayores50 = 0;
    for (let i = 0; i < vec.length; i++) {
        let valor = prompt("Ingrese un número:");
        vec[i] = parseInt(valor);
    }
    for (let i = 0; i < vec.length; i++) {
        sumaTotal += vec[i];
        if (vec[i] > 36) 
        {
            sumaMayor36 += vec[i];
        }
        if (vec[i] > 50) 
        {
            cantidadMayores50++; 
        }
    }
    document.write("La suma de todos los números es: " + sumaTotal + "<br>");
    document.write("La suma de los números mayores a 36 es: " + sumaMayor36 + "<br>");
    document.write("La cantidad de números mayores a 50 es: " + cantidadMayores50 + "<br>");
}
procesarArray();