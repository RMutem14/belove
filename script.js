document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuBtn = document.querySelector('.menu-btn');
    const navUl = document.querySelector('nav ul');
    
    menuBtn.addEventListener('click', function() {
        navUl.classList.toggle('active');
        
        // Animation des lignes du bouton
        this.classList.toggle('close');
    });
    
    // Changement du header au scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navUl.classList.remove('active');
            menuBtn.classList.remove('close');
        });
    });
});