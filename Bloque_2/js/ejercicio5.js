function censo(){
    let sexo, sexom=0, sexof=0, personas=0, edad=0, doc=0, adultos=0;
    do {
        doc=parseInt(prompt("Ingrese el número de documento"))
        if(doc!=0){
        sexo=prompt("Ingrese el sexo, f o m")
        edad=parseInt(prompt("Ingrese la edad de la persona"))
        personas++
    if (sexo=="m"){
            sexom++
            if (16<edad<65){
            adultos++
    }
    }else    {
            sexof++
    }
}
} while (doc!=0);
    return "El número de personas censadas es: "+personas+"<br> El número de varones es: "+sexom+"<br> El número de mujeres es: "+sexof+"<br> El número de personas entre 16 y 65 años es: "+adultos;
} 
let resultadofinal=censo();
document.write(resultadofinal);