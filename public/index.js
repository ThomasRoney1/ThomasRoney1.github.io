// Wait for DOM to load before running any code
document.addEventListener('DOMContentLoaded', function() {
    // Create animated stars background
    function createStars() {
        const stars = document.getElementById('stars');
        if (!stars) return; // Safety check

        // Clear any existing stars first
        stars.innerHTML = '';

        // Create new stars
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.backgroundColor = '#fff';
            star.style.borderRadius = '50%';
            star.style.opacity = Math.random();
            stars.appendChild(star);
        }
    }

    // Initialize stars
    createStars();

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const stars = document.getElementById('stars');
        if (stars) {
            stars.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
});

// Add window resize handler to recreate stars when window size changes
window.addEventListener('resize', () => {
    // Debounce the resize event
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
        createStars();
    }, 300);
});
