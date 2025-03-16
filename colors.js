document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', function() {
        document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
        this.classList.add('active');
        
        // Change CSS variables
        document.documentElement.style.setProperty('--main', this.getAttribute('data-primary'));
        document.documentElement.style.setProperty('--accent', this.getAttribute('data-secondary'));
    });
});