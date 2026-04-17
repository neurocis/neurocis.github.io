// ===== Scroll-triggered fade-in animations =====
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
});

// ===== Mobile menu toggle =====
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.textContent = navLinks.classList.contains('active') ? '\u2715' : '\u2630';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.textContent = '\u2630';
        });
    });
}

// ===== Navbar background on scroll =====
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 13, 23, 0.95)';
        } else {
            navbar.style.background = 'rgba(11, 13, 23, 0.85)';
        }
    });
}

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== FAQ Accordion =====
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((button) => {
    button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.faq-item.active').forEach((item) => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle current item
        faqItem.classList.toggle('active');
        button.setAttribute('aria-expanded', !isActive);
    });
});
