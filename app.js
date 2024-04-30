
document.getElementById("openForm").addEventListener("click", function (event) {
            event.preventDefault(); // Empêcher le lien de changer l'URL

            // Ouvrir une nouvelle page avec le formulaire d'inscription
            window.open("inscription.html", "_blank");
        });
    


    document.getElementById("openForm1").addEventListener("click", function (event) {
        event.preventDefault(); // Empêcher le lien de changer l'URL

        // Ouvrir une nouvelle page avec le formulaire de connection
        window.open("connecter.html", "_blank");
    });



    document.getElementById("openForm2").addEventListener("click", function (event) {
        event.preventDefault(); // Empêcher le lien de changer l'URL

        // Ouvrir une nouvelle page avec le profile utilisateur
        window.open("profile.html", "_blank");
    });

    document.getElementById("openForm3").addEventListener("click", function (event) {
        event.preventDefault(); // Empêcher le lien de changer l'URL

        // Ouvrir une nouvelle page avec le jeu
        window.open("memory.html", "_blank");
    });













// RECUPERATION DONNE UTILISATEUR AINSI QUE REDIRECTION

 document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement
        
        // Récupérer les valeurs des champs du formulaire
        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        const motDePasse = document.getElementById('motDePasse').value;
        
        // Créer un objet avec les données du formulaire
        const utilisateur = {
            nom: nom,
            email: email,
            motDePasse: motDePasse
        };
        
        // Stocker les données dans le localStorage
        localStorage.setItem('utilisateur', JSON.stringify(utilisateur));
        
        alert('Inscription réussie !');
        
        // Rediriger vers la page d'accueil
        window.location.href = 'index.html';
        // Réinitialiser le formulaire
        this.reset();
    });

    
    
    
    // donné dans profile

    // Tu peux utiliser JavaScript pour récupérer et afficher les données du profil ici
        // Par exemple, récupérer les données depuis une base de données ou un serveur

        // Exemple de code pour récupérer les données du profil (à remplacer par tes vraies données)
        const profileData = {
            username: "Lucas ",
            email: "lucas@exemple.com",
            gamesPlayed: 10,
            bestScore: 5000
        };

        // Mettre à jour les éléments HTML avec les données du profil
        document.getElementById("username").textContent = profileData.username;
        document.getElementById("email").textContent = profileData.email;
        document.getElementById("gamesPlayed").textContent = profileData.gamesPlayed;
        document.getElementById("bestScore").textContent = profileData.bestScore;