function login_user() {
    login()
        .then((response) => {
            if (response.token) {
                const token = response.token;
                localStorage.setItem('token', token);
                alert('Inicio de sesión exitoso, token guardado en LOCAL STORAGE');
                window.location.href = 'index.html';
            } else {
                alert(response.message);
            }
        })
        .catch((error) => {
            alert('Error al iniciar sesión');
        });
}

function login() {
    let usuario_ = document.getElementById('usuario').value;
    let password_ = document.getElementById('password').value;

    let data = {
        usuario: usuario_,
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

        fetch('/login', request_options)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`));
    });
}
function cancelar() {
    document.getElementById('usuario').value = '';
    document.getElementById('password').value = '';
}