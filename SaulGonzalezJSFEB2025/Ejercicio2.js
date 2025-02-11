function comprobar()
{
    let correctas = 0
    let incorrectas = 0
    let eleccion1 = document.getElementById("pregunta1");
    let eleccion2 = document.getElementById("pregunta2");
    let eleccion3 = document.getElementById("pregunta3");
    let eleccion4 = document.getElementById("pregunta4");

    if (eleccion1.options[eleccion1.selectedIndex].value == 1)
    {
        correctas ++
    }
        else
            {
                incorrectas ++
            }

    if (eleccion2.options[eleccion2.selectedIndex].value == 1)
        {
            correctas ++
        }
        else
            {
                incorrectas ++
            }
    
    if (eleccion3.options[eleccion3.selectedIndex].value == 1)
        {
            correctas ++
        }
            else
            {
                incorrectas ++
            }

    if (eleccion4.options[eleccion4.selectedIndex].value == 1)
        {
            correctas ++
        }
            else
                {
                    incorrectas ++
                }
    
    alert("Cantidad de respuestas correctas: " + correctas + ", y la cantidad de respuestas incorrectas: " +incorrectas + ".");

    if (correctas >=2){
        document.body.style.backgroundColor = "green";
    }
        else
            {
                document.body.style.backgroundColor = "red";
            }
}