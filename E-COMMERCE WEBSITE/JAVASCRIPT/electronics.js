// Electronics Page Scripts
document.addEventListener('DOMContentLoaded', () => {
    // Initialize page with loading indicator
    const hidePreloader = showPreloader();
    
    // Load data and populate sections
    initializeElectronicsPage();
    
    // Hide preloader when everything is loaded
    window.addEventListener('load', () => {
        hidePreloader();
    });
    
    // Setup filter and sort functionality
    setupElectronicsFilters();
});

// Main page initialization
function initializeElectronicsPage() {
    // Load featured electronics
    loadFeaturedElectronics();
    
    // Load all electronics products
    loadAllElectronics();
    
    // Load individual category sections
    loadSmartphones();
    loadLaptops();
    loadAudioDevices();
    loadWearables();
    loadCameras();
    loadSmartHome();
    
    // Setup pagination
    setupPagination();
    
    // Add smooth scrolling for subcategory navigation
    setupSmoothScrolling();
}

// Load featured electronics products
function loadFeaturedElectronics() {
    const featuredContainer = document.getElementById('featured-electronics');
    if (!featuredContainer) return;
    
    // Get featured electronics
    const featuredElectronics = getProducts({
        category: 'Electronics',
        featured: true
    }).slice(0, 4);
    
    // Render products
    renderProducts(featuredContainer, featuredElectronics);
}

// Load all electronics products with filtering
function loadAllElectronics() {
    const electronicsGrid = document.getElementById('electronics-products-grid');
    const electronicsCount = document.getElementById('electronics-count');
    
    if (!electronicsGrid) return;
    
    // Get all electronics
    const allElectronics = getProducts({
        category: 'Electronics'
    });
    
    // Update count
    if (electronicsCount) {
        electronicsCount.textContent = allElectronics.length;
    }
    
    // Render products
    renderProducts(electronicsGrid, allElectronics);
}

// Load smartphones section
function loadSmartphones() {
    const smartphonesContainer = document.getElementById('smartphones-container');
    if (!smartphonesContainer) return;
    
    // Create new mock products for smartphones
    const smartphones = [
        createMockProduct({
            id: 101,
            name: 'Ultra Smartphone X1',
            subCategory: 'Smartphones',
            price: 899.99,
            oldPrice: 999.99,
            brand: 'Samsung',
            rating: 4.8,
            reviewCount: 245,
            isNew: true,
            isSale: true,
            featured: true,
            trending: true,
            images: ['https://images.unsplash.com/photo-1598327105666-2e1b5e1b1fed']
        }),
        createMockProduct({
            id: 102,
            name: 'Premium Phone Pro',
            subCategory: 'Smartphones',
            price: 1099.99,
            brand: 'Apple',
            rating: 4.9,
            reviewCount: 389,
            isNew: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5']
        }),
        createMockProduct({
            id: 103,
            name: 'Pixel Advanced Phone',
            subCategory: 'Smartphones',
            price: 799.99,
            oldPrice: 899.99,
            brand: 'Google',
            rating: 4.7,
            reviewCount: 178,
            isSale: true,
            featured: false,
            images: ['https://images.unsplash.com/photo-1553179459-4514c0f52f41']
        }),
        createMockProduct({
            id: 104,
            name: 'Budget Smartphone Y20',
            subCategory: 'Smartphones',
            price: 299.99,
            brand: 'Xiaomi',
            rating: 4.3,
            reviewCount: 112,
            featured: false,
            images: ['https://images.unsplash.com/photo-1605236453806-6ff36851218e']
        })
    ];
    
    // Render products
    renderProducts(smartphonesContainer, smartphones);
}

// Load laptops section
function loadLaptops() {
    const laptopsContainer = document.getElementById('laptops-container');
    if (!laptopsContainer) return;
    
    // Create new mock products for laptops
    const laptops = [
        createMockProduct({
            id: 201,
            name: 'UltraBook Pro 15"',
            subCategory: 'Laptops',
            price: 1299.99,
            oldPrice: 1499.99,
            brand: 'Dell',
            rating: 4.7,
            reviewCount: 158,
            isNew: false,
            isSale: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853']
        }),
        createMockProduct({
            id: 202,
            name: 'MacBook Air M2',
            subCategory: 'Laptops',
            price: 1199.99,
            brand: 'Apple',
            rating: 4.9,
            reviewCount: 276,
            isNew: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8']
        }),
        createMockProduct({
            id: 203,
            name: 'Gaming Laptop RTX 4080',
            subCategory: 'Laptops',
            price: 1899.99,
            oldPrice: 2099.99,
            brand: 'MSI',
            rating: 4.8,
            reviewCount: 142,
            isSale: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302']
        }),
        createMockProduct({
            id: 204,
            name: 'Chromebook 14"',
            subCategory: 'Laptops',
            price: 349.99,
            brand: 'HP',
            rating: 4.2,
            reviewCount: 87,
            featured: false,
            images: ['https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf']
        })
    ];
    
    // Render products
    renderProducts(laptopsContainer, laptops);
}

// Load audio devices section
function loadAudioDevices() {
    const audioContainer = document.getElementById('audio-container');
    if (!audioContainer) return;
    
    // Create new mock products for audio devices
    const audioDevices = [
        createMockProduct({
            id: 301,
            name: 'Premium Wireless Headphones',
            subCategory: 'Audio',
            price: 349.99,
            oldPrice: 399.99,
            brand: 'Bose',
            rating: 4.8,
            reviewCount: 234,
            isNew: false,
            isSale: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e']
        }),
        createMockProduct({
            id: 302,
            name: 'True Wireless Earbuds Pro',
            subCategory: 'Audio',
            price: 199.99,
            brand: 'Apple',
            rating: 4.7,
            reviewCount: 312,
            isNew: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37']
        }),
        createMockProduct({
            id: 303,
            name: 'Bluetooth Party Speaker',
            subCategory: 'Audio',
            price: 149.99,
            oldPrice: 199.99,
            brand: 'JBL',
            rating: 4.5,
            reviewCount: 98,
            isSale: true,
            featured: false,
            images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1']
        }),
        createMockProduct({
            id: 304,
            name: 'Home Theater System',
            subCategory: 'Audio',
            price: 599.99,
            brand: 'Sony',
            rating: 4.6,
            reviewCount: 67,
            featured: true,
            images: ['https://images.unsplash.com/photo-1520170350707-b2da59970118']
        })
    ];
    
    // Render products
    renderProducts(audioContainer, audioDevices);
}

// Load wearables section
function loadWearables() {
    const wearablesContainer = document.getElementById('wearables-container');
    if (!wearablesContainer) return;
    
    // Create new mock products for wearables
    const wearables = [
        createMockProduct({
            id: 401,
            name: 'Fitness Smartwatch Pro',
            subCategory: 'Wearables',
            price: 299.99,
            oldPrice: 349.99,
            brand: 'Fitbit',
            rating: 4.7,
            reviewCount: 178,
            isNew: false,
            isSale: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1579586337278-3befd40fd17a']
        }),
        createMockProduct({
            id: 402,
            name: 'Premium Smartwatch',
            subCategory: 'Wearables',
            price: 399.99,
            brand: 'Apple',
            rating: 4.9,
            reviewCount: 245,
            isNew: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1']
        }),
        createMockProduct({
            id: 403,
            name: 'Activity Tracker Band',
            subCategory: 'Wearables',
            price: 79.99,
            oldPrice: 99.99,
            brand: 'Samsung',
            rating: 4.3,
            reviewCount: 112,
            isSale: true,
            featured: false,
            images: ['https://images.unsplash.com/photo-1576243345690-4e4b79b63288']
        }),
        createMockProduct({
            id: 404,
            name: 'Sports GPS Watch',
            subCategory: 'Wearables',
            price: 229.99,
            brand: 'Garmin',
            rating: 4.6,
            reviewCount: 89,
            featured: true,
            images: ['https://images.unsplash.com/photo-1539114708294-2b8a3cb8eded']
        })
    ];
    
    // Render products
    renderProducts(wearablesContainer, wearables);
}

// Load cameras section
function loadCameras() {
    const camerasContainer = document.getElementById('cameras-container');
    if (!camerasContainer) return;
    
    // Create new mock products for cameras
    const cameras = [
        createMockProduct({
            id: 501,
            name: 'Professional DSLR Camera',
            subCategory: 'Cameras',
            price: 1499.99,
            oldPrice: 1699.99,
            brand: 'Canon',
            rating: 4.8,
            reviewCount: 156,
            isNew: false,
            isSale: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1516724562728-afc824a36e84']
        }),
        createMockProduct({
            id: 502,
            name: 'Mirrorless Camera 4K',
            subCategory: 'Cameras',
            price: 999.99,
            brand: 'Sony',
            rating: 4.7,
            reviewCount: 203,
            isNew: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb']
        }),
        createMockProduct({
            id: 503,
            name: 'Action Camera Ultra HD',
            subCategory: 'Cameras',
            price: 349.99,
            oldPrice: 429.99,
            brand: 'GoPro',
            rating: 4.6,
            reviewCount: 134,
            isSale: true,
            featured: false,
            images: ['https://images.unsplash.com/photo-1613287117822-47ef31a2bb29']
        }),
        createMockProduct({
            id: 504,
            name: 'Instant Film Camera',
            subCategory: 'Cameras',
            price: 89.99,
            brand: 'Fujifilm',
            rating: 4.4,
            reviewCount: 78,
            featured: true,
            images: ['https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f']
        })
    ];
    
    // Render products
    renderProducts(camerasContainer, cameras);
}

// Load smart home section
function loadSmartHome() {
    const smartHomeContainer = document.getElementById('smart-home-container');
    if (!smartHomeContainer) return;
    
    // Create new mock products for smart home
    const smartHomeDevices = [
        createMockProduct({
            id: 601,
            name: 'Smart Speaker with Assistant',
            subCategory: 'Smart Home',
            price: 129.99,
            oldPrice: 159.99,
            brand: 'Amazon',
            rating: 4.7,
            reviewCount: 289,
            isNew: false,
            isSale: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1512446816042-444d641267d4']
        }),
        createMockProduct({
            id: 602,
            name: 'Smart Thermostat',
            subCategory: 'Smart Home',
            price: 199.99,
            brand: 'Google',
            rating: 4.8,
            reviewCount: 176,
            isNew: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1535257634876-06844b45feee']
        }),
        createMockProduct({
            id: 603,
            name: 'Video Doorbell HD',
            subCategory: 'Smart Home',
            price: 149.99,
            oldPrice: 179.99,
            brand: 'Ring',
            rating: 4.5,
            reviewCount: 147,
            isSale: true,
            featured: false,
            images: ['https://images.unsplash.com/photo-1558002038-1055907df827']
        }),
        createMockProduct({
            id: 604,
            name: 'Smart Lighting Kit',
            subCategory: 'Smart Home',
            price: 99.99,
            brand: 'Philips',
            rating: 4.6,
            reviewCount: 123,
            featured: true,
            images: ['https://images.unsplash.com/photo-1593346520524-d990c303d051']
        })
    ];
    
    // Render products
    renderProducts(smartHomeContainer, smartHomeDevices);
}

// Helper function to create mock products
function createMockProduct(options) {
    const defaultDescription = "High-quality electronic device with premium features. Perfect for tech enthusiasts and everyday users alike.";
    
    return {
        id: options.id,
        name: options.name,
        category: 'Electronics',
        subCategory: options.subCategory || 'General Electronics',
        price: options.price,
        oldPrice: options.oldPrice || null,
        description: options.description || defaultDescription,
        images: options.images || ['https://images.unsplash.com/photo-1563770660941-10a63257532d'],
        brand: options.brand || 'Generic',
        rating: options.rating || 4.0,
        reviewCount: options.reviewCount || 50,
        inStock: options.inStock !== undefined ? options.inStock : true,
        isNew: options.isNew || false,
        isSale: options.isSale || false,
        featured: options.featured || false,
        trending: options.trending || false,
        attributes: options.attributes || {
            color: 'Black',
            connectivity: 'Wireless',
            warranty: '1 Year'
        }
    };
}

// Setup filters for electronics page
function setupElectronicsFilters() {
    const sortSelect = document.getElementById('sort-select');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const categoryCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
    const applyPriceBtn = document.getElementById('apply-price');
    
    // Sort change event
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            const electronicsGrid = document.getElementById('electronics-products-grid');
            
            if (!electronicsGrid) return;
            
            // Get current filters (to be implemented)
            const filters = {
                category: 'Electronics'
                // Add more filter parameters as needed
            };
            
            // Get products based on filters
            let filteredProducts = getProducts(filters);
            
            // Sort products
            filteredProducts = sortProducts(filteredProducts, sortBy);
            
            // Render sorted products
            renderProducts(electronicsGrid, filteredProducts);
        });
    }
    
    // Reset filters
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', function() {
            // Reset checkboxes
            categoryCheckboxes.forEach(cb => {
                if (cb.id.includes('all-')) {
                    cb.checked = true;
                } else {
                    cb.checked = false;
                }
            });
            
            // Reset price inputs
            const minPrice = document.getElementById('min-price');
            const maxPrice = document.getElementById('max-price');
            
            if (minPrice) minPrice.value = '';
            if (maxPrice) maxPrice.value = '';
            
            // Reload all products
            loadAllElectronics();
        });
    }
    
    // Apply price filter
    if (applyPriceBtn) {
        applyPriceBtn.addEventListener('click', function() {
            const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
            const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
            
            const electronicsGrid = document.getElementById('electronics-products-grid');
            const electronicsCount = document.getElementById('electronics-count');
            
            if (!electronicsGrid) return;
            
            // Get all electronics
            let allElectronics = getProducts({
                category: 'Electronics'
            });
            
            // Filter by price
            const filteredByPrice = allElectronics.filter(product => {
                return product.price >= minPrice && product.price <= maxPrice;
            });
            
            // Update count
            if (electronicsCount) {
                electronicsCount.textContent = filteredByPrice.length;
            }
            
            // Render products
            renderProducts(electronicsGrid, filteredByPrice);
        });
    }
    
    // Category filter
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Handle "All" checkbox logic
            if (this.id.includes('all-') && this.checked) {
                categoryCheckboxes.forEach(cb => {
                    if (cb.id !== this.id && cb.id.includes(this.id.replace('all-', ''))) {
                        cb.checked = false;
                    }
                });
            } else if (!this.id.includes('all-') && this.checked) {
                // If specific category is checked, uncheck "All"
                const allCheckbox = document.getElementById(`all-${this.id.split('-')[0]}s`);
                if (allCheckbox) {
                    allCheckbox.checked = false;
                }
            }
            
            // Apply filters (to be implemented more completely)
            // For now just show basic filtering
            const electronicsGrid = document.getElementById('electronics-products-grid');
            if (!electronicsGrid) return;
            
            // Get checked categories
            const checkedCategories = [];
            categoryCheckboxes.forEach(cb => {
                if (cb.checked && !cb.id.includes('all-')) {
                    checkedCategories.push(cb.id);
                }
            });
            
            // If no specific categories are checked, show all
            if (checkedCategories.length === 0) {
                loadAllElectronics();
                return;
            }
            
            // Filter products by selected subcategories
            const allElectronics = getProducts({
                category: 'Electronics'
            });
            
            const filteredByCategory = allElectronics.filter(product => {
                if (!product.subCategory) return false;
                
                // Clean up the subcategory string to match checkbox IDs
                const normalizedSubcat = product.subCategory.toLowerCase().replace(/\s+/g, '-');
                
                return checkedCategories.some(cat => normalizedSubcat.includes(cat));
            });
            
            // Update count and render
            const electronicsCount = document.getElementById('electronics-count');
            if (electronicsCount) {
                electronicsCount.textContent = filteredByCategory.length;
            }
            
            renderProducts(electronicsGrid, filteredByCategory);
        });
    });
}

// Setup pagination
function setupPagination() {
    const pagination = document.getElementById('electronics-pagination');
    
    if (!pagination) return;
    
    const pageLinks = pagination.querySelectorAll('.page-link');
    
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            pageLinks.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get page number
            const page = this.textContent;
            
            // In a real app, you would load products for this page
            // For demo, we'll just scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Setup smooth scrolling for subcategory links
function setupSmoothScrolling() {
    const subcategoryLinks = document.querySelectorAll('.subcategory-link');
    
    subcategoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
} 