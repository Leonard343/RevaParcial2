function login() {
    // Obtén los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Verifica el usuario y la contraseña
    if (username === "Alumno" && password === "1234") {
        alert("¡Login exitoso!");
        // Redirigir o mostrar contenido restringido
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}
