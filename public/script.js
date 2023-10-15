var socket = io.connect('http://localhost:3000/', {
    forceNet: true
});

socket.on('mensaje', (data) => console.log(data));

socket.on('notificacion', (message) => {
    alert(message);
});


function guardar() {
    let empresaSelect = document.getElementById('empresaSelect');
    let selectedOptions = [...empresaSelect.selectedOptions]; // Obtener opciones seleccionadas

    let empresaId = selectedOptions.map(option => option.value);
    let ruc_ = document.getElementById('ruc').value;
    let cedula_ = document.getElementById('cedula').value;
    let nombre_ = document.getElementById('nombre').value;
    let apellido_ = document.getElementById('apellido').value;
    let email_ = document.getElementById('email').value;
    let domicilio_ = document.getElementById('domicilio').value;
    let telefono_ = document.getElementById('telefono').value;

    let data = {
        empresa: empresaId.map(id => ({ id })),
        ruc: ruc_,
        cedula: cedula_,
        nombre: nombre_,
        apellido: apellido_,
        email: email_,
        domicilio: domicilio_,
        telefono: telefono_
    };
    console.log(data);
    return new Promise((resolve, reject) => {
        const request_options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch('/representantelegal', request_options)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`));
    });
}
function cancelar_representante() {
    const empresaSelect = document.getElementById('empresaSelect');
    for (let i = 0; i < empresaSelect.options.length; i++) {
        empresaSelect.options[i].selected = false;
    }
    document.getElementById('ruc').value = '';
    document.getElementById('cedula').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
    document.getElementById('domicilio').value = '';
    document.getElementById('telefono').value = '';
}


function guardar_representante() {
    guardar()
        .then(() => {
            alert('Registro exitoso.')
        })
        .catch((error) => {
            alert('Error al ingresar.')
        })
}
function cargarEmpresas() {
    console.log('Comenzando carga de empresas...');
    return new Promise((resolve, reject) => {
        fetch('/empresa')
            .then(response => resolve(response.json()))
            .catch(error => reject(`[error]: ${error}`));
    });
}

document.addEventListener('DOMContentLoaded', function () {
    cargarEmpresas()
        .then((empresas) => {
            const empresaSelect = document.getElementById('empresaSelect');

            empresas.body.forEach(empresa => {
                const option = document.createElement('option');
                option.value = empresa._id;
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = 'selectedEmpresas'; // Asigna un nombre para agrupar los checkboxes
                checkbox.value = empresa._id; // Valor asociado al checkbox
                option.appendChild(checkbox); // Agrega el checkbox a la opción
                option.textContent = empresa.nombre;
                empresaSelect.appendChild(option);
            });
        })
        .catch((error) => {
            console.error('Error al cargar las empresas:', error);
        });
});


