// Fonction réutilisable pour afficher un message dans la page
function afficherMessage(texte, couleur = "green") {
    const msgDiv = document.getElementById("message");
    msgDiv.textContent = texte;
    msgDiv.style.color = couleur;
    msgDiv.style.fontWeight = "bold";
    msgDiv.style.marginTop = "10px";
  }
  
  // FORMULAIRE DE CONNEXION
  document.querySelector("#login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
  
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let storedUser = JSON.parse(localStorage.getItem("utilisateur"));
  
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      afficherMessage("Connexion réussie ! Redirection...", "green");
      localStorage.setItem("isLoggedIn", "true");
  
      setTimeout(() => {
        window.location.href = "./accueil.html";
      }, 1500);
    } else {
      afficherMessage("Identifiants incorrects. Redirection vers l'inscription...", "red");
  
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    }
  });
  