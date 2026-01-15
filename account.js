/* ---------- REGISTO ---------- */
function register(event) {
    if (event) event.preventDefault();

    const firstName = document.getElementById("primeiro_nome").value.trim();
    const lastName = document.getElementById("ultimo_nome").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value;

    if (!firstName || !lastName || !username || !email || !password) {
        Swal.fire("Erro", "Preenche todos os campos obrigatórios.", "error");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(u => u.email === email)) {
        Swal.fire("Erro", "Este email já está registado.", "error");
        return;
    }

    users.push({
        name: `${firstName} ${lastName}`,
        username,
        email,
        password
    });

    localStorage.setItem("users", JSON.stringify(users));

    Swal.fire({
        title: "Conta criada!",
        text: "Registo efetuado com sucesso.",
        icon: "success",
        confirmButtonText: "Iniciar sessão"
    }).then(() => {
        window.location.href = "login.html";
    });
}

/* ---------- LOGIN ---------- */
function login(event) {
    if (event) event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        Swal.fire("Erro", "Email ou palavra-passe incorretos.", "error");
        return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(user));

    Swal.fire({
        title: "Login efetuado!",
        text: `Bem-vindo, ${user.name}`,
        icon: "success",
        confirmButtonText: "Continuar"
    }).then(() => {
        window.location.href = "index.html";
    });
}
