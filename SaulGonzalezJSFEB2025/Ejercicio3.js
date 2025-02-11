function comprobarN()
{
    let n = parseInt(prompt("Introduce el numero de elemetos que quieres que tenga la lista. (Maximo 5)"))
    if (n > 5)
    {
        n = parseInt(prompt("Introduce de nuevo el numero de elementos que deseas que tenga la lista sin superar 5."))
    }
}
comprobarN()
let lista = newArray(n)
function pedirListas()
{
    primeraLista = parseInt(prompt("Introduce la primera lista con " + n + " elementos")) 
    segundaLista = parseInt(prompt("Introduce la segunda lista con " + n + " elementos"))
}

pedirListas()
