/**
 * Main JavaScript file for ShopHub E-commerce Website
 * Handles global site functionality and interactions
 */

// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// DOM elements
const featuredProductsContainer = document.getElementById('featured-products');
const trendingProductsContainer = document.getElementById('trending-products');
const cartCount = document.querySelector('.cart-count');
const loginBtn = document.querySelector('.login-btn');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const searchBar = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-bar button');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const closeModalBtns = document.querySelectorAll('.close-modal');
const showRegisterBtn = document.getElementById('show-register');
const showLoginBtn = document.getElementById('show-login');

// Load initial products
document.addEventListener('DOMContentLoaded', () => {
    const hidePreloader = showPreloader();
    
    // Add back to top button
    addBackToTopButton();
    
    // Initialize features based on current page
    initPageSpecificFeatures();
    
    // Hide preloader after content is loaded
    window.addEventListener('load', () => {
        hidePreloader();
    });
    
    // Setup global event listeners
    setupGlobalEventListeners();
});

// Load featured products
function loadFeaturedProducts() {
    if (featuredProductsContainer) {
        const featuredProducts = getFeaturedProducts();
        renderProducts(featuredProductsContainer, featuredProducts);
    }
}

// Load trending products
function loadTrendingProducts() {
    if (trendingProductsContainer) {
        const trendingProducts = getTrendingProducts();
        renderProducts(trendingProductsContainer, trendingProducts);
    }
}

// Image optimization function
function optimizeImageUrl(imageUrl, width = 400) {
    // If we're using a CDN like Cloudinary, we would modify this
    // For now, we'll check if it's an absolute URL and return as is
    if (imageUrl.startsWith('http')) {
        return imageUrl;
    }
    
    // For local images, prepare for future implementation of resizing
    // In a real-world scenario, we'd use a service like Cloudinary or imgproxy
    // For now, we're just returning the original URL
    return imageUrl;
}

// Render products to container with image optimization
function renderProducts(container, products) {
    let html = '';
    
    products.forEach(product => {
        // Optimize image URL
        const optimizedImageUrl = optimizeImageUrl(product.images[0]);
        
        html += `
            <div class="product-card">
                <div class="product-img">
                    <img src="${optimizedImageUrl}" alt="${product.name}" loading="lazy">
                    <div class="product-labels">
                        ${product.isNew ? '<span class="product-label new">New</span>' : ''}
                        ${product.isSale ? '<span class="product-label sale">Sale</span>' : ''}
                    </div>
                    <div class="product-actions">
                        <a href="#" class="action-btn add-to-cart" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                        <a href="#" class="action-btn add-to-wishlist" data-id="${product.id}">
                            <i class="fas fa-heart"></i>
                        </a>
                        <a href="../HTML/product-detail.html?id=${product.id}" class="action-btn view-product">
                            <i class="fas fa-eye"></i>
                        </a>
                    </div>
                </div>
                <div class="product-info">
                    <h3><a href="../HTML/product-detail.html?id=${product.id}">${product.name}</a></h3>
                    <div class="product-category">${product.category}</div>
                    <div class="product-price">
                        <span class="current-price">₹${product.price.toFixed(2)}</span>
                        ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <div class="product-rating">
                        <div class="stars">
                            ${getStarRating(product.rating)}
                        </div>
                        <div class="rating-count">(${product.reviewCount})</div>
                    </div>
                    <button class="btn add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Add event listeners to the add to cart buttons
    const addToCartBtns = container.querySelectorAll('.add-to-cart, .add-to-cart-btn');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    // Add event listeners to wishlist buttons
    const wishlistBtns = container.querySelectorAll('.add-to-wishlist');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.getAttribute('data-id'));
            addToWishlist(productId);
        });
    });
}

// Generate star rating HTML
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHtml = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }
    
    // Add half star if needed
    if (halfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    
    return starsHtml;
}

// Add to cart function
function addToCart(productId) {
    const product = getProductById(productId);
    
    if (!product) return;
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: 1
        });
    }
    
    // Save cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show success message
    showToast(`${product.name} added to cart!`);
}

// Update cart count
function updateCartCount() {
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Show toast notification
function showToast(message, type = 'success', duration = 3000) {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => {
        document.body.removeChild(toast);
    });
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, duration);
}

// Update login state
function updateLoginState() {
    if (loginBtn) {
        if (currentUser) {
            loginBtn.textContent = 'My Account';
            loginBtn.href = 'account.html';
        } else {
            loginBtn.textContent = 'Login';
            loginBtn.href = '#';
        }
    }
}

// Setup event listeners
function setupEventListeners() {
    // Menu toggle for mobile
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Search button
    if (searchBtn && searchBar) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (searchBar.value.trim()) {
                window.location.href = `products.html?search=${encodeURIComponent(searchBar.value.trim())}`;
            }
        });
        
        // Search on Enter key
        searchBar.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && searchBar.value.trim()) {
                window.location.href = `products.html?search=${encodeURIComponent(searchBar.value.trim())}`;
            }
        });
    }
    
    // Login button
    if (loginBtn && !currentUser) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('login');
        });
    }
    
    // Close modal buttons
    if (closeModalBtns) {
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                closeAllModals();
            });
        });
    }
    
    // Show register modal
    if (showRegisterBtn) {
        showRegisterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('register');
        });
    }
    
    // Show login modal
    if (showLoginBtn) {
        showLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('login');
        });
    }
    
    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real app, you would validate and send to server
            // Here we'll just simulate a successful login
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simulate login
            const user = {
                id: 1,
                name: 'User',
                email: email
            };
            
            // Save user to localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Update UI
            updateLoginState();
            
            // Close modal
            closeAllModals();
            
            // Show success message
            showToast('Login successful!');
        });
    }
    
    // Register form submission
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // In a real app, you would validate and send to server
            // Here we'll just simulate a successful registration
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Basic validation
            if (password !== confirmPassword) {
                showToast('Passwords do not match!');
                return;
            }
            
            // Simulate registration
            const user = {
                id: 1,
                name: fullname,
                email: email
            };
            
            // Save user to localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Update UI
            updateLoginState();
            
            // Close modal
            closeAllModals();
            
            // Show success message
            showToast('Registration successful!');
        });
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal || e.target === registerModal) {
            closeAllModals();
        }
    });
}

// Open modal
function openModal(type) {
    closeAllModals();
    
    if (type === 'login' && loginModal) {
        loginModal.classList.add('active');
    } else if (type === 'register' && registerModal) {
        registerModal.classList.add('active');
    }
}

// Close all modals
function closeAllModals() {
    if (loginModal) loginModal.classList.remove('active');
    if (registerModal) registerModal.classList.remove('active');
}

// Add styles for toast
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    .toast-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1200;
    }
    
    .toast {
        background-color: var(--primary);
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        margin-top: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .toast.show {
        transform: translateX(0);
        opacity: 1;
    }
    
    @media (max-width: 768px) {
        nav ul.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: white;
            padding: 20px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            z-index: 1000;
        }
        
        nav ul.active li {
            margin: 10px 0;
        }
    }
`;
document.head.appendChild(toastStyle);

// Preloader functionality
function showPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(preloader);
    
    return () => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            if (document.body.contains(preloader)) {
                document.body.removeChild(preloader);
            }
        }, 300);
    };
}

// Back to top button
function addBackToTopButton() {
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Page specific initializations
function initPageSpecificFeatures() {
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('index.html') || currentPath.endsWith('/')) {
        // Home page
        initHomePage();
    } else if (currentPath.includes('products.html')) {
        // Products page
        initProductsPage();
    } else if (currentPath.includes('product-detail.html')) {
        // Product detail page
    } else if (currentPath.includes('cart.html')) {
        // Cart page
    } else if (currentPath.includes('checkout.html')) {
        // Checkout page
    }
    
    // Update cart count in header for all pages
    updateCartCount();
}

// Initialize home page
function initHomePage() {
    // Featured products
    const featuredProductsContainer = document.querySelector('.featured-products .products');
    if (featuredProductsContainer) {
        const hideLoading = showPreloader();
        const featuredProducts = getFeaturedProducts().slice(0, 4);
        renderProducts(featuredProductsContainer, featuredProducts);
        hideLoading();
    }
    
    // New arrivals
    const newArrivalsContainer = document.querySelector('.new-arrivals .products');
    if (newArrivalsContainer) {
        const newProducts = getNewProducts().slice(0, 4);
        renderProducts(newArrivalsContainer, newProducts);
    }
}

// Initialize products page
function initProductsPage() {
    // This page is handled by products.js
}

// Global event listeners
function setupGlobalEventListeners() {
    // Add event listeners for login/register buttons
    const loginBtn = document.querySelector('.login-btn');
    const registerBtn = document.querySelector('.register-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            openModal('login');
        });
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            openModal('register');
        });
    }
}

// DOM ready event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize main navigation
    initNavigation();
    
    // Initialize global search
    initSearch();
    
    // Initialize newsletter subscription
    initNewsletter();
    
    // Initialize cart functionality
    initCart();
    
    // Check for user sessions and login status
    checkUserSession();
    
    // Initialize responsive behavior
    initResponsiveBehavior();
    
    // Initialize global event handlers
    initGlobalEvents();
    
    // Initialize product interactions if applicable
    if (typeof initProductEventListeners === 'function' && document.querySelector('.products-grid')) {
        initProductEventListeners(document.querySelector('.products-grid'));
    }
    
    // Initialize image handling if available
    if (typeof initImageLazyLoading === 'function') {
        initImageLazyLoading();
    }
    
    console.log('ShopHub initialized successfully');
});

// Initialize main navigation
function initNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (nav && nav.classList.contains('active') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            
            // Reset icon
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Initialize search functionality
function initSearch() {
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if (searchBar && searchButton) {
        // Search on button click
        searchButton.addEventListener('click', function() {
            performSearch(searchBar.value);
        });
        
        // Search on Enter key
        searchBar.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchBar.value);
            }
        });
        
        // Check for search query in URL and populate search bar
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        
        if (searchQuery) {
            searchBar.value = searchQuery;
        }
    }
}

// Perform search and navigate to products page
function performSearch(query) {
    if (query.trim() !== '') {
        // Redirect to products page with search query
        window.location.href = `../HTML/products.html?search=${encodeURIComponent(query)}`;
    }
}

// Initialize newsletter subscription
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Simulate subscription success
                if (typeof showNotification === 'function') {
                    showNotification('You have successfully subscribed to our newsletter!', 'success');
                } else {
                    alert('You have successfully subscribed to our newsletter!');
                }
                
                // Clear the input field
                emailInput.value = '';
                
                // Store in local storage
                const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
                if (!subscribers.includes(email)) {
                    subscribers.push(email);
                    localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
                }
            } else {
                // Show error
                if (typeof showNotification === 'function') {
                    showNotification('Please enter a valid email address.', 'error');
                } else {
                    alert('Please enter a valid email address.');
                }
            }
        });
    }
}

// Validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Initialize cart functionality
function initCart() {
    // Initialize cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update cart count
    updateCartCount();
    
    // If on cart page, render cart items
    if (window.location.pathname.includes('cart.html')) {
        renderCartItems();
    }
}

// Update cart count
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
}

// Render cart items (if on cart page)
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartEmptyMessage = document.getElementById('cart-empty');
    const checkoutButton = document.getElementById('checkout-btn');
    
    if (!cartItemsContainer) return;
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        // Show empty cart message
        if (cartEmptyMessage) cartEmptyMessage.style.display = 'block';
        if (cartItemsContainer) cartItemsContainer.style.display = 'none';
        if (cartTotalElement) cartTotalElement.parentElement.style.display = 'none';
        if (checkoutButton) checkoutButton.disabled = true;
        return;
    }
    
    // Hide empty cart message
    if (cartEmptyMessage) cartEmptyMessage.style.display = 'none';
    if (cartItemsContainer) cartItemsContainer.style.display = 'block';
    if (cartTotalElement) cartTotalElement.parentElement.style.display = 'block';
    if (checkoutButton) checkoutButton.disabled = false;
    
    // Clear container
    cartItemsContainer.innerHTML = '';
    
    // Calculate total
    let total = 0;
    
    // Render each cart item
    cart.forEach(item => {
        // Calculate item total
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        // Create cart item element
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNGM0YzRjMiLz48cGF0aCBkPSJNODIgMTI1LjVDODIgMTE3LjIxNiA4OC43MTU3IDExMC41IDk3IDExMC41SDEwM0MxMTEuMjg0IDExMC41IDExOCAxMTcuMjE2IDExOCAxMjUuNVYxMjUuNUMxMTggMTMzLjc4NCAxMTEuMjg0IDE0MC41IDEwMyAxNDAuNUg5N0M4OC43MTU3IDE0MC41IDgyIDEzMy43ODQgODIgMTI1LjVWMTI1LjVaIiBmaWxsPSIjQkRCREJEIi8+PHBhdGggZD0iTTY2IDg4QzY2IDc0LjE5MzggNzcuMTkzOCA2MyA5MSA2M0gxMDlDMTIyLjgwNiA2MyAxMzQgNzQuMTkzOCAxMzQgODhWODhDMTM0IDEwMS44MDYgMTIyLjgwNiAxMTMgMTA5IDExM0g5MUM3Ny4xOTM4IDExMyA2NiAxMDEuODA2IDY2IDg4Vjg4WiIgZmlsbD0iI0JEQkRCRCIvPjxwYXRoIGQ9Ik02NSAxNDdDODEuNTY4NSAxNDcgOTUgMTMzLjU2OSA5NSAxMTdDOTUgMTAwLjQzMSA4MS41Njg1IDg3IDY1IDg3QzQ4LjQzMTUgODcgMzUgMTAwLjQzMSAzNSAxMTdDMzUgMTMzLjU2OSA0OC40MzE1IDE0NyA2NSAxNDdaIiBmaWxsPSIjQkRCREJEIi8+PHBhdGggZD0iTTEzNSAxNDdDMTUxLjU2OSAxNDcgMTY1IDEzMy41NjkgMTY1IDExN0MxNjUgMTAwLjQzMSAxNTEuNTY5IDg3IDEzNSA4N0MxMTguNDMxIDg3IDEwNSAxMDAuNDMxIDEwNSAxMTdDMTA1IDEzMy41NjkgMTE4LjQzMSAxNDcgMTM1IDE0N1oiIGZpbGw9IiNCREJEQkQiLz48L3N2Zz4='">
            </div>
            <div class="cart-item-info">
                <h3 class="cart-item-title">${item.name}</h3>
                <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.id}">
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
            <div class="cart-item-total">₹${itemTotal.toFixed(2)}</div>
            <button class="remove-item-btn" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
    });
    
    // Update total
    if (cartTotalElement) {
        cartTotalElement.textContent = `₹${total.toFixed(2)}`;
    }
    
    // Add event listeners to quantity buttons and remove buttons
    addCartItemEventListeners();
}

// Add event listeners to cart item buttons
function addCartItemEventListeners() {
    const minusButtons = document.querySelectorAll('.cart-item .quantity-btn.minus');
    const plusButtons = document.querySelectorAll('.cart-item .quantity-btn.plus');
    const quantityInputs = document.querySelectorAll('.cart-item .quantity-input');
    const removeButtons = document.querySelectorAll('.remove-item-btn');
    const clearCartButton = document.getElementById('clear-cart-btn');
    const checkoutButton = document.getElementById('checkout-btn');
    
    // Minus buttons
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            updateCartItemQuantity(id, -1);
        });
    });
    
    // Plus buttons
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            updateCartItemQuantity(id, 1);
        });
    });
    
    // Quantity inputs
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            const id = parseInt(this.dataset.id);
            const newQuantity = parseInt(this.value);
            
            if (newQuantity > 0) {
                setCartItemQuantity(id, newQuantity);
            } else {
                this.value = 1;
                setCartItemQuantity(id, 1);
            }
        });
    });
    
    // Remove buttons
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            removeCartItem(id);
        });
    });
    
    // Clear cart button
    if (clearCartButton) {
        clearCartButton.addEventListener('click', function() {
            clearCart();
        });
    }
    
    // Checkout button
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            // Check if user is logged in
            const isLoggedIn = localStorage.getItem('user_logged_in') === 'true';
            
            if (isLoggedIn) {
                window.location.href = '../HTML/checkout.html';
            } else {
                // Show login modal or redirect to login page
                if (typeof showNotification === 'function') {
                    showNotification('Please log in to proceed to checkout.', 'info');
                } else {
                    alert('Please log in to proceed to checkout.');
                }
                
                // Open login modal if available
                const loginModal = document.getElementById('login-modal');
                if (loginModal) {
                    loginModal.style.display = 'flex';
                } else {
                    window.location.href = '../HTML/login.html?redirect=checkout';
                }
            }
        });
    }
}

// Update cart item quantity
function updateCartItemQuantity(id, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === id);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        
        // Ensure minimum quantity of 1
        if (cart[itemIndex].quantity < 1) {
            cart[itemIndex].quantity = 1;
        }
        
        // Update localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update UI
        updateCartCount();
        
        // Re-render cart items if on cart page
        if (window.location.pathname.includes('cart.html')) {
            renderCartItems();
        }
    }
}

// Set cart item quantity
function setCartItemQuantity(id, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === id);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = quantity;
        
        // Update localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update UI
        updateCartCount();
        
        // Re-render cart items if on cart page
        if (window.location.pathname.includes('cart.html')) {
            renderCartItems();
        }
    }
}

// Remove cart item
function removeCartItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Remove item
    cart = cart.filter(item => item.id !== id);
    
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update UI
    updateCartCount();
    
    // Show notification if function exists
    if (typeof showNotification === 'function') {
        showNotification('Item removed from cart.', 'info');
    }
    
    // Re-render cart items if on cart page
    if (window.location.pathname.includes('cart.html')) {
        renderCartItems();
    }
}

// Clear cart
function clearCart() {
    // Clear cart in localStorage
    localStorage.setItem('cart', JSON.stringify([]));
    
    // Update UI
    updateCartCount();
    
    // Show notification if function exists
    if (typeof showNotification === 'function') {
        showNotification('Cart has been cleared.', 'info');
    }
    
    // Re-render cart items if on cart page
    if (window.location.pathname.includes('cart.html')) {
        renderCartItems();
    }
}

// Check user session
function checkUserSession() {
    const isLoggedIn = localStorage.getItem('user_logged_in') === 'true';
    const username = localStorage.getItem('username');
    const loginBtn = document.querySelector('.login-btn');
    
    if (isLoggedIn && username && loginBtn) {
        // Change login button to show username
        loginBtn.textContent = username;
        loginBtn.href = '../HTML/account.html';
    }
}

// Initialize responsive behavior
function initResponsiveBehavior() {
    // Check if on mobile
    const isMobile = window.innerWidth < 768;
    
    // Handle resize events
    window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth < 768;
        
        // Only do something if the state changed
        if (newIsMobile !== isMobile) {
            // Reload page to apply correct layout
            // location.reload();
            
            // Or adapt layout without reload
            adaptLayoutToScreenSize(newIsMobile);
        }
    });
    
    // Initial adaptation
    adaptLayoutToScreenSize(isMobile);
}

// Adapt layout to screen size
function adaptLayoutToScreenSize(isMobile) {
    // Elements that need different behavior on mobile vs desktop
    const filterSidebar = document.querySelector('.filter-sidebar');
    const productsGrid = document.querySelector('.products-grid');
    
    if (filterSidebar && productsGrid) {
        if (isMobile) {
            // Mobile: Move filter to slide-in panel
            filterSidebar.classList.add('mobile-view');
            productsGrid.classList.add('mobile-view');
        } else {
            // Desktop: Reset filter position
            filterSidebar.classList.remove('mobile-view');
            productsGrid.classList.remove('mobile-view');
            filterSidebar.classList.remove('active');
            
            // Hide backdrop if visible
            const backdrop = document.querySelector('.filter-backdrop');
            if (backdrop) {
                backdrop.classList.remove('active');
            }
            
            // Allow body scrolling
            document.body.classList.remove('no-scroll');
        }
    }
}

// Initialize global event handlers
function initGlobalEvents() {
    // Close notifications on click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.notification')) {
            const notification = e.target.closest('.notification');
            const container = notification.parentElement;
            
            // Add slide-out animation
            notification.style.animation = 'slide-out 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards';
            
            // Remove after animation
            setTimeout(() => {
                container.removeChild(notification);
            }, 300);
        }
    });
} 