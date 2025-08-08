// Clothing data - you can replace these with actual image paths
const clothingData = {
    tops: [
        {
            name: "Elegant Blouse",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjIwIiB5PSIzMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZmY2YjZiIiByeD0iNSIvPgo8cGF0aCBkPSJNMjAgNDBMMTAgMzVMMTAgNDVMMjAgNTBaIiBmaWxsPSIjZmY2YjZiIi8+CjxwYXRoIGQ9Ik04MCA0MEw5MCAzNUw5MCA0NUw4MCA1MFoiIGZpbGw9IiNmZjZiNmIiLz4KPHN2Zz4K"
        },
        {
            name: "Casual T-Shirt",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjI1IiB5PSIzNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNGZhOGZmIiByeD0iMyIvPgo8cGF0aCBkPSJNMjUgNDBMMTUgMzVMMTUgNDVMMjUgNTBaIiBmaWxsPSIjNGZhOGZmIi8+CjxwYXRoIGQ9Ik03NSA0MEw4NSAzNUw4NSA0NUw3NSA1MFoiIGZpbGw9IiM0ZmE4ZmYiLz4KPHN2Zz4K"
        },
        {
            name: "Formal Shirt",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjIyIiB5PSIzMiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjQyIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMiIgcng9IjQiLz4KPHBhdGggZD0iTTIyIDQyTDEyIDM3TDEyIDQ3TDIyIDUyWiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjY2NjIiBzdHJva2Utd2lkdGg9IjEiLz4KPHBhdGggZD0iTTc4IDQyTDg4IDM3TDg4IDQ3TDc4IDUyWiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjY2NjIiBzdHJva2Utd2lkdGg9IjEiLz4KPGxpbmUgeDE9IjUwIiB5MT0iMzIiIHgyPSI1MCIgeTI9Ijc0IiBzdHJva2U9IiNjY2MiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4K"
        },
        {
            name: "Designer Top",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjIwIiB5PSIzMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQ1IiBmaWxsPSIjOWM4OGZmIiByeD0iNiIvPgo8cGF0aCBkPSJNMjAgNDBMMTAgMzVMMTAgNDVMMjAgNTBaIiBmaWxsPSIjOWM4OGZmIi8+CjxwYXRoIGQ9Ik04MCA0MEw5MCAzNUw5MCA0NUw4MCA1MFoiIGZpbGw9IiM5Yzg4ZmYiLz4KPGNpcmNsZSBjeD0iMzUiIGN5PSI0NSIgcj0iMyIgZmlsbD0iI2ZmZiIvPgo8Y2lyY2xlIGN4PSI2NSIgY3k9IjQ1IiByPSIzIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="
        }
    ],
    bottoms: [
        {
            name: "Classic Trousers",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjMwIiB5PSI2MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjM1IiBmaWxsPSIjMzMzIiByeD0iMiIvPgo8cmVjdCB4PSI1NSIgeT0iNjAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIzNSIgZmlsbD0iIzMzMyIgcng9IjIiLz4KPHJlY3QgeD0iMzAiIHk9IjUwIiB3aWR0aD0iNDAiIGhlaWdodD0iMTUiIGZpbGw9IiMzMzMiIHJ4PSIzIi8+Cjwvc3ZnPgo="
        },
        {
            name: "Denim Jeans",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjMwIiB5PSI2MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjM1IiBmaWxsPSIjNGY4MWJkIiByeD0iMiIvPgo8cmVjdCB4PSI1NSIgeT0iNjAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIzNSIgZmlsbD0iIzRmODFiZCIgcng9IjIiLz4KPHJlY3QgeD0iMzAiIHk9IjUwIiB3aWR0aD0iNDAiIGhlaWdodD0iMTUiIGZpbGw9IiM0ZjgxYmQiIHJ4PSIzIi8+CjxjaXJjbGUgY3g9IjM1IiBjeT0iNTUiIHI9IjIiIGZpbGw9IiNmZmQiLz4KPGNpcmNsZSBjeD0iNjUiIGN5PSI1NSIgcj0iMiIgZmlsbD0iI2ZmZCIvPgo8L3N2Zz4K"
        },
        {
            name: "Elegant Skirt",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMCA1MEw3MCA1MEw3NSA4NUwyNSA4NVoiIGZpbGw9IiNmZjZiNmIiLz4KPHJlY3QgeD0iMzAiIHk9IjUwIiB3aWR0aD0iNDAiIGhlaWdodD0iNSIgZmlsbD0iI2U3NGMzYyIvPgo8L3N2Zz4K"
        },
        {
            name: "Casual Shorts",
            image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjMwIiB5PSI2MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmZhNTAwIiByeD0iMiIvPgo8cmVjdCB4PSI1NSIgeT0iNjAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmYTUwMCIgcng9IjIiLz4KPHJlY3QgeD0iMzAiIHk9IjUwIiB3aWR0aD0iNDAiIGhlaWdodD0iMTUiIGZpbGw9IiNmZmE1MDAiIHJ4PSIzIi8+Cjwvc3ZnPgo="
        }
    ]
};

// Current selection indices
let currentSelection = {
    tops: 0,
    bottoms: 0
};

// Initialize the mannequin when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeMannequin();
    initializeNavigation();
    initializeAnimations();
    initializeContactForm();
});

// Initialize the mannequin display
function initializeMannequin() {
    updateClothingDisplay('tops');
    updateClothingDisplay('bottoms');
}

// Update clothing display for a specific category
function updateClothingDisplay(category) {
    const currentIndex = currentSelection[category];
    const item = clothingData[category][currentIndex];
    
    // Update the clothing image
    const clothingImg = document.getElementById(`current-${category.slice(0, -1)}`);
    if (clothingImg) {
        clothingImg.src = item.image;
        clothingImg.alt = item.name;
        clothingImg.classList.add('active');
    }
    
    // Update the counter
    const counter = document.getElementById(`${category}-counter`);
    if (counter) {
        counter.textContent = `${currentIndex + 1} / ${clothingData[category].length}`;
    }
    
    // Update the item name
    const nameElement = document.getElementById(`${category}-name`);
    if (nameElement) {
        nameElement.textContent = item.name;
    }
}

// Navigate to next item
function nextItem(category) {
    const clothingImg = document.getElementById(`current-${category.slice(0, -1)}`);
    if (clothingImg) {
        clothingImg.classList.add('changing');
    }
    
    setTimeout(() => {
        currentSelection[category] = (currentSelection[category] + 1) % clothingData[category].length;
        updateClothingDisplay(category);
        
        if (clothingImg) {
            clothingImg.classList.remove('changing');
        }
    }, 150);
}

// Navigate to previous item
function previousItem(category) {
    const clothingImg = document.getElementById(`current-${category.slice(0, -1)}`);
    if (clothingImg) {
        clothingImg.classList.add('changing');
    }
    
    setTimeout(() => {
        currentSelection[category] = currentSelection[category] === 0 
            ? clothingData[category].length - 1 
            : currentSelection[category] - 1;
        updateClothingDisplay(category);
        
        if (clothingImg) {
            clothingImg.classList.remove('changing');
        }
    }, 150);
}

// Initialize navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
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

// Initialize scroll animations
function initializeAnimations() {
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
    
    // Add fade-in class to elements that should animate
    const animatedElements = document.querySelectorAll('.product-card, .contact-item, .about-text, .about-image');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show success message (you can replace this with actual form submission)
            showNotification('Thank you for your message! Catherine will get back to you soon.', 'success');
            
            // Reset form
            this.reset();
        });
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add keyboard navigation for mannequin
document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return; // Don't interfere with form inputs
    }
    
    switch(e.key) {
        case 'ArrowLeft':
            if (e.shiftKey) {
                previousItem('bottoms');
            } else {
                previousItem('tops');
            }
            e.preventDefault();
            break;
        case 'ArrowRight':
            if (e.shiftKey) {
                nextItem('bottoms');
            } else {
                nextItem('tops');
            }
            e.preventDefault();
            break;
    }
});

// Add touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe(element, category) {
    element.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    element.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture(category);
    });
}

function handleSwipeGesture(category) {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next item
            nextItem(category);
        } else {
            // Swipe right - previous item
            previousItem(category);
        }
    }
}

// Initialize swipe support when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const mannequinDisplay = document.querySelector('.mannequin-display');
    if (mannequinDisplay) {
        // Add swipe instructions
        const swipeHint = document.createElement('p');
        swipeHint.textContent = 'Swipe or use arrow keys to change items';
        swipeHint.style.cssText = `
            text-align: center;
            color: #666;
            font-size: 0.9rem;
            margin-top: 1rem;
        `;
        mannequinDisplay.parentNode.appendChild(swipeHint);
        
        // Enable swipe for tops (default)
        handleSwipe(mannequinDisplay, 'tops');
    }
});

// Export functions for global access
window.nextItem = nextItem;
window.previousItem = previousItem;
