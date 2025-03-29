/**
 * Mobile-specific functionality for ShopHub e-commerce website
 * Handles mobile navigation, touch gestures, and responsive functionality
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile features
    initMobileFeatures();
});

// Initialize all mobile features
function initMobileFeatures() {
    try {
        // Set up mobile navigation
        initMobileNavigation();
        
        // Set up mobile touch gestures
        initTouchGestures();
        
        // Adjust for mobile viewport
        adjustForMobileViewport();
        
        // Setup mobile filters if applicable
        if (document.querySelector('.filter-toggle')) {
            setupMobileFilters();
        }
        
        // Setup swipe gestures for products if on product page
        if (document.querySelector('.products-grid')) {
            setupProductSwipeGestures();
        }
        
        // Handle orientation change
        setupOrientationChange();
        
        // Conditionally load heavy scripts
        conditionallyLoadScripts();
        
        console.log('Mobile features initialized successfully');
    } catch (error) {
        console.error('Error initializing mobile features:', error);
    }
}

// Initialize mobile navigation
function initMobileNavigation() {
    try {
        const mobileNav = document.querySelector('.mobile-nav');
        const menuToggle = document.querySelector('.menu-toggle');
        
        // Skip if mobile nav isn't present
        if (!mobileNav) return;
        
        // Add active class to current page in mobile nav
        const currentPage = window.location.pathname.split('/').pop();
        const mobileNavItems = mobileNav.querySelectorAll('.mobile-nav-item');
        
        mobileNavItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href && (href.includes(currentPage) || (currentPage === '' && href.includes('index.html')))) {
                item.classList.add('active');
            }
        });
        
        // Handle menu toggle
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                const nav = document.querySelector('nav');
                if (nav) {
                    nav.classList.toggle('active');
                    
                    // Toggle menu icon
                    const icon = menuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.toggle('fa-bars');
                        icon.classList.toggle('fa-times');
                    }
                }
            });
        }
        
        // Add ripple effect to mobile buttons
        addRippleEffect();
        
    } catch (error) {
        console.error('Error initializing mobile navigation:', error);
    }
}

// Add ripple effect to buttons and clickable elements
function addRippleEffect() {
    // Add ripple effect to all buttons and clickable elements
    const clickableElements = document.querySelectorAll('button, .btn, .mobile-nav-item, .product-card, .filter-toggle');
    
    clickableElements.forEach(element => {
        element.classList.add('ripple-effect');
        
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            // Position ripple where clicked
            const rect = element.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
            
            element.appendChild(ripple);
            
            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Initialize touch gestures
function initTouchGestures() {
    try {
        // Variables to track touch
        let startX, startY, distX, distY;
        let threshold = 50; // Minimum distance to be considered a swipe
        let restraint = 100; // Maximum perpendicular distance allowed
        let allowedTime = 300; // Maximum time allowed for the swipe
        let startTime;
        
        // Track touch start
        document.addEventListener('touchstart', function(e) {
            // Store initial touch position
            const touch = e.changedTouches[0];
            startX = touch.pageX;
            startY = touch.pageY;
            startTime = new Date().getTime();
        }, { passive: true });
        
        // Track touch end
        document.addEventListener('touchend', function(e) {
            // Calculate swipe properties
            const touch = e.changedTouches[0];
            distX = touch.pageX - startX;
            distY = touch.pageY - startY;
            const elapsedTime = new Date().getTime() - startTime;
            
            // Only proceed if swipe time is within allowedTime
            if (elapsedTime <= allowedTime) {
                // Check if horizontal swipe meets threshold and restraint
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                    // Process horizontal swipe
                    handleHorizontalSwipe(distX > 0 ? 'right' : 'left', e.target);
                }
                // Check if vertical swipe meets threshold and restraint
                else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
                    // Process vertical swipe
                    handleVerticalSwipe(distY > 0 ? 'down' : 'up', e.target);
                }
            }
        }, { passive: true });
        
    } catch (error) {
        console.error('Error initializing touch gestures:', error);
    }
}

// Handle horizontal swipe
function handleHorizontalSwipe(direction, target) {
    try {
        // Find closest swipeable container
        const productCard = target.closest('.product-card');
        const mobileNav = target.closest('.mobile-nav');
        
        // Handle swipe on product cards
        if (productCard) {
            // Show/hide quick actions
            if (direction === 'left') {
                productCard.classList.add('show-actions');
            } else {
                productCard.classList.remove('show-actions');
            }
        }
        // Handle swipe on mobile nav
        else if (mobileNav) {
            // Navigate between sections
            navigateMobileSection(direction);
        }
        // Handle swipe on filter sidebar
        else if (document.querySelector('.filter-sidebar.active')) {
            if (direction === 'right') {
                // Close filter sidebar on right swipe
                const filterClose = document.querySelector('.filter-close');
                if (filterClose) filterClose.click();
            }
        }
        
    } catch (error) {
        console.error('Error handling horizontal swipe:', error);
    }
}

// Handle vertical swipe
function handleVerticalSwipe(direction, target) {
    try {
        // Find closest scrollable container
        const scrollContainer = target.closest('.products-grid, .filter-sidebar, .modal-content');
        
        // Scroll the container if found
        if (scrollContainer) {
            const scrollAmount = 200; // Pixels to scroll
            
            if (direction === 'up') {
                scrollContainer.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ top: scrollAmount, behavior: 'smooth' });
            }
        }
        // Hide/show mobile navigation on swipe
        else if (direction === 'up' && window.scrollY > 50) {
            const mobileNav = document.querySelector('.mobile-nav');
            if (mobileNav) {
                mobileNav.classList.add('nav-hidden');
            }
        } else if (direction === 'down' && window.scrollY > 50) {
            const mobileNav = document.querySelector('.mobile-nav');
            if (mobileNav) {
                mobileNav.classList.remove('nav-hidden');
            }
        }
        
    } catch (error) {
        console.error('Error handling vertical swipe:', error);
    }
}

// Navigate between mobile sections
function navigateMobileSection(direction) {
    try {
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
        const activeItemIndex = Array.from(mobileNavItems).findIndex(item => item.classList.contains('active'));
        
        if (activeItemIndex !== -1) {
            let newIndex;
            
            if (direction === 'right') {
                newIndex = activeItemIndex === 0 ? mobileNavItems.length - 1 : activeItemIndex - 1;
            } else {
                newIndex = activeItemIndex === mobileNavItems.length - 1 ? 0 : activeItemIndex + 1;
            }
            
            // Navigate to the new section
            window.location.href = mobileNavItems[newIndex].getAttribute('href');
        }
        
    } catch (error) {
        console.error('Error navigating mobile section:', error);
    }
}

// Adjust for mobile viewport
function adjustForMobileViewport() {
    try {
        // Get viewport meta tag
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        
        // If no viewport meta, add one
        if (!viewportMeta) {
            const meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
            document.head.appendChild(meta);
        }
        
        // Add touch-action CSS to improve touch responsiveness
        const style = document.createElement('style');
        style.textContent = `
            * {
                -webkit-tap-highlight-color: transparent;
            }
            .mobile-nav-item, button, .btn, .product-card, .filter-toggle {
                touch-action: manipulation;
            }
            .ripple-effect {
                position: relative;
                overflow: hidden;
            }
            .ripple {
                position: absolute;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.4);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            }
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            .show-actions .product-actions {
                opacity: 1;
                transform: translateX(0);
            }
            .nav-hidden {
                transform: translateY(100%);
            }
        `;
        document.head.appendChild(style);
        
    } catch (error) {
        console.error('Error adjusting for mobile viewport:', error);
    }
}

// Setup mobile filters
function setupMobileFilters() {
    try {
        const filterToggle = document.querySelector('.filter-toggle');
        const filterSidebar = document.querySelector('.filter-sidebar');
        const filterBackdrop = document.querySelector('.filter-backdrop');
        const filterClose = document.querySelector('.filter-close');
        
        if (filterToggle && filterSidebar) {
            filterToggle.addEventListener('click', function() {
                filterSidebar.classList.add('active');
                if (filterBackdrop) filterBackdrop.classList.add('active');
                document.body.classList.add('no-scroll');
            });
        }
        
        if (filterClose && filterSidebar) {
            filterClose.addEventListener('click', function() {
                filterSidebar.classList.remove('active');
                if (filterBackdrop) filterBackdrop.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        }
        
        if (filterBackdrop && filterSidebar) {
            filterBackdrop.addEventListener('click', function() {
                filterSidebar.classList.remove('active');
                filterBackdrop.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        }
        
    } catch (error) {
        console.error('Error setting up mobile filters:', error);
    }
}

// Setup swipe gestures for products
function setupProductSwipeGestures() {
    try {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            // Add class for tracking swipe state
            card.classList.add('swipeable');
            
            // Show actions on tap
            card.addEventListener('click', function(e) {
                // Only toggle if not clicking on a button or link inside the card
                if (!e.target.closest('button, a, .product-actions')) {
                    const wasActive = this.classList.contains('show-actions');
                    
                    // Hide actions on all other cards
                    document.querySelectorAll('.product-card.show-actions').forEach(c => {
                        if (c !== this) c.classList.remove('show-actions');
                    });
                    
                    // Toggle actions on this card
                    if (!wasActive) {
                        this.classList.add('show-actions');
                    }
                }
            });
        });
        
        // Hide all action menus when clicking outside cards
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.product-card')) {
                document.querySelectorAll('.product-card.show-actions').forEach(card => {
                    card.classList.remove('show-actions');
                });
            }
        });
        
    } catch (error) {
        console.error('Error setting up product swipe gestures:', error);
    }
}

// Handle orientation change
function setupOrientationChange() {
    try {
        // Listen for orientation changes
        window.addEventListener('orientationchange', function() {
            // Delay execution to let the orientation change complete
            setTimeout(function() {
                // Reset any orientation-specific UI
                document.querySelectorAll('.product-card.show-actions').forEach(card => {
                    card.classList.remove('show-actions');
                });
                
                // Close filter sidebar if open
                const filterSidebar = document.querySelector('.filter-sidebar');
                const filterBackdrop = document.querySelector('.filter-backdrop');
                
                if (filterSidebar && filterSidebar.classList.contains('active')) {
                    filterSidebar.classList.remove('active');
                    if (filterBackdrop) filterBackdrop.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
                
                // Re-adjust layout
                adjustForMobileViewport();
            }, 300);
        });
        
    } catch (error) {
        console.error('Error setting up orientation change handler:', error);
    }
}

// Conditionally load scripts based on device
function conditionallyLoadScripts() {
    try {
        // Check if this is a mobile device
        const isMobile = window.innerWidth < 768 || 
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Scripts to load for mobile only
        if (isMobile) {
            // Add mobile-specific scripts
            
            // Fix 100vh issue on mobile
            fixMobileViewportHeight();
            
            // Add smooth scrolling
            addSmoothScrolling();
        }
        
    } catch (error) {
        console.error('Error conditionally loading scripts:', error);
    }
}

// Fix 100vh issue on mobile browsers
function fixMobileViewportHeight() {
    try {
        // Function to set correct viewport height
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        
        // Set on load
        setVh();
        
        // Update on resize
        window.addEventListener('resize', setVh);
        
        // Update on orientation change
        window.addEventListener('orientationchange', setVh);
        
        // Add CSS variable to use instead of 100vh
        const style = document.createElement('style');
        style.textContent = `
            .full-height {
                height: 100vh; /* Fallback */
                height: calc(var(--vh, 1vh) * 100);
            }
        `;
        document.head.appendChild(style);
        
    } catch (error) {
        console.error('Error fixing mobile viewport height:', error);
    }
}

// Add smooth scrolling for mobile
function addSmoothScrolling() {
    try {
        // Get all links
        const links = document.querySelectorAll('a[href^="#"]');
        
        // Add smooth scroll behavior
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if just '#'
                if (href === '#') return;
                
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Smooth scroll to target
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                    
                    // Close mobile menu if open
                    const nav = document.querySelector('nav.active');
                    const menuToggle = document.querySelector('.menu-toggle');
                    
                    if (nav && menuToggle) {
                        nav.classList.remove('active');
                        menuToggle.classList.remove('active');
                        
                        // Reset icon
                        const icon = menuToggle.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                }
            });
        });
        
    } catch (error) {
        console.error('Error adding smooth scrolling:', error);
    }
} 