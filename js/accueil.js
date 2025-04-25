if (window.location.pathname.includes("accueil.html")) {
    const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];

    // Vérification de la connexion
    if (localStorage.getItem("isLoggedIn") !== "true") {
        alert("Vous devez être connecté !");
        window.location.href = "conexion.html"; 
    }

    // Déconnexion
    document.getElementById("logout-btn")?.addEventListener("click", function() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("utilisateurConnecte");
        alert("Déconnexion réussie !");
        window.location.href = "conexion.html";
    });
}
