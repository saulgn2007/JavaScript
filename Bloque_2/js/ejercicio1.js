function traductor(definicion)
{
    switch (definicion) 
    {
        case 'casa':
            resultado='La traduccion de casa es: house';
            break;
        case 'mesa':
            resultado='La traduccion de mesa es: table';
            break;
        case 'perro':
            resultado='La traduccion de perro es: dog';
            break;
        case 'gato':
            resultado='La traduccion de gato es: cat';
            break;
        default:
            resultado='Debe introducir una de las siguientes palabras: casa, mesa, perro, gato';
    }
    return resultado
}
definicion = prompt("Ingrese una palabra para traducirla al inglés (casa, mesa, perro, gato)");
let Fin = traductor(definicion)
document.write(Fin)