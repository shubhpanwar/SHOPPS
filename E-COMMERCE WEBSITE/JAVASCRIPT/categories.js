// Categories Page Scripts
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the categories page
    initializeCategoriesPage();
    
    // Setup interactive elements
    setupCategoryInteractions();
});

// Main page initialization
function initializeCategoriesPage() {
    // Add hover effects to category boxes
    setupCategoryBoxes();
    
    // Initialize subcategory navigation
    setupSubcategoryNavigation();
    
    // Setup trending categories carousel if exists
    setupTrendingCategories();
    
    // Lazy load category images
    lazyLoadCategoryImages();
}

// Setup hover effects and click handlers for category boxes
function setupCategoryBoxes() {
    const categoryBoxes = document.querySelectorAll('.category-box');
    
    categoryBoxes.forEach(box => {
        // Add hover animations
        box.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.category-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
                const icon = overlay.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1.2)';
                }
            }
        });
        
        box.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.category-overlay');
            if (overlay) {
                overlay.style.opacity = '0.7';
                const icon = overlay.querySelector('i');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                }
            }
        });
        
        // Add click tracking
        box.addEventListener('click', function() {
            const categoryName = this.querySelector('.category-title h3').textContent;
            
            // Track category click (would connect to analytics in production)
            console.log(`Category clicked: ${categoryName}`);
            
            // Could track this in a real analytics system
            trackCategoryClick(categoryName);
        });
    });
}

// Setup subcategory navigation with smooth scrolling
function setupSubcategoryNavigation() {
    const subcategoryItems = document.querySelectorAll('.subcategory-item');
    
    subcategoryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // If it's an anchor link, handle smooth scrolling
            const href = this.getAttribute('href');
            if (href && href.includes('#')) {
                // It's on the same page, so we can use smooth scrolling
                const isOnSamePage = !href.includes('.html') || 
                                     window.location.href.includes(href.split('#')[0]);
                
                if (isOnSamePage) {
                    e.preventDefault();
                    const targetId = href.split('#')[1];
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            }
            
            // Track subcategory click
            const subcategoryName = this.querySelector('span').textContent;
            console.log(`Subcategory clicked: ${subcategoryName}`);
        });
    });
}

// Setup trending categories carousel
function setupTrendingCategories() {
    const trendingContainer = document.querySelector('.trending-container');
    
    if (!trendingContainer) return;
    
    // Add automatic rotation for trending categories
    let currentIndex = 0;
    const trendingItems = trendingContainer.querySelectorAll('.trending-category');
    const totalItems = trendingItems.length;
    
    if (totalItems <= 1) return;
    
    // Initially hide all but first
    trendingItems.forEach((item, index) => {
        if (index !== 0) {
            item.style.opacity = '0.5';
            item.style.transform = 'scale(0.9)';
        }
    });
    
    // Set up rotation interval
    setInterval(() => {
        // Hide current item
        trendingItems[currentIndex].style.opacity = '0.5';
        trendingItems[currentIndex].style.transform = 'scale(0.9)';
        
        // Move to next item
        currentIndex = (currentIndex + 1) % totalItems;
        
        // Show new current item
        trendingItems[currentIndex].style.opacity = '1';
        trendingItems[currentIndex].style.transform = 'scale(1)';
    }, 5000); // Rotate every 5 seconds
}

// Setup interactive elements
function setupCategoryInteractions() {
    // Add click handlers to deal cards
    const dealCards = document.querySelectorAll('.deal-card');
    
    dealCards.forEach(card => {
        card.addEventListener('click', function() {
            const dealTitle = this.querySelector('h3').textContent;
            console.log(`Deal clicked: ${dealTitle}`);
        });
    });
    
    // Add click handlers to gift guides
    const guideCards = document.querySelectorAll('.guide-card');
    
    guideCards.forEach(card => {
        card.addEventListener('click', function() {
            const guideTitle = this.querySelector('h3').textContent;
            console.log(`Gift guide clicked: ${guideTitle}`);
        });
    });
    
    // Add newsletter subscription handling
    setupNewsletterSubscription();
}

// Handle newsletter subscription form
function setupNewsletterSubscription() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!email) {
            showSubscriptionMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // In a real app, you would send this to a server
        console.log(`Newsletter subscription email: ${email}`);
        
        // Show success message
        showSubscriptionMessage('Thank you for subscribing!', 'success');
        
        // Clear the input
        emailInput.value = '';
    });
}

// Show subscription message
function showSubscriptionMessage(message, type) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `subscription-message ${type}`;
    messageContainer.textContent = message;
    
    const newsletterSection = document.querySelector('.newsletter');
    if (!newsletterSection) return;
    
    // Remove any existing message
    const existingMessage = newsletterSection.querySelector('.subscription-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Add the new message
    newsletterSection.appendChild(messageContainer);
    
    // Remove the message after 3 seconds
    setTimeout(() => {
        messageContainer.remove();
    }, 3000);
}

// Track category click (for analytics)
function trackCategoryClick(categoryName) {
    // In a real application, this would send data to an analytics service
    // For now, we'll just log to console
    
    // You could implement something like this:
    /*
    if (typeof gtag !== 'undefined') {
        gtag('event', 'category_click', {
            'event_category': 'engagement',
            'event_label': categoryName
        });
    }
    */
}

// Lazy load category images
function lazyLoadCategoryImages() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    
                    // Once loaded, stop observing the image
                    observer.unobserve(img);
                }
            });
        });
        
        // Get all images with data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        // Load all images immediately
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
} 