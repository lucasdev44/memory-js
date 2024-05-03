document.addEventListener('DOMContentLoaded', function() {
    
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    if (username) {
        document.getElementById('username').textContent = username;
    }
    if (email) {
        document.getElementById('email').textContent = email;
    }
});
