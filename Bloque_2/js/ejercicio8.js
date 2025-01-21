function MostrarElMenor(a,b,c)
{
    let num1 =parseInt(prompt("Introduzca el primer número"))
    let num2 =parseInt(prompt("Introduzca el segundo número"))
    let num3 =parseInt(prompt("Introduzca el tercer número"))
    let resultado
    if(num1<num2 && num1<num3)
    {
        resultado =num1        
    }
        else
        {
            if(num2<num1 && num2<num3)
            {
                resultado= num2
            }
            else
            {
                resultado=num3
            }
        }
    return "El número menor es: " +resultado
    
}
let resultadoFinal=MostrarElMenor()
document.write(resultadoFinal)