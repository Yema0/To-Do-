// Fonction réutilisable pour afficher un message
function afficherMessage(texte, couleur = "green") {
    const msgDiv = document.getElementById("message");
    msgDiv.textContent = texte;
    msgDiv.style.color = couleur;
    msgDiv.style.fontWeight = "bold";
    msgDiv.style.marginTop = "10px";
  }
  
  if (window.location.pathname.includes("accueil.html")) {
    const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
  
    // Vérification de la connexion
    if (localStorage.getItem("isLoggedIn") !== "true") {
      afficherMessage("Vous devez être connecté pour accéder à cette page !", "red");
  
      // Redirection après 2 secondes
      setTimeout(() => {
        window.location.href = "conexion.html";
      }, 2000);
    }
  
    // Déconnexion
    document.getElementById("logout-btn")?.addEventListener("click", function () {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("utilisateurConnecte");
  
      afficherMessage("Déconnexion réussie !", "green");
  
      setTimeout(() => {
        window.location.href = "conexion.html";
      }, 1500);
    });
  }
  