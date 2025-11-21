// Car Data
const cars = [
    {
        id: 1,
        name: '2021 Tesla Model 3',
        price: 39000,
        year: 2021,
        mileage: '15k',
        condition: 'Excellent',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
        verified: true
    },
    {
        id: 2,
        name: '2020 BMW 3 Series',
        price: 35500,
        year: 2020,
        mileage: '22k',
        condition: 'Excellent',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
        verified: true
    },
    {
        id: 3,
        name: '2019 Ford Mustang GT',
        price: 38000,
        year: 2019,
        mileage: '18k',
        condition: 'Very Good',
        image: 'data:image/jpeg;base64,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',
        verified: true
    },
    {
        id: 4,
        name: '2022 Audi A4',
        price: 42000,
        year: 2022,
        mileage: '8k',
        condition: 'Like New',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
        verified: true
    },
    {
        id: 5,
        name: '2020 Honda Civic',
        price: 22000,
        year: 2020,
        mileage: '25k',
        condition: 'Good',
        image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop',
        verified: true
    },
    {
        id: 6,
        name: '2021 Mercedes C-Class',
        price: 45000,
        year: 2021,
        mileage: '12k',
        condition: 'Excellent',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop',
        verified: true
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    renderCars(cars);
    setupNavigation();
    setupContactForm();
    setupScrollEffects();
}

// Render car cards
function renderCars(carsToRender) {
    const carGrid = document.getElementById('carGrid');
    if (!carGrid) return;

    carGrid.innerHTML = carsToRender.map(car => `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <div class="car-details">
                <div class="car-badge">${car.verified ? '✓ Verified' : 'Pending'}</div>
                <h3 class="car-title">${car.name}</h3>
                <div class="car-specs">
                    <span>${car.year}</span>
                    <span>•</span>
                    <span>${car.mileage} miles</span>
                    <span>•</span>
                    <span>${car.condition}</span>
                </div>
                <div class="car-price">$${car.price.toLocaleString()}</div>
                <button class="btn-primary" onclick="enquireCar('${car.name}', ${car.price})">
                    Contact Seller
                </button>
            </div>
        </div>
    `).join('');
}

// Search cars function
function searchCars() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    if (!searchTerm) {
        renderCars(cars);
        return;
    }

    const filteredCars = cars.filter(car => 
        car.name.toLowerCase().includes(searchTerm)
    );

    if (filteredCars.length === 0) {
        const carGrid = document.getElementById('carGrid');
        carGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <h3>No cars found matching "${searchTerm}"</h3>
                <p style="color: var(--text-light); margin-top: 0.5rem;">Try searching with different keywords</p>
                <button class="btn-primary" onclick="clearSearch()" style="margin-top: 1rem;">
                    Clear Search
                </button>
            </div>
        `;
    } else {
        renderCars(filteredCars);
    }
}

// Clear search
function clearSearch() {
    document.getElementById('searchInput').value = '';
    renderCars(cars);
}

// Enquire about a car
function enquireCar(carName, price) {
    scrollToSection('contact');
    
    // Pre-fill contact form
    setTimeout(() => {
        document.getElementById('subject').value = 'buying';
        document.getElementById('message').value = `Hi, I'm interested in the ${carName} listed at $${price.toLocaleString()}. Could you provide more details?`;
        
        // Highlight the form
        const form = document.getElementById('contactForm');
        form.style.animation = 'pulse 0.5s';
        setTimeout(() => {
            form.style.animation = '';
        }, 500);
    }, 500);
}

// Navigation functions
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Tab switching
function switchTab(tabName) {
    const buyingTab = document.getElementById('buying-tab');
    const sellingTab = document.getElementById('selling-tab');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    if (tabName === 'buying') {
        buyingTab.classList.remove('hidden');
        sellingTab.classList.add('hidden');
        tabButtons[0].classList.add('active');
    } else {
        buyingTab.classList.add('hidden');
        sellingTab.classList.remove('hidden');
        tabButtons[1].classList.add('active');
    }
}

// Contact form handling
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Simulate form submission
        const messageDiv = document.getElementById('formMessage');
        messageDiv.className = 'form-message success';
        messageDiv.textContent = `Thank you, ${formData.name}! We've received your message and will get back to you at ${formData.email} within 24 hours.`;
        
        // Reset form
        form.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageDiv.className = 'form-message';
            messageDiv.textContent = '';
        }, 5000);
    });
}

// Newsletter subscription
function subscribeNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    alert(`Thank you for subscribing! We'll send the latest car deals to ${email}.`);
    e.target.reset();
}

// Scroll effects
function setupScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Update active nav link based on scroll position
        updateActiveNavOnScroll();
        
        lastScrollTop = scrollTop;
    });
}

function updateActiveNavOnScroll() {
    const sections = ['home', 'inventory', 'how-it-works', 'about', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = sectionId;
            }
        }
    });
    
    if (currentSection) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
}

// Add CSS animation for pulse effect
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
`;
document.head.appendChild(style);