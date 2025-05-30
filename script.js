// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Email subscription handler
function handleSubscribe(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email-input');
    const successMessage = document.getElementById('success-message');
    const email = emailInput.value.trim();
    
    if (email) {
        // Show success message
        successMessage.style.display = 'block';
        successMessage.classList.add('animate-fade-in-up');
        
        // Clear the input
        emailInput.value = '';
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
            successMessage.classList.remove('animate-fade-in-up');
        }, 3000);
        
        // You can add actual email subscription logic here
        console.log('Email subscribed:', email);
    }
}

// Add scroll animations when elements come into view
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe cards for animation
    const cards = document.querySelectorAll('.app-preview-card, .app-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    addScrollAnimations();
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});

// Add parallax effect to floating elements
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.float-element');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Initialize parallax effect
addParallaxEffect();

// Add smooth hover effects for cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.app-preview-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add typing effect for email placeholder (optional enhancement)
function addTypingEffect() {
    const emailInput = document.getElementById('email-input');
    const originalPlaceholder = emailInput.placeholder;
    
    emailInput.addEventListener('focus', () => {
        emailInput.placeholder = '';
    });
    
    emailInput.addEventListener('blur', () => {
        if (!emailInput.value) {
            emailInput.placeholder = originalPlaceholder;
        }
    });
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', addTypingEffect);
