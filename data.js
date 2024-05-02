// insciption

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire

        // Récupérer les valeurs des champs
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Stocker les valeurs dans le localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Afficher un message de succès
        alert('Inscription réussie !');

        // Rediriger l'utilisateur vers la page d'accueil
        window.location.href = 'connecter.html';
    });
});

// Code pour la page connecter.html
document.getElementById('connexionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupérer les valeurs des champs
    var usernameEmail = document.getElementById('username_email').value;
    var password = document.getElementById('password').value;

    // Récupérer les données du localStorage
    var storedUsername = localStorage.getItem('username');
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    // Vérifier si les informations saisies correspondent à celles du localStorage
    if ((usernameEmail === storedUsername || usernameEmail === storedEmail) && password === storedPassword) {
        // Afficher un message de succès
        alert('Connexion réussie !');

        // Rediriger l'utilisateur vers la page de profil
        window.location.href = 'profile.html';
    } else {
        // Afficher un message d'erreur
        alert('Nom d\'utilisateur, e-mail ou mot de passe incorrect.');

        // Actualiser la page pour permettre à l'utilisateur de ressayer
        location.reload();
    }
});

// Code pour la page profile.html
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les données du localStorage
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    // Mettre à jour les éléments HTML avec les données du localStorage
    if (username) {
        document.getElementById('username').textContent = username;
    }
    if (email) {
        document.getElementById('email').textContent = email;
    }
});