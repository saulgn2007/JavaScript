function multiplo()
{
    let cadenaresultado=""
    for (let multiplo=8 ; multiplo<500 ; multiplo+=8 )
    {
        if (multiplo==496)
        {
            cadenaresultado=cadenaresultado+multiplo;
        } 
        else
        {
            cadenaresultado=cadenaresultado+multiplo+"-";

        }
    }
    return cadenaresultado
}
let resultado=multiplo()
document.write(resultado)