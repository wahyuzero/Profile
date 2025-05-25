        document.addEventListener('DOMContentLoaded', function() {
            const loadingScreen = document.getElementById('loadingScreen');
            const loadingText = document.getElementById('loadingText');
            const text = "Loading FrugalDev...";
            let i = 0;
            
            loadingText.textContent = "";
            
            const typeWriter = () => {
                if (i < text.length) {
                    loadingText.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    setTimeout(() => {
                        loadingScreen.style.opacity = "0";
                        setTimeout(() => {
                            loadingScreen.style.display = "none";
                        }, 500);
                    }, 500);
                }
            };
            
            typeWriter();
        });

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                menuToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Sticky Header Effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(42, 42, 42, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.4)';
            } else {
                header.style.backgroundColor = 'var(--primary)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            }
        });

        // Simple Animation for Elements on Scroll
        const revealElements = document.querySelectorAll('.section-title, .project-card, .sticky-note, .tool-item, .gallery-item, .contact-item');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                
                if (elementTop < windowHeight - 50) {
                    element.style.opacity = '1';
                    element.style.transform = element.classList.contains('sticky-note') 
                        ? 'rotate(var(--rotate)) translateY(0)' 
                        : 'translateY(0)';
                } else {
                    element.style.opacity = '0';
                    element.style.transform = element.classList.contains('sticky-note') 
                        ? 'rotate(var(--rotate)) translateY(20px)' 
                        : 'translateY(20px)';
                }
            });
        };

        // Add Initial Styles for Animation
        revealElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = element.classList.contains('sticky-note') 
                ? 'rotate(var(--rotate)) translateY(20px)' 
                : 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        // Run on Page Load and Scroll
        window.addEventListener('load', revealOnScroll);
        window.addEventListener('scroll', revealOnScroll);
