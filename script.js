const body = document.body;

// Force scroll to top on reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Intro Video Logic
document.addEventListener('DOMContentLoaded', () => {
    const introOverlay = document.getElementById('intro-overlay');
    const introVideo = document.getElementById('intro-video');
    const skipBtn = document.querySelector('.skip-intro');

    if (introOverlay && introVideo) {
        document.body.classList.add('intro-active');
        
        // Attempt to play video
        const playPromise = introVideo.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Autoplay was prevented, show skip button or handle error
                console.log("Autoplay prevented. Click to play.");
                skipBtn.textContent = "Click to Start";
            });
        }

        const closeIntro = () => {
            introOverlay.classList.add('fade-out');
            document.body.classList.remove('intro-active');
            setTimeout(() => {
                introOverlay.remove();
            }, 800);
        };

        introVideo.addEventListener('ended', closeIntro);
        skipBtn.addEventListener('click', closeIntro);
        introOverlay.addEventListener('click', closeIntro);
    }
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger menu
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Create Page Transition Overlay
const transitionOverlay = document.createElement('div');
transitionOverlay.className = 'page-transition';
document.body.appendChild(transitionOverlay);

// Handle the "unveiling" animation on page load
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// Smooth scrolling with Page Transition Effect
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        // Skip if not a valid section link
        if (!targetId || !targetId.startsWith('#')) return;

        e.preventDefault();
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Step 1: Slide Curtain Up
            transitionOverlay.classList.add('active');
            
            setTimeout(() => {
                // Step 2: Instantly Jump While Hidden
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'instant'
                });
                
                // Step 3: Slide Curtain Down
                transitionOverlay.classList.remove('active');
            }, 600);
        }
    });
});






// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = body.getAttribute('data-theme') === 'dark'
            ? 'rgba(26, 32, 44, 0.98)'
            : 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = body.getAttribute('data-theme') === 'dark'
            ? 'rgba(26, 32, 44, 0.95)'
            : 'rgba(255, 255, 255, 0.95)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Stats Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);

        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsSection = document.getElementById('about');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsAnimated = true;
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// Skills Progress Bar Animation
function animateSkillBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }, index * 100);
    });
}

// Trigger skill animation when skills section is visible
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAnimated) {
            animateSkillBars();
            skillsAnimated = true;
        }
    });
}, { threshold: 0.3 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Disable button and show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            showNotification('Oops! Something went wrong. Please try again.', 'error');
        } finally {
            // Restore button state
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 500);
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        ${type === 'success' ? 'background: linear-gradient(135deg, #48bb78, #38a169);' : 'background: linear-gradient(135deg, #f56565, #e53e3e);'}
    `;

    // Style notification content
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;

    // Style close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: 5px;
        right: 5px;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 5px;
        border-radius: 4px;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    `;

    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.opacity = '1';
    });

    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.opacity = '0.7';
    });

    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .certificate-card, .timeline-item, .stat');

    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '<') {
                // Handle HTML tags
                let tagEnd = text.indexOf('>', i);
                element.innerHTML += text.substring(i, tagEnd + 1);
                i = tagEnd + 1;
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, speed);
        }
    }

    type();
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (hero && heroContent && window.innerWidth > 768) {
        const rate = scrolled * -0.3;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Initialize typing animation after load
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.innerHTML;
            typeWriter(heroTitle, originalText, 50);
        }
    }, 500);
});

// Smooth reveal animation for sections
const revealElements = document.querySelectorAll('section');

// Attach scroll-curtain effect to all sections
revealElements.forEach(el => {
    const curtain = document.createElement('div');
    curtain.className = 'scroll-curtain';
    el.appendChild(curtain);
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('section-scrolled');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealObserver.observe(el);
});

// Add hover effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Video click halfscreen lightbox effect
document.querySelectorAll('.project-image video').forEach(video => {
    // Add pointer cursor to indicate clickability
    video.style.cursor = 'pointer';

    video.addEventListener('click', (e) => {
        e.stopPropagation();

        if (!video.classList.contains('video-halfscreen')) {
            const parent = video.parentElement;
            
            const placeholder = document.createElement('div');
            placeholder.className = 'video-placeholder';
            placeholder.style.width = '100%';
            placeholder.style.height = '100%';
            placeholder.style.background = '#1a1a1a';
            
            video._originalParent = parent;
            video._placeholder = placeholder;
            
            parent.insertBefore(placeholder, video);
            document.body.appendChild(video);
            
            video.classList.add('video-halfscreen');

            const closeHalfscreen = () => {
                video.classList.remove('video-halfscreen');
                if (video._originalParent && video._placeholder) {
                    video._originalParent.insertBefore(video, video._placeholder);
                    video._placeholder.remove();
                }
                document.removeEventListener('click', closeHalfscreen);
            };

            setTimeout(() => {
                document.addEventListener('click', closeHalfscreen);
            }, 10);
        } else {
            video.classList.remove('video-halfscreen');
            if (video._originalParent && video._placeholder) {
                video._originalParent.insertBefore(video, video._placeholder);
                video._placeholder.remove();
            }
        }
    });
});

// Add click effect for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Enhanced scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > 10) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// Add custom cursor effect (optional)
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
    // Your scroll handling code here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Certificate Image Lightbox - Click to view fullscreen
const certificateImages = document.querySelectorAll('.certificate-image img');
const lightboxModal = createLightboxModal();

certificateImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        openLightbox(img.src, img.alt);
    });
});

function createLightboxModal() {
    const modal = document.createElement('div');
    modal.className = 'certificate-lightbox';
    modal.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-image" src="" alt="">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Close on clicking X button
    const closeBtn = modal.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => closeLightbox());

    // Close on clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeLightbox();
        }
    });

    // Close on pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeLightbox();
        }
    });

    return modal;
}

function openLightbox(src, caption) {
    const modal = document.querySelector('.certificate-lightbox');
    const img = modal.querySelector('.lightbox-image');
    const captionElement = modal.querySelector('.lightbox-caption');

    img.src = src;
    img.alt = caption;
    captionElement.textContent = caption;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    const modal = document.querySelector('.certificate-lightbox');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}