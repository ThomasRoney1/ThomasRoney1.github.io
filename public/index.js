// Wait for DOM to load before running any code
document.addEventListener('DOMContentLoaded', function() {
    // Create animated stars background with different sizes and colors
    function createStars() {
        const stars = document.getElementById('stars');
        if (!stars) return;

        stars.innerHTML = '';
        
        // Colors for stars
        const starColors = ['#ffffff', '#fffaf0', '#87ceeb', '#e6e6fa'];
        
        // Create multiple layers of stars for parallax effect
        for (let layer = 1; layer <= 3; layer++) {
            const starLayer = document.createElement('div');
            starLayer.className = `star-layer layer-${layer}`;
            starLayer.style.position = 'absolute';
            starLayer.style.width = '100%';
            starLayer.style.height = '100%';
            starLayer.style.zIndex = layer;
            
            // More stars in back layers, fewer in front
            const numStars = 200 - (layer * 30);
            
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.position = 'absolute';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                
                // Larger stars in front layers
                const size = (Math.random() * 2 + layer) + 'px';
                star.style.width = size;
                star.style.height = size;
                
                star.style.backgroundColor = starColors[Math.floor(Math.random() * starColors.length)];
                star.style.borderRadius = '50%';
                star.style.opacity = Math.random() * 0.7 + 0.3;
                
                // Add twinkling animation with random delays
                star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`;
                
                starLayer.appendChild(star);
            }
            
            stars.appendChild(starLayer);
        }
        
        // Add occasional shooting stars
        createShootingStars();
    }

    // Create shooting stars
    function createShootingStars() {
        const shootingStarContainer = document.createElement('div');
        shootingStarContainer.className = 'shooting-star-container';
        document.body.appendChild(shootingStarContainer);
        
        setInterval(() => {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            
            // Random position and angle
            const startX = Math.random() * window.innerWidth;
            const startY = -50;
            const angle = Math.random() * 45 + 45; // 45-90 degree angle
            
            shootingStar.style.left = startX + 'px';
            shootingStar.style.top = startY + 'px';
            shootingStar.style.transform = `rotate(${angle}deg)`;
            
            shootingStarContainer.appendChild(shootingStar);
            
            // Remove shooting star after animation
            setTimeout(() => {
                shootingStar.remove();
            }, 1000);
        }, 8000); // Create new shooting star every 8 seconds
    }

    // Enhanced parallax effect on scroll
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const layers = document.querySelectorAll('.star-layer');
        
        layers.forEach((layer, index) => {
            const speed = 0.2 + (index * 0.1);
            const yPos = -(scrolled * speed);
            layer.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Add mousemove parallax effect
    function handleMouseParallax(e) {
        const layers = document.querySelectorAll('.star-layer');
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        layers.forEach((layer, index) => {
            const speed = 20 * (index + 1);
            const xPos = mouseX * speed;
            const yPos = mouseY * speed;
            layer.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    }

    // Initialize everything
    createStars();

    // Event listeners
    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateParallax);
    });

    window.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => handleMouseParallax(e));
    });

    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            createStars();
        }, 300);
    });

    // Add some nebula-like gradient effects
    function createNebula() {
        const nebula = document.createElement('div');
        nebula.className = 'nebula';
        document.body.insertBefore(nebula, document.body.firstChild);
    }

    createNebula();
});
