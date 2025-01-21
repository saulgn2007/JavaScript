function mostrartabla() {
    let num = parseInt(prompt('Ingrese un valor del 1 al 10:', ''));
    let resultado = ""; 
    for (let multiplicacion = 1; multiplicacion <= 12; multiplicacion++) {
        let producto = num * multiplicacion;
        resultado += num + " x " + multiplicacion + " = " + producto;


        if (multiplicacion < 12) {
            resultado += "<br>";
        }
    }

    return resultado;
}

let resultadoFinal = mostrartabla();
document.body.innerHTML = resultadoFinal;