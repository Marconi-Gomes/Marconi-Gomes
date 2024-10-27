// login.js
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Credenciais de exemplo
    const users = [
        { username: "ana", password: "123" },
        { username: "marconi", password: "123" },
        { username: "myharakiri", password: "123" },
        { username: "visitante", password: "123" }
    ];

    // Verifica se as credenciais são válidas
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        localStorage.setItem("isLoggedIn", "true"); // Armazena a sessão
        window.location.href = "index.html"; // Redireciona para a página principal
    } else {
        message.style.color = "red";
        message.textContent = "Usuário ou senha inválidos.";
    }
}
