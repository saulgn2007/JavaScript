function sueldo()
{
    let cont1 = 0;
    let cont2 = 0;
    let total = 0;
    let sueldo;
    let x = 0;
    while (x < 5) 
    {
        sueldo = parseInt(prompt('Ingrese el sueldo'));
        if (sueldo <= 300) 
        {
            cont1 = cont1 + 1;
        } 
            else 
            {
                cont2 = cont2 + 1;
            }
        total = total + sueldo;
        x = x + 1;
    }
return 'Cantidad de empleados que cobran 300 o menos:' +cont1+ "<br>"+ "Cantidad de empleados que cobran más de 300:" +cont2+ "<br>Gastos en sueldos en la empresa: " +total;
}
let resultadoTotal=sueldo()
document.write(resultadoTotal)