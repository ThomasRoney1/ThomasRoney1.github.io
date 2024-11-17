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

        // Create planet
        const planet = document.createElement('div');
        planet.className = 'planet';
        stars.appendChild(planet);
        
        // Create planet rings
        const rings = document.createElement('div');
        rings.className = 'planet-rings';
        planet.appendChild(rings);
    }

    // Create shooting stars
    function createShootingStar() {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        document.body.appendChild(shootingStar);

        // Remove shooting star after animation completes
        shootingStar.addEventListener('animationend', function() {
            this.remove();
        });
    }

    // Initialize stars
    createStars();

    // Create shooting stars periodically
    setInterval(createShootingStar, 4000);

    // Simple parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const stars = document.getElementById('stars');
        if (stars) {
            stars.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            createStars();
        }, 300);
    });
});
