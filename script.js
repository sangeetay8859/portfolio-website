// ============================================
// INTERACTIVE MEDICAL PORTFOLIO - JAVASCRIPT
// ============================================

// Add floating particles to hero section
function createFloatingParticles() {
    const hero = document.querySelector('.hero-background');
    if (!hero) return;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 100 + 30}px;
            height: ${Math.random() * 100 + 30}px;
            background: radial-gradient(circle, rgba(0, 153, 255, ${Math.random() * 0.4}), transparent);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 8 + 6}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            z-index: 1;
        `;
        hero.appendChild(particle);
    }
}

// Call after DOM loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFloatingParticles);
} else {
    createFloatingParticles();
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(135deg, rgba(200, 230, 255, 0.98), rgba(179, 217, 255, 0.98))';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 153, 255, 0.2)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #e6f3ff 0%, #cce6ff 100%)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 153, 255, 0.15)';
    }
});

// ============================================
// FORM SUBMISSION HANDLING
// ============================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const textareaInput = contactForm.querySelector('textarea');
        
        const name = nameInput.value;
        const email = emailInput.value;
        const message = textareaInput.value;
        
        // Simple validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }
        
        // Success message
        showNotification('Message sent successfully! I will get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// ============================================
// NOTIFICATION FUNCTION
// ============================================

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Create styles for notification
    const styles = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        font-weight: 600;
        z-index: 2000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    `;
    
    notification.style.cssText = styles;
    
    if (type === 'success') {
        notification.style.background = '#27ae60';
        notification.style.color = 'white';
    } else {
        notification.style.background = '#dc3545';
        notification.style.color = 'white';
    }
    
    document.body.appendChild(notification);
    
    // Fade out after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
// ============================================

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#4caf50' : '#ff6b6b'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// SKILL TAGS ANIMATION
// ============================================

const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.05}s`;
    tag.style.animation = 'fadeInUp 0.6s ease-out backwards';
});

// ============================================
// EDUCATION CARDS STAGGER ANIMATION
// ============================================

const educationCards = document.querySelectorAll('.education-card');
educationCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.animation = 'fadeInUp 0.6s ease-out backwards';
});

// ============================================
// ACHIEVEMENT CARDS STAGGER ANIMATION
// ============================================

const achievementCards = document.querySelectorAll('.achievement-card');
achievementCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.animation = 'fadeInUp 0.6s ease-out backwards';
});

// ============================================
// PROGRESS BAR ANIMATION
// ============================================

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
                barObserver.unobserve(entry.target);
            }
        });
    });
    
    progressBars.forEach(bar => {
        bar.style.width = '0';
        barObserver.observe(bar);
    });
}

// ============================================
// SMOOTH SCROLL TO SECTIONS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// ACTIVE NAV LINK INDICATOR
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    
    // Get all sections
    const sections = {
        'home': document.querySelector('#home'),
        'about': document.querySelector('#about'),
        'experience': document.querySelector('#experience'),
        'education': document.querySelector('#education'),
        'skills': document.querySelector('#skills'),
        'achievements': document.querySelector('#achievements'),
        'contact': document.querySelector('#contact')
    };
    
    // Check which section is in view
    for (const [key, section] of Object.entries(sections)) {
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = key;
            }
        }
    }
    
    // Remove active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current section's nav link
    if (current) {
        const activeLink = document.querySelector(`a[href="#${current}"]`);
        if (activeLink) {
            activeLink.style.borderBottom = '3px solid #ff6b6b';
        }
    }
});

// ============================================
// PARALLAX EFFECT ON HERO
// ============================================

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollY = window.scrollY;
        hero.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
    }
});

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounters() {
    const statBoxes = document.querySelectorAll('.stat-box h3');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                let currentValue = 0;
                
                const increment = finalValue / 50;
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        target.textContent = finalValue + '+';
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(currentValue) + '+';
                    }
                }, 20);
                
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statBoxes.forEach(box => {
        counterObserver.observe(box);
    });
}

// Initialize counter animation when page loads
document.addEventListener('DOMContentLoaded', animateCounters);

// ============================================
// RIPPLE EFFECT ON BUTTONS
// ============================================

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Prevent if it's a link
        if (this.tagName === 'A' && this.href.startsWith('#')) {
            return;
        }
        
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            top: ${y}px;
            left: ${x}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        // Add animation if not already in CSS
        if (!document.querySelector('style[data-ripple]')) {
            const style = document.createElement('style');
            style.setAttribute('data-ripple', '');
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ============================================
// TYPING EFFECT ON HERO SUBTITLE
// ============================================

function typeEffect(element, text, speed = 50) {
    element.textContent = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing effect to subtitle on page load
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeEffect(subtitle, originalText, 50);
    }
});

// ============================================
// LAZY LOAD IMAGES (for future image additions)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// DARK MODE TOGGLE (Optional Feature)
// ============================================

function initDarkModeToggle() {
    // Check for saved dark mode preference
    const darkMode = localStorage.getItem('darkMode') === 'true';
    
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
}

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', initDarkModeToggle);

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Add animation to hero on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease-out';
    }
});

// ============================================
// PRINT STYLES
// ============================================

window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
});

console.log('Portfolio website loaded successfully! 🚀');
