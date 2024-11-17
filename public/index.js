 // Create animated stars background
        function createStars() {
            const stars = document.getElementById('stars');
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

        createStars();

        // Parallax effect on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const stars = document.getElementById('stars');
            stars.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
