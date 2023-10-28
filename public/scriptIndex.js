function logOut() {
    localStorage.removeItem('token');
    alert('Sesión cerrada');
    document.getElementById('welcomeMessage').value = '';
}

function welcome() {
    const token = localStorage.getItem('token');
    if (token) {
        document.getElementById('welcomeMessage').value = token;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    welcome()

});
