document.querySelector('.nav-toggle').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links');
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
        var navLinks = document.querySelector('.nav-links');
        var toggle = document.querySelector('.nav-toggle');
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });
});
