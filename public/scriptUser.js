function guardar_user() {
    guardar()
        .then(() => {
            alert('Registro exitoso.')
            cancelar_user()
        })
        .catch((error) => {
            alert('Error al ingresar.')
        })
}
function guardar() {
    let rolSelect = document.getElementById('rolSelect');
    let selectedRoleId = rolSelect.value;


    let rolId = selectedRoleId;
    let usuario_ = document.getElementById('usuario').value;
    let nombre_ = document.getElementById('nombre').value;
    let apellido_ = document.getElementById('apellido').value;
    let correo_ = document.getElementById('correo').value;
    let password_ = document.getElementById('password').value;

    let data = {
        rol: rolId,
        usuario: usuario_,
        nombre: nombre_,
        apellido: apellido_,
        correo: correo_,
        password: password_
    };
    return new Promise((resolve, reject) => {
        const request_options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch('/user', request_options)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`));
    });
}
function cancelar_user() {
    const rolSelect = document.getElementById('rolSelect');
    for (let i = 0; i < rolSelect.options.length; i++) {
        rolSelect.options[i].selected = false;
    }
    document.getElementById('usuario').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('password').value = '';
    document.getElementById('rolSelect').value = '';
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
function cargarRoles() {
    console.log('Comenzando carga de users...');
    return new Promise((resolve, reject) => {
        fetch('/rol')
            .then(response => resolve(response.json()))
            .catch(error => reject(`[error]: ${error}`));
    });
}

document.addEventListener('DOMContentLoaded', function () {
    cargarRoles()
        .then((roles) => {
            const rolSelect = document.getElementById('rolSelect');

            roles.body.forEach(rol => {
                const option = document.createElement('option');
                option.value = rol._id;
                option.textContent = rol.name;
                rolSelect.appendChild(option);
            });
        })
        .catch((error) => {
            console.error('Error al cargar las roles:', error);
        });
});



