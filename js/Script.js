document.querySelector(".inscription")?.addEventListener("submit", function(event) {
  event.preventDefault();

  let nom = document.getElementById("name").value;
  let prenom = document.getElementById("Prenom").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let nouvelUtilisateur = { nom, prenom, email, password };

  // Récupère les utilisateurs existants ou tableau vide
  let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];

  // Ajoute le nouveau
  utilisateurs.push(nouvelUtilisateur);

  // Stocke à nouveau la liste
  localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));

  alert("Inscription réussie ! Vous allez être redirigé vers la connexion.");
  window.location.href = "./connexion.html";
});


// TABLEAU DE BORD
 // Fonction pour afficher/masquer les utilisateurs stockés
const toggleBtn = document.getElementById("toggle-users-btn");
const listeDiv = document.getElementById("liste-utilisateurs");
let isVisible = false;

if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        if (!isVisible) {
            let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];

            if (utilisateurs.length === 0) {
                listeDiv.innerHTML = "<p>Aucun utilisateur inscrit pour le moment.</p>";
            } else {
                let html = `
                    <h3 style="color: #2c3e50;">Liste des utilisateurs inscrits</h3>
                    <ul style="list-style-type: none; padding: 0;">`;

                utilisateurs.forEach((user) => {
                    html += `
                        <li style="margin-bottom: 10px; padding: 10px; background: #ecf0f1; border-radius: 8px;">
                            <strong>Nom :</strong> ${user.nom}<br>
                            <strong>Prénom :</strong> ${user.prenom}<br>
                            <strong>Email :</strong> ${user.email}
                        </li>`;
                });

                html += "</ul>";
                listeDiv.innerHTML = html;
            }

            listeDiv.style.display = "block";
            toggleBtn.textContent = "Masquer les utilisateurs";
        } else {
            listeDiv.style.display = "none";
            toggleBtn.textContent = "Afficher les utilisateurs";
        }

        isVisible = !isVisible;
    });
}



// TO DO LIST

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText === "") {
      alert("Veuillez entrer une tâche !");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Marquer comme complétée
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    // Supprimer une tâche
    li.addEventListener("dblclick", function () {
      li.remove();
    });
  
    document.getElementById("taskList").appendChild(li);
    input.value = ""; 
  }
  