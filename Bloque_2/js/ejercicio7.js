function procesarDatos() {
    let cantidadNegativos = 0;
    let cantidadPositivos = 0;
    let cantidadMultiplosDe15 = 0;
    let sumaPares = 0;
    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt('Ingrese el valor entero número ' + i + ':'));
        
        if (numero < 0) {
            cantidadNegativos++;
        } else if (numero > 0) {
            cantidadPositivos++;
        }

        if (numero % 15 === 0) {
            cantidadMultiplosDe15++;
        }

        if (numero % 2 === 0) {
            sumaPares += numero;
        }
    }

    return  "Cantidad de valores negativos: " + cantidadNegativos+ "<br> Cantidad de valores positivos: " + cantidadPositivos+ "<br> Cantidad de múltiplos de 15: " + cantidadMultiplosDe15+ "<br> Valor acumulado de números pares: " + sumaPares   
}
let resultadoFinal=procesarDatos()
document.write(resultadoFinal)