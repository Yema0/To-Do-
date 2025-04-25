// Fonction pour afficher un message dans la page
function afficherMessage(texte, couleur = "green") {
    const msgDiv = document.getElementById("message");
    msgDiv.textContent = texte;
    msgDiv.style.color = couleur;
    msgDiv.style.fontWeight = "bold";
    msgDiv.style.marginTop = "10px";
  }
  
  // FORMULAIRE D’INSCRIPTION
  document.querySelector(".inscription")?.addEventListener("submit", function(event) {
    event.preventDefault();
  
    let nom = document.getElementById("name").value;
    let prenom = document.getElementById("Prenom").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    let nouvelUtilisateur = { nom, prenom, email, password };
  
    let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
    utilisateurs.push(nouvelUtilisateur);
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
  
    afficherMessage("Inscription réussie ! Redirection en cours...");
    
    // Redirection après 2 secondes
    setTimeout(() => {
      window.location.href = "html/connexion.html";
    }, 2000);
  });
  
  
  // TABLEAU DE BORD
  const toggleBtn = document.getElementById("toggle-users-btn");
  const listeDiv = document.getElementById("liste-utilisateurs");
  let isVisible = false;
  
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      let utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];
  
      if (!isVisible) {
        if (utilisateurs.length === 0) {
          listeDiv.innerHTML = "<p>Aucun utilisateur inscrit pour le moment.</p>";
        } else {
          let html = `<h3 style="color: #2c3e50;">Liste des utilisateurs inscrits</h3><ul style="list-style-type: none; padding: 0;">`;
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
      afficherMessage("Veuillez entrer une tâche !", "red");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Marquer comme complétée
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
      sauvegarderTaches(); // mettre à jour le localStorage
    });
  
    // Supprimer une tâche
    li.addEventListener("dblclick", function () {
      li.remove();
      sauvegarderTaches(); // mettre à jour le localStorage
    });
  
    document.getElementById("taskList").appendChild(li);
    input.value = "";
    afficherMessage("Tâche ajoutée avec succès !");
    sauvegarderTaches(); // sauvegarder après ajout
  }
  
  // Fonction pour sauvegarder les tâches
  function sauvegarderTaches() {
    const taches = [];
    document.querySelectorAll("#taskList li").forEach((li) => {
      taches.push({
        texte: li.textContent,
        complete: li.classList.contains("completed"),
      });
    });
    localStorage.setItem("taches", JSON.stringify(taches));
  }
  
  // Fonction pour charger les tâches au démarrage
  function chargerTaches() {
    const donnees = JSON.parse(localStorage.getItem("taches")) || [];
    donnees.forEach((tache) => {
      const li = document.createElement("li");
      li.textContent = tache.texte;
  
      if (tache.complete) {
        li.classList.add("completed");
      }
  
      li.addEventListener("click", function () {
        li.classList.toggle("completed");
        sauvegarderTaches();
      });
  
      li.addEventListener("dblclick", function () {
        li.remove();
        sauvegarderTaches();
      });
  
      document.getElementById("taskList").appendChild(li);
    });
  }
  
  // Charger les tâches dès que la page est prête
  window.addEventListener("DOMContentLoaded", chargerTaches);
  
  