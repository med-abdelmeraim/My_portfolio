// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initTypewriter();
    initSkillBars();
    initProjectFilters();
    initScrollAnimations();
    initMobileMenu();
    initSmoothScrolling();
    
    // Typewriter effect for hero section
    function initTypewriter() {
        const typed = new Typed('#typed-text', {
            strings: [
                'Student',
                'ML Engineer',
                'Data Analyst',
                'Problem Solver',
                'Innovator'
            ],
            typeSpeed: 80,
            backSpeed: 60,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
    
    // Animate skill bars on load
    function initSkillBars() {
        setTimeout(() => {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                if (width) {
                    anime({
                        targets: bar,
                        width: width + '%',
                        duration: 2000,
                        easing: 'easeOutExpo',
                        delay: anime.stagger(200)
                    });
                }
            });
        }, 1000);
    }
    
    // Project filtering system
    function initProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('active', 'bg-blue-600', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });
                
                this.classList.add('active', 'bg-blue-600', 'text-white');
                this.classList.remove('bg-gray-200', 'text-gray-700');
                
                // Filter projects with animation
                projectCards.forEach((card, index) => {
                    const categories = card.getAttribute('data-category');
                    const shouldShow = filter === 'all' || categories.includes(filter);
                    
                    if (shouldShow) {
                        anime({
                            targets: card,
                            opacity: [0, 1],
                            scale: [0.8, 1],
                            translateY: [30, 0],
                            duration: 600,
                            delay: index * 100,
                            easing: 'easeOutExpo'
                        });
                        card.style.display = 'block';
                    } else {
                        anime({
                            targets: card,
                            opacity: 0,
                            scale: 0.8,
                            translateY: -30,
                            duration: 300,
                            complete: () => {
                                card.style.display = 'none';
                            }
                        });
                    }
                });
            });
        });
    }
    
    // Scroll animations
    function initScrollAnimations() {
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Stagger animation for grid items
                    if (entry.target.classList.contains('project-card')) {
                        const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                        anime({
                            targets: entry.target,
                            opacity: [0, 1],
                            translateY: [30, 0],
                            duration: 800,
                            delay: delay,
                            easing: 'easeOutExpo'
                        });
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }
    
    // Mobile menu toggle
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
                
                // Animate menu items
                if (!mobileMenu.classList.contains('hidden')) {
                    const menuItems = mobileMenu.querySelectorAll('a');
                    anime({
                        targets: menuItems,
                        opacity: [0, 1],
                        translateX: [-20, 0],
                        duration: 300,
                        delay: anime.stagger(50),
                        easing: 'easeOutExpo'
                    });
                }
            });
        }
    }
    
    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                    
                    anime({
                        targets: document.documentElement,
                        scrollTop: offsetTop,
                        duration: 1000,
                        easing: 'easeInOutQuart'
                    });
                }
            });
        });
    }
    
    // Floating shapes animation
    function initFloatingShapes() {
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            // Random horizontal position
            const randomX = Math.random() * 100;
            shape.style.left = randomX + '%';
            
            // Random animation duration
            const randomDuration = 15 + Math.random() * 10;
            shape.style.animationDuration = randomDuration + 's';
            
            // Random delay
            const randomDelay = Math.random() * 20;
            shape.style.animationDelay = randomDelay + 's';
        });
    }
    
    // Initialize floating shapes
    initFloatingShapes();
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
    
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                rotateY: 5,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                rotateY: 0,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
    });
    
    // Skill cards counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            
            anime({
                targets: { count: 0 },
                count: target,
                duration: duration,
                easing: 'easeOutExpo',
                update: function(anim) {
                    counter.textContent = Math.floor(anim.animatables[0].target.count);
                }
            });
        });
    }
    
    // Initialize counter animation when skills section is visible
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    skillsObserver.unobserve(entry.target);
                }
            });
        });
        
        skillsObserver.observe(skillsSection);
    }
    
    // Form validation and submission (for contact page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (validateForm(data)) {
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    showNotification('Message sent successfully!', 'success');
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
    
    // Form validation function
    function validateForm(data) {
        const errors = [];
        
        if (!data.name || data.name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long');
        }
        
        if (!data.email || !isValidEmail(data.email)) {
            errors.push('Please enter a valid email address');
        }
        
        if (!data.message || data.message.trim().length < 10) {
            errors.push('Message must be at least 10 characters long');
        }
        
        if (errors.length > 0) {
            showNotification(errors[0], 'error');
            return false;
        }
        
        return true;
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-lg max-w-sm ${
            type === 'success' ? 'bg-green-500 text-white' :
            type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
        }`;
        
        notification.innerHTML = `
            <div class="flex items-center">
                <span class="flex-1">${message}</span>
                <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        anime({
            targets: notification,
            translateX: [300, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutExpo'
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            anime({
                targets: notification,
                translateX: 300,
                opacity: 0,
                duration: 300,
                easing: 'easeInExpo',
                complete: () => notification.remove()
            });
        }, 5000);
    }
    
    // Initialize tooltips
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip absolute bg-gray-900 text-white px-2 py-1 rounded text-sm z-50';
            tooltip.textContent = tooltipText;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
            
            this.tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.tooltip) {
                this.tooltip.remove();
                this.tooltip = null;
            }
        });
    });
    
    // Loading animation
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            anime({
                targets: loader,
                opacity: 0,
                duration: 500,
                complete: () => loader.remove()
            });
        }
        
        // Animate page elements
        anime({
            targets: '.hero-content > *',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            delay: anime.stagger(200),
            easing: 'easeOutExpo'
        });
    });
    
    console.log('Portfolio initialized successfully! 🚀');
});