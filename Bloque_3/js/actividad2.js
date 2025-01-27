function imprimirPrimeraParte(cadena) {
    let mitad = Math.floor(cadena.length / 2);
    return cadena.slice(0, mitad);
}

function imprimirUltimoCaracter(cadena) {
    return cadena.charAt(cadena.length - 1);
}

function imprimirInversa(cadena) {
    let cadenaInvertida = cadena.split('').reverse().join('');
    return cadenaInvertida;
}

function imprimirConGuion(cadena) {
    let cadenaConGuion = cadena.split('').join('-');
    return cadenaConGuion;
}

function contarVocales(cadena) {
    let vocales = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return 'Número de vocales: ' + contador;
}

let cadena = prompt('Introduce una cadena');

let primeraMitad = imprimirPrimeraParte(cadena);
let ultimoCaracter = imprimirUltimoCaracter(cadena);
let inversa = imprimirInversa(cadena);
let conGuion = imprimirConGuion(cadena);
let cantidadVocales = contarVocales(cadena);
document.write('Último carácter: ' +ultimoCaracter+ '<br>');
document.write('Cadena inversa: ' +inversa+ '<br>');
document.write('Cadena separada por guion: ' +conGuion+ '<br>');
document.write(cantidadVocales+ '<br>');