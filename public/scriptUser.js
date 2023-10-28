function guardar_user() {
    guardar()
        .then(() => {
            alert('Registro exitoso.')
        })
        .catch((error) => {
            alert('Error al ingresar.')
        })
}
function guardar() {
    let user_ = document.getElementById('user').value;
    let email_ = document.getElementById('email').value;
    let password_ = document.getElementById('password').value;
    let roles_ = document.getElementById('roles').value;

    let data = {
        user: user_,
        email: email_,
        password: password_,
        roles: roles_
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
    document.getElementById('user').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('roles').value = '';
}