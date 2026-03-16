// Mobile Menu Toggle (only on mobile screens)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Only add hamburger functionality for mobile
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        // Only toggle if hamburger is visible (mobile only)
        const hamburgerDisplay = window.getComputedStyle(hamburger).display;
        if (hamburgerDisplay !== 'none') {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        }
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only close on mobile
        const hamburgerDisplay = window.getComputedStyle(hamburger).display;
        if (hamburgerDisplay !== 'none') {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // You can send this to a server or email service
        console.log('Form submitted with data:', Object.fromEntries(formData));
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// Review Form Handling
const reviewForm = document.querySelector('#reviewForm');
const starRating = document.querySelector('#starRating');
const ratingValue = document.querySelector('#ratingValue');

if (starRating) {
    const stars = starRating.querySelectorAll('i');
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            ratingValue.value = value;
            
            stars.forEach(s => {
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        star.addEventListener('mouseover', () => {
            const value = star.getAttribute('data-value');
            stars.forEach(s => {
                if (s.getAttribute('data-value') <= value) {
                    s.style.color = '#ffc107';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
    });
    
    starRating.addEventListener('mouseleave', () => {
        stars.forEach(star => {
            if (star.classList.contains('active')) {
                star.style.color = '#ffc107';
            } else {
                star.style.color = '#ddd';
            }
        });
    });
}

if (reviewForm) {
    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const rating = ratingValue.value;
        
        if (rating === '0') {
            alert('Please select a rating!');
            return;
        }
        
        // Get form data
        const reviewData = {
            name: document.querySelector('#reviewName').value,
            email: document.querySelector('#reviewEmail').value,
            role: document.querySelector('#reviewRole').value,
            rating: rating,
            review: document.querySelector('#reviewText').value,
            date: new Date().toISOString()
        };
        
        // Get existing reviews from localStorage
        const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        
        // Add new review to the beginning
        existingReviews.unshift(reviewData);
        
        // Save back to localStorage (limit to last 50 reviews)
        if (existingReviews.length > 50) {
            existingReviews.pop();
        }
        localStorage.setItem('reviews', JSON.stringify(existingReviews));
        
        // You can send this to a server or email service
        console.log('Review submitted:', reviewData);
        
        // Show success message
        alert('Thank you for your review! We appreciate your feedback.');
        
        // Reload reviews display
        loadReviews();
        
        // Reset form
        this.reset();
        ratingValue.value = '0';
        stars.forEach(star => {
            star.classList.remove('active');
            star.style.color = '#ddd';
        });
    });
}

// Function to load and display reviews from localStorage
function loadReviews() {
    const reviewsList = document.querySelector('#reviewsList');
    const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    
    if (existingReviews.length === 0) {
        reviewsList.innerHTML = '<div class="empty-reviews">No reviews yet. Be the first to leave a review!</div>';
        return;
    }
    
    reviewsList.innerHTML = '';
    existingReviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-item';
        
        const starsHTML = '<i class="fas fa-star"></i>'.repeat(parseInt(review.rating));
        
        reviewElement.innerHTML = `
            <div class="review-item-header">
                <div class="review-item-author">
                    <strong>${review.name}</strong>
                    <div class="review-item-role">${review.role}</div>
                </div>
                <div class="review-item-stars">
                    ${starsHTML}
                </div>
            </div>
            <p class="review-item-text">"${review.review}"</p>
            <div class="review-item-date">${new Date(review.date).toLocaleDateString()}</div>
        `;
        
        reviewsList.appendChild(reviewElement);
    });
}

// Scroll Animation for elements
function revealOnScroll() {
    const elements = document.querySelectorAll('.project-card, .blog-card, .certificate-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    loadReviews();
    updateAdminUI();
});

// Clear all reviews functionality
const clearReviewsBtn = document.querySelector('#clearReviewsBtn');
const adminPanel = document.querySelector('#adminPanel');
const adminToggleBtn = document.querySelector('#adminToggleBtn');
const adminLoginModal = document.querySelector('#adminLoginModal');
const adminLoginForm = document.querySelector('#adminLoginForm');
const cancelLoginBtn = document.querySelector('#cancelLoginBtn');
const adminLogoutBtn = document.querySelector('#adminLogoutBtn');

// Admin password (change this to your own password)
const ADMIN_PASSWORD = 'admin@2024';

// Check if user is admin
function isAdmin() {
    return localStorage.getItem('isAdmin') === 'true';
}

// Show/hide admin features
function updateAdminUI() {
    if (isAdmin()) {
        clearReviewsBtn.style.display = 'inline-block';
        adminPanel.style.display = 'block';
        adminToggleBtn.style.color = 'var(--primary-color)';
        document.getElementById('adminDashboardBtn').style.display = 'inline-block';
    } else {
        clearReviewsBtn.style.display = 'none';
        adminPanel.style.display = 'none';
        adminToggleBtn.style.color = 'var(--text-dark)';
        document.getElementById('adminDashboardBtn').style.display = 'none';
    }
}

// Admin toggle button
if (adminToggleBtn) {
    adminToggleBtn.addEventListener('click', () => {
        if (isAdmin()) {
            // If already admin, logout
            if (confirm('Logout from admin panel?')) {
                localStorage.removeItem('isAdmin');
                updateAdminUI();
                alert('Logged out from admin panel');
            }
        } else {
            // Show login modal
            adminLoginModal.classList.add('show');
        }
    });
}

// Admin login
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.querySelector('#adminPassword').value;
        
        if (password === ADMIN_PASSWORD) {
            localStorage.setItem('isAdmin', 'true');
            adminLoginModal.classList.remove('show');
            adminLoginForm.reset();
            updateAdminUI();
            alert('Welcome Admin! Opening Admin Dashboard...');
            setTimeout(() => {
                window.location.href = 'admin.html';
            }, 500);
        } else {
            alert('Incorrect password! Please try again.');
            document.querySelector('#adminPassword').value = '';
        }
    });
}

// Cancel login
if (cancelLoginBtn) {
    cancelLoginBtn.addEventListener('click', () => {
        adminLoginModal.classList.remove('show');
        adminLoginForm.reset();
    });
}

// Admin logout from admin panel
if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', () => {
        if (confirm('Logout from admin panel?')) {
            localStorage.removeItem('isAdmin');
            updateAdminUI();
            alert('You have been logged out');
        }
    });
}

// Clear all reviews (only visible to admin)
if (clearReviewsBtn) {
    clearReviewsBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete all reviews? This cannot be undone.')) {
            localStorage.removeItem('reviews');
            loadReviews();
            alert('All reviews have been cleared!');
        }
    });
}

// Close modal when clicking outside
if (adminLoginModal) {
    adminLoginModal.addEventListener('click', (e) => {
        if (e.target === adminLoginModal) {
            adminLoginModal.classList.remove('show');
            adminLoginForm.reset();
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Array of nice messages/quotes
const quotes = [
    "Keep coding, keep learning!",
    "Innovation happens when you dare to try.",
    "Code is poetry written in logic.",
    "Build something amazing today!",
    "Your portfolio is your best resume."
];

// Console message
console.log('%c Welcome to my portfolio!', 'color: #00a8ff; font-size: 20px; font-weight: bold;');
console.log('%c ' + quotes[Math.floor(Math.random() * quotes.length)], 'color: #333; font-size: 14px;');

// Active navbar link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = '#00a8ff';
                link.style.fontWeight = '700';
            }
        });
    });
}

updateActiveNavLink();

// Certificate Modal Functions
function openCertificateModal(imagePath) {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('certificateImage');
    
    if (modal && modalImage) {
        modalImage.src = imagePath;
        modal.classList.add('show');
    }
}

function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Close modal when clicking outside the image
const certificateModal = document.getElementById('certificateModal');
if (certificateModal) {
    certificateModal.addEventListener('click', (e) => {
        if (e.target === certificateModal) {
            closeCertificateModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCertificateModal();
    }
});
