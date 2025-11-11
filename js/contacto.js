// Obtener el formulario
let formulario = document.getElementById('formularioContacto');

// Cuando se envia el formulario
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evito que se envie el formulario
    
    // Obtener los valores de los campos
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;
    
    // Array para guardar los errores
    let errores = [];
    
    // Valido nombre (obligatorio y longitud máxima 50)
    if (nombre === '') {
        errores.push('El nombre es obligatorio');
    } else if (nombre.length > 50) {
        errores.push('El nombre no puede tener mas de 50 caracteres');
    }
    
    // Valido email 
    if (email === '') {
        errores.push('El email es obligatorio');
    } else if (email.length > 100) {
        errores.push('El email no puede tener mas de 100 caracteres');
    } else {
        // Expresion regular para validar email
        // Acepta letras, numeros, punto, guion y guion bajo
        let pat_mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!pat_mail.test(email)) {
            errores.push('El email debe tener un formato valido (ejemplo@correo.com)');
        }
    }
    
    // Valido telefono (obligatorio, longitud y formato con expresión regular)
    if (telefono === '') {
        errores.push('El telefono es obligatorio');
    } else if (telefono.length > 15) {
        errores.push('El telefono no puede tener mas de 15 caracteres');
    } else {
      
        // Acepta exactamente 10 digitos, puede tener espacios o guiones pero debe tener 10 numeros
        let pat_tel = /^\d{10}$/;
        
        if (!pat_tel.test(telefono)) {
            errores.push('El telefono debe tener exactamente 10 digitos');
        }
    }
    
    // Valido mensaje (obligatorio y longitud máxima 500)
    if (mensaje === '') {
        errores.push('El mensaje es obligatorio');
    } else if (mensaje.length > 500) {
        errores.push('El mensaje no puede tener mas de 500 caracteres');
    }
    
    // Muestro errores o datos enviados
    let divError = document.getElementById('mensajeError');
    let divDatos = document.getElementById('datosEnviados');
    
    if (errores.length > 0) {
        // Hay errores, mostrarlos
        divError.innerHTML = '';
        
        let titulo = document.createElement('h3');
        titulo.textContent = 'Por favor corrija los siguientes errores:';
        divError.appendChild(titulo);
        
        let listaErrores = document.createElement('ul');
        for (let i = 0; i < errores.length; i++) {
            let itemError = document.createElement('li');
            itemError.textContent = errores[i];
            listaErrores.appendChild(itemError);
        }
        divError.appendChild(listaErrores);
        
        divError.style.display = 'block';
        divDatos.style.display = 'none';
        
    } else {
        // No hay errores, mostrar datos enviados
        divError.style.display = 'none';
        
        divDatos.innerHTML = '';
        
        let tituloExito = document.createElement('h3');
        tituloExito.textContent = '¡Formulario enviado correctamente!';
        tituloExito.style.color = '#2e7d32';
        divDatos.appendChild(tituloExito);
        
        let parrafo = document.createElement('p');
        parrafo.textContent = 'Estos son los datos que enviaste:';
        divDatos.appendChild(parrafo);
        
        let datosLista = document.createElement('ul');
        datosLista.style.listStyle = 'none';
        datosLista.style.padding = '0';
        
        let itemNombre = document.createElement('li');
        itemNombre.innerHTML = '<strong>Nombre:</strong> ' + nombre;
        itemNombre.style.marginBottom = '10px';
        datosLista.appendChild(itemNombre);
        
        let itemEmail = document.createElement('li');
        itemEmail.innerHTML = '<strong>Email:</strong> ' + email;
        itemEmail.style.marginBottom = '10px';
        datosLista.appendChild(itemEmail);
        
        let itemTelefono = document.createElement('li');
        itemTelefono.innerHTML = '<strong>Teléfono:</strong> ' + telefono;
        itemTelefono.style.marginBottom = '10px';
        datosLista.appendChild(itemTelefono);
        
        let itemMensaje = document.createElement('li');
        itemMensaje.innerHTML = '<strong>Mensaje:</strong> ' + mensaje;
        datosLista.appendChild(itemMensaje);
        
        divDatos.appendChild(datosLista);
        divDatos.style.display = 'block';
        
        // Limpiar el formulario
        formulario.reset();
    }
});
