
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        alert('Inscription réussie !');

        window.location.href = 'connecter.html';
    });
});

document.getElementById('connexionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const usernameEmail = document.getElementById('username_email').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if ((usernameEmail === storedUsername || usernameEmail === storedEmail) && password === storedPassword) {
        alert('Connexion réussie !');

        window.location.href = 'profile.html';
    } else {
        alert('Nom d\'utilisateur, e-mail ou mot de passe incorrect.');

        location.reload();
    }
});
