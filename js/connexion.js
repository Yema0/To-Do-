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
    let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
  
    let utilisateurTrouve = utilisateurs.find(u => u.email === email && u.password === password);
  
    if (utilisateurTrouve) {
      afficherMessage("Connexion réussie ! Redirection...", "green");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("utilisateurConnecte", JSON.stringify(utilisateurTrouve));
  
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
  