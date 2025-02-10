// Realizar un programa que pida la carga de una listas de cinco números entre 0 y 11. 
// Una vez obtenidas la lista, no antes, sumar una unidad a cada elemento de la lista, 
// y poner el resultado en una segunda lista. Luego, recorrer está segunda lista y sacar 
// por pantalla el nombre del mes asociado al número de cada posición. Si el número resultante 
// es >=12, se pondrá Diciembre.
// Ej. Lista 1 . 0,2,4,6,11
//      Lista 2.  1,3,5,7,12
//      Salida pantalla: enero, marzo,mayo, Julio, diciembre 

// let meses = [Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre];



function combrobarLista()
{
    let lista = new Array(numero)
    for (let i = 0; i < 5; i ++ )
    {
        let numero = parseInt(prompt("Introduce la primera lista de 5 numeros entre el 0 y el 11: "));

        if (numero < 0 || numero > 11)
        {
            numero = parseInt(prompt("Introduce de nuevo el numeroq ue ha superado los límites establecidos.")); 
        }

    }
}


function aumentarLista(lista)
{
    
}