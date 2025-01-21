function fecha()
{
    let resultado
    let fecha
    fecha = new Date();
    let mes = fecha.getMonth();
    if (mes < 4) 
    {
        resultado=('Nos encontramos en el primer cuatrimestre del año');
    } 
        else 
        {
            if (mes < 8) 
            {
                resultado=('Nos encontramos en el segundo cuatrimestre del año');
            } 
                else 
                {
                    resultado=('Nos encontramos en el tercer cuatrimestre del año');
                }
        }
return resultado
}
let resultadoFinal=fecha()
document.write(resultadoFinal)