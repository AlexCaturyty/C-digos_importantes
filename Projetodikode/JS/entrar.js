const loginForm = document.getElementById("login");
const loginButton = document.getElementById("entrada");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.usuario.value;
    const password = loginForm.password.value;

    if (username == "andre" && password == "andre") {
      window.location.href = "./Trilha.html";
    } else {
      alert("Login errado, digite 'andre' como login e senha");
    }
})