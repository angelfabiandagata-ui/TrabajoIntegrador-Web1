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
    
    // Valido email (obligatorio y formato correcto)
    if (email === '') {
        errores.push('El email es obligatorio');
    } else {
        // Verifico que tenga @ y punto
        let tieneArroba = false;
        let tienePunto = false;
        let posicionArroba = -1;
        let posicionPunto = -1;
        
        // Busco el @ y el punto
        for (let i = 0; i < email.length; i++) {
            if (email[i] === '@') {
                tieneArroba = true;
                posicionArroba = i;
            }
            if (email[i] === '.') {
                tienePunto = true;
                posicionPunto = i;
            }
        }
        
        // Verifico que tenga @ y punto  y que el punto este despues del @
        if (!tieneArroba || !tienePunto || posicionPunto < posicionArroba) {
            errores.push('El email debe tener un formato valido (ejemplo@correo.com)');
        }
    }
    
    // Valido telefono 
    if (telefono === '') {
        errores.push('El telefono es obligatorio');
    } else {
        // Verifico que solo tenga numeros
        let soloNumeros = true;
        for (let i = 0; i < telefono.length; i++) {
            if (telefono[i] < '0' || telefono[i] > '9') {
                soloNumeros = false;
            }
        }

        // Verifico longitud y que solo tenga numeros
        if (!soloNumeros) {
            errores.push('El telefono solo puede contener numeros');
        } else if (telefono.length < 9 || telefono.length > 15) {
            errores.push('El telefono debe tener entre 9 y 15 dígitos');
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
