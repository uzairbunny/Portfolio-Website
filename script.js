// Portfolio Website JavaScript

// Project data with enhanced descriptions and placeholder images
const projects = [
    {
        id: 1,
        title: "E-Commerce Web App",
        description: "A full-stack e-commerce web application with user authentication, product catalog, shopping cart, and checkout functionality. Built with modern web technologies for seamless shopping experience.",
        github: "https://github.com/uzairbunny/E-Commerce_Web_App",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60",
        category: "Web Development",
        tech: ["HTML", "CSS", "JavaScript", "Flask"]
    },
    {
        id: 2,
        title: "Quiz Bot Web App",
        description: "An interactive quiz application with multiple question types, scoring system, and real-time feedback. Features dynamic question loading and performance analytics.",
        github: "https://github.com/uzairbunny/Quiz_Bot_Web_App",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
        category: "Web Application",
        tech: ["JavaScript", "HTML", "CSS", "API Integration"]
    },
    {
        id: 3,
        title: "Daily Use Toolkit Web App",
        description: "A comprehensive web toolkit featuring utilities like calculators, converters, timers, and productivity tools. All-in-one solution for daily computational needs.",
        github: "https://github.com/uzairbunny/Daily_Use_Toolkit_Web_App",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
        category: "Productivity",
        tech: ["JavaScript", "HTML", "CSS", "Local Storage"]
    },
    {
        id: 4,
        title: "Text Utility Web App",
        description: "A text processing application with features like case conversion, character counting, and text analysis tools. Perfect for writers and developers.",
        github: "https://github.com/uzairbunny/Text_Utility_Web_App",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=60",
        category: "Text Processing",
        tech: ["JavaScript", "HTML", "CSS", "Regex"]
    },
    {
        id: 5,
        title: "Smart Daily Planner",
        description: "A task management and planning application with calendar integration, reminders, and productivity tracking. Helps users organize their daily activities efficiently.",
        github: "https://github.com/uzairbunny/Smart_Daily_Planner",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=60",
        category: "Productivity",
        tech: ["JavaScript", "HTML", "CSS", "Calendar API"]
    },
    {
        id: 6,
        title: "E-commerce Flutter App",
        description: "A cross-platform mobile e-commerce application built with Flutter, featuring product browsing, shopping cart, and seamless checkout experience.",
        github: "https://github.com/uzairbunny/E-commerce-Flutter-App",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60",
        category: "Mobile App",
        tech: ["Flutter", "Dart", "Firebase", "REST API"]
    },
    {
        id: 7,
        title: "HealthMate",
        description: "A health and fitness tracking application with workout logging, nutrition tracking, and health analytics. Complete wellness management solution.",
        github: "https://github.com/uzairbunny/Healthmate",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
        category: "Health & Fitness",
        tech: ["Flutter", "Dart", "Health APIs", "Data Visualization"]
    },
    {
        id: 8,
        title: "QuickNotes",
        description: "A lightweight note-taking application with markdown support, organization features, and cloud sync. Perfect for capturing ideas on the go.",
        github: "https://github.com/uzairbunny/Quicknotes",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60",
        category: "Productivity",
        tech: ["Flutter", "Dart", "Cloud Storage", "Markdown"]
    },
    {
        id: 9,
        title: "FAQ Chatbot",
        description: "An AI-powered chatbot for answering frequently asked questions with natural language processing capabilities. Reduces support workload and improves user experience.",
        github: "https://github.com/uzairbunny/CodeAlpha_FAQ-Chatbot",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60",
        category: "AI/ML",
        tech: ["Python", "NLP", "Machine Learning", "API"]
    },
    {
        id: 10,
        title: "Language Translator",
        description: "A language translation application using machine learning models for real-time text translation. Supports multiple languages with high accuracy.",
        github: "https://github.com/uzairbunny/CodeAlpha_Translator",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
        category: "AI/ML",
        tech: ["Python", "TensorFlow", "NLP", "Translation Models"]
    },
    {
        id: 11,
        title: "AI Video Summarizer",
        description: "An AI application that automatically generates summaries of video content using computer vision and NLP. Extracts key insights from long videos efficiently.",
        github: "https://github.com/uzairbunny/AI_Video_Summarizer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
        category: "AI/ML",
        tech: ["Python", "OpenCV", "NLP", "Deep Learning"]
    },
    {
        id: 12,
        title: "Speech Recognition System",
        description: "An advanced voice-controlled interface system that enables hands-free operation of applications and devices. Real-time speech-to-command processing for accessibility and productivity enhancement.",
        github: "https://github.com/uzairbunny/Speech-Recognition-System",
        image: "Capture.PNG",
        category: "AI/ML",
        tech: ["Python", "Speech Recognition", "Audio Processing", "Machine Learning"]
    },
    {
        id: 13,
        title: "RAG Chatbot",
        description: "A Retrieval-Augmented Generation chatbot that combines LLMs with external knowledge sources for accurate responses. Advanced AI conversation system.",
        github: "https://github.com/uzairbunny/RAG-Chatbot",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60",
        category: "AI/ML",
        tech: ["Python", "RAG", "LLMs", "Vector Databases"]
    },
    {
        id: 14,
        title: "EmotiWatch AI",
        description: "An emotion detection and monitoring system using computer vision to analyze facial expressions and emotional states. Real-time emotion tracking solution.",
        github: "https://github.com/uzairbunny/EmotiWatch-AI",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=60",
        category: "AI/ML",
        tech: ["Python", "Computer Vision", "OpenCV", "Deep Learning"]
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const projectsGrid = document.getElementById('projects-grid');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalGithubLink = document.getElementById('modal-github-link');
const closeModal = document.querySelector('.close-btn');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');
const backToTopBtn = document.getElementById('back-to-top');
const currentYear = document.getElementById('current-year');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    currentYear.textContent = new Date().getFullYear();
    
    // Generate project cards
    renderProjects();
    
    // Add event listeners
    initEventListeners();
    
    // Initialize scroll behavior
    initScrollBehavior();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize back to top button
    initBackToTop();
});

// Event Listeners
function initEventListeners() {
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunc();
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModalFunc();
        }
    });
    
    // Close modal button
    closeModal.addEventListener('click', closeModalFunc);
}

// Mobile Menu Toggle
function initMobileMenu() {
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Scroll Behavior
function initScrollBehavior() {
    // Add scroll event listener for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide back to top button
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Back to Top Button
function initBackToTop() {
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Render Projects
function renderProjects() {
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" class="project-card-image">
                <div class="project-overlay">
                    <span class="project-category">${project.category}</span>
                </div>
            </div>
            <div class="project-content">
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-actions">
                    <a href="${project.github}" target="_blank" class="project-btn">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <button class="project-btn secondary view-description" data-id="${project.id}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
    
    // Add event listeners to view description buttons
    document.querySelectorAll('.view-description').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-id'));
            openModal(projectId);
        });
    });
}

// Modal Functions
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalGithubLink.href = project.github;
        modal.style.display = 'block';
        
        // Add animation class
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

function closeModalFunc() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Contact Form
function initContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showMessage('Message sent successfully! I will get back to you soon.', 'success');
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

// Intersection Observer for animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in effect
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize intersection observer
if ('IntersectionObserver' in window) {
    initIntersectionObserver();
}

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels
    document.querySelectorAll('.project-btn').forEach(btn => {
        if (btn.textContent.includes('GitHub')) {
            btn.setAttribute('aria-label', 'View project on GitHub');
        } else if (btn.textContent.includes('View Description')) {
            btn.setAttribute('aria-label', 'View project description');
        }
    });
    
    // Add keyboard navigation for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const viewBtn = this.querySelector('.view-description');
                if (viewBtn) viewBtn.click();
            }
        });
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Use debounced scroll event
window.addEventListener('scroll', debounce(function() {
    // Scroll behavior logic here
    const scrolled = window.pageYOffset;
    if (scrolled > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
}));

// Dark mode toggle functionality (optional enhancement)
function initDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    // Add to navbar or as a floating button
    // This is a basic implementation - you can enhance it further
}

// Export functions for potential external use
window.portfolio = {
    openModal: openModal,
    closeModal: closeModalFunc,
    showMessage: showMessage
};