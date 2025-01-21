function aviso(contraseña)
        {
            if(contraseña.value.length<7 || contraseña.value.length>20)
            {
                alert("la clave debe tener entre 7 y 20 caracteres");
                control.focus();    
            }
        }
