function guardar_empresa() {
    guardar()
        .then(() => {
            alert('Registro exitoso.')
        })
        .catch((error) => {
            alert('Error al ingresar.')
        })
}
function guardar() {
    let ruc_ = document.getElementById('ruc').value;
    let nombre_ = document.getElementById('nombre').value;
    let domicilio_ = document.getElementById('domicilio').value;
    let telefono_ = document.getElementById('telefono').value;

    let data = {
        ruc: ruc_,
        nombre: nombre_,
        domicilio: domicilio_,
        telefono: telefono_
    };

    return new Promise((resolve, reject) => {
        const request_options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch('/empresa', request_options)
            .then((data) => resolve(data.json()))
            .catch((error) => reject(`[error]: ${error}`));
    });
}
function cancelar_empresa() {
    document.getElementById('ruc').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('domicilio').value = '';
    document.getElementById('telefono').value = '';
}