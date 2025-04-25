document.querySelector("#login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let storedUser = JSON.parse(localStorage.getItem("utilisateur"));
    let message = document.getElementById("message");

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        message.style.color = "green";
        message.textContent = "Connexion réussie ! Redirection...";
        localStorage.setItem("isLoggedIn", "true");
        
        // Rediriger après un petit délai pour voir le message
        setTimeout(() => {
            window.location.href = "./accueil.html";
        }, 1500); // 1,5 seconde
    } else {
        message.style.color = "red";
        message.textContent = "Identifiants incorrects. Redirection vers l'inscription...";

        setTimeout(() => {
            window.location.href = "./index.html";
        }, 2000);
    }
});
