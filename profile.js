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
