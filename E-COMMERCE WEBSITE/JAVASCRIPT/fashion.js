// Fashion Page Scripts
document.addEventListener('DOMContentLoaded', () => {
    // Initialize page with loading indicator
    const hidePreloader = showPreloader();
    
    // Load data and populate sections
    initializeFashionPage();
    
    // Hide preloader when everything is loaded
    window.addEventListener('load', () => {
        hidePreloader();
    });
    
    // Setup filter and sort functionality
    setupFashionFilters();
});

// Main page initialization
function initializeFashionPage() {
    // Load featured fashion
    loadFeaturedFashion();
    
    // Load all fashion products
    loadAllFashion();
    
    // Load individual category sections
    loadMensFashion();
    loadWomensFashion();
    loadKidsFashion();
    loadFootwear();
    loadAccessories();
    loadSeasonalCollection();
    
    // Setup pagination
    setupPagination();
    
    // Setup size and color filters
    setupSizeColorFilters();
    
    // Add smooth scrolling for subcategory navigation
    setupSmoothScrolling();
}

// Load featured fashion products
function loadFeaturedFashion() {
    const featuredContainer = document.getElementById('featured-fashion');
    if (!featuredContainer) return;
    
    // Get featured fashion products
    const featuredFashion = getProducts({
        category: 'Clothing',
        featured: true
    }).slice(0, 4);
    
    // Render products
    renderProducts(featuredContainer, featuredFashion);
}

// Load all fashion products with filtering
function loadAllFashion() {
    const fashionGrid = document.getElementById('fashion-products-grid');
    const fashionCount = document.getElementById('fashion-count');
    
    if (!fashionGrid) return;
    
    // Get all fashion products (clothing + accessories)
    const allFashion = [
        ...getProducts({ category: 'Clothing' }),
        ...getProducts({ category: 'Accessories' })
    ];
    
    // Update count
    if (fashionCount) {
        fashionCount.textContent = allFashion.length;
    }
    
    // Render products
    renderProducts(fashionGrid, allFashion);
}

// Load men's fashion section
function loadMensFashion() {
    const mensContainer = document.getElementById('mens-container');
    if (!mensContainer) return;
    
    // Create new mock products for men's fashion
    const mensFashion = [
        createMockProduct({
            id: 701,
            name: 'Premium Cotton T-Shirt',
            subCategory: "Men's Clothing",
            price: 29.99,
            brand: 'Nike',
            rating: 4.6,
            reviewCount: 132,
            isNew: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1581655353564-df123a1eb820']
        }),
        createMockProduct({
            id: 702,
            name: 'Slim Fit Jeans',
            subCategory: "Men's Clothing",
            price: 59.99,
            oldPrice: 79.99,
            brand: "Levi's",
            rating: 4.7,
            reviewCount: 187,
            isSale: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1542272604-787c3835535d']
        }),
        createMockProduct({
            id: 703,
            name: 'Casual Button Down Shirt',
            subCategory: "Men's Clothing",
            price: 49.99,
            brand: 'Zara',
            rating: 4.5,
            reviewCount: 98,
            featured: false,
            images: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c']
        }),
        createMockProduct({
            id: 704,
            name: 'Classic Polo Shirt',
            subCategory: "Men's Clothing",
            price: 39.99,
            oldPrice: 54.99,
            brand: 'Lacoste',
            rating: 4.4,
            reviewCount: 112,
            isSale: true,
            featured: false,
            images: ['https://images.unsplash.com/photo-1576566588028-4147f3842f27']
        })
    ];
    
    // Render products
    renderProducts(mensContainer, mensFashion);
}

// Load women's fashion section
function loadWomensFashion() {
    const womensContainer = document.getElementById('womens-container');
    if (!womensContainer) return;
    
    // Create new mock products for women's fashion
    const womensFashion = [
        createMockProduct({
            id: 801,
            name: 'Floral Summer Dress',
            subCategory: "Women's Clothing",
            price: 59.99,
            oldPrice: 79.99,
            brand: 'H&M',
            rating: 4.7,
            reviewCount: 143,
            isNew: false,
            isSale: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446']
        }),
        createMockProduct({
            id: 802,
            name: 'High Waist Leggings',
            subCategory: "Women's Clothing",
            price: 34.99,
            brand: 'Nike',
            rating: 4.9,
            reviewCount: 245,
            isNew: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1552881138-75faa5e1cf22']
        }),
        createMockProduct({
            id: 803,
            name: 'Casual Blazer',
            subCategory: "Women's Clothing",
            price: 89.99,
            oldPrice: 119.99,
            brand: 'Zara',
            rating: 4.6,
            reviewCount: 87,
            isSale: true,
            featured: false,
            images: ['https://images.unsplash.com/photo-1591369822096-ffd140ec948f']
        }),
        createMockProduct({
            id: 804,
            name: 'Graphic Print T-Shirt',
            subCategory: "Women's Clothing",
            price: 24.99,
            brand: 'H&M',
            rating: 4.3,
            reviewCount: 76,
            featured: true,
            images: ['https://images.unsplash.com/photo-1503944583220-79d8926ad5e2']
        })
    ];
    
    // Render products
    renderProducts(womensContainer, womensFashion);
}

// Load kids' fashion section
function loadKidsFashion() {
    const kidsContainer = document.getElementById('kids-container');
    if (!kidsContainer) return;
    
    // Create new mock products for kids' fashion
    const kidsFashion = [
        createMockProduct({
            id: 901,
            name: 'Colorful Kids T-Shirt',
            subCategory: "Kids' Clothing",
            price: 19.99,
            oldPrice: 24.99,
            brand: 'Carter\'s',
            rating: 4.7,
            reviewCount: 98,
            isNew: false,
            isSale: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1522771930-78848d9293e8']
        }),
        createMockProduct({
            id: 902,
            name: 'Kids Denim Jeans',
            subCategory: "Kids' Clothing",
            price: 29.99,
            brand: 'GAP',
            rating: 4.6,
            reviewCount: 76,
            isNew: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1543141822-4f2526428f07']
        }),
        createMockProduct({
            id: 903,
            name: 'Summer Shorts Set',
            subCategory: "Kids' Clothing",
            price: 24.99,
            oldPrice: 34.99,
            brand: 'H&M Kids',
            rating: 4.5,
            reviewCount: 54,
            isSale: true,
            featured: false,
            images: ['https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8']
        }),
        createMockProduct({
            id: 904,
            name: 'Kids Hooded Sweatshirt',
            subCategory: "Kids' Clothing",
            price: 29.99,
            brand: 'Nike Kids',
            rating: 4.8,
            reviewCount: 67,
            featured: true,
            images: ['https://images.unsplash.com/photo-1519238263530-99bdd11df2ea']
        })
    ];
    
    // Render products
    renderProducts(kidsContainer, kidsFashion);
}

// Load footwear section
function loadFootwear() {
    const footwearContainer = document.getElementById('footwear-container');
    if (!footwearContainer) return;
    
    // Create new mock products for footwear
    const footwear = [
        createMockProduct({
            id: 1001,
            name: 'Running Sneakers',
            subCategory: "Footwear",
            price: 89.99,
            oldPrice: 119.99,
            brand: 'Nike',
            rating: 4.8,
            reviewCount: 213,
            isNew: false,
            isSale: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff']
        }),
        createMockProduct({
            id: 1002,
            name: 'Classic Leather Boots',
            subCategory: "Footwear",
            price: 149.99,
            brand: 'Timberland',
            rating: 4.9,
            reviewCount: 165,
            isNew: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1520639888713-7851133b1ed0']
        }),
        createMockProduct({
            id: 1003,
            name: 'Canvas Slip-ons',
            subCategory: "Footwear",
            price: 49.99,
            oldPrice: 69.99,
            brand: 'Vans',
            rating: 4.6,
            reviewCount: 98,
            isSale: true,
            featured: false,
            images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77']
        }),
        createMockProduct({
            id: 1004,
            name: 'Women\'s Summer Sandals',
            subCategory: "Footwear",
            price: 39.99,
            brand: 'Birkenstock',
            rating: 4.7,
            reviewCount: 87,
            featured: true,
            images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2']
        })
    ];
    
    // Render products
    renderProducts(footwearContainer, footwear);
}

// Load accessories section
function loadAccessories() {
    const accessoriesContainer = document.getElementById('accessories-container');
    if (!accessoriesContainer) return;
    
    // Create new mock products for accessories
    const accessories = [
        createMockProduct({
            id: 1101,
            name: 'Designer Sunglasses',
            subCategory: "Accessories",
            price: 129.99,
            oldPrice: 169.99,
            brand: 'Ray-Ban',
            rating: 4.8,
            reviewCount: 156,
            isNew: false,
            isSale: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083']
        }),
        createMockProduct({
            id: 1102,
            name: 'Leather Wallet',
            subCategory: "Accessories",
            price: 49.99,
            brand: 'Fossil',
            rating: 4.7,
            reviewCount: 123,
            isNew: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1606760227091-3dd870d97f1d']
        }),
        createMockProduct({
            id: 1103,
            name: 'Fashion Watch',
            subCategory: "Accessories",
            price: 99.99,
            oldPrice: 129.99,
            brand: 'Michael Kors',
            rating: 4.6,
            reviewCount: 87,
            isSale: true,
            featured: false,
            images: ['https://images.unsplash.com/photo-1524805444758-089113d48a6d']
        }),
        createMockProduct({
            id: 1104,
            name: 'Woven Hat',
            subCategory: "Accessories",
            price: 29.99,
            brand: 'H&M',
            rating: 4.4,
            reviewCount: 67,
            featured: true,
            images: ['https://images.unsplash.com/photo-1534215754734-18e55d13e346']
        })
    ];
    
    // Render products
    renderProducts(accessoriesContainer, accessories);
}

// Load seasonal collection section
function loadSeasonalCollection() {
    const seasonalContainer = document.getElementById('seasonal-container');
    if (!seasonalContainer) return;
    
    // Create new mock products for seasonal collection
    const seasonal = [
        createMockProduct({
            id: 1201,
            name: 'Striped Beach Towel',
            subCategory: "Summer Collection",
            price: 24.99,
            oldPrice: 34.99,
            brand: 'Summer Vibes',
            rating: 4.7,
            reviewCount: 87,
            isNew: true,
            isSale: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1531155329777-c5e4838ab055']
        }),
        createMockProduct({
            id: 1202,
            name: 'Straw Beach Bag',
            subCategory: "Summer Collection",
            price: 39.99,
            brand: 'Summer Vibes',
            rating: 4.8,
            reviewCount: 76,
            isNew: true,
            featured: true,
            images: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e']
        }),
        createMockProduct({
            id: 1203,
            name: 'Floral Swimsuit',
            subCategory: "Summer Collection",
            price: 49.99,
            oldPrice: 69.99,
            brand: 'Seafolly',
            rating: 4.9,
            reviewCount: 98,
            isSale: true,
            featured: false,
            images: ['https://images.unsplash.com/photo-1570915226741-22e3b829d42e']
        }),
        createMockProduct({
            id: 1204,
            name: 'Oversized Beach Shirt',
            subCategory: "Summer Collection",
            price: 34.99,
            brand: 'Billabong',
            rating: 4.6,
            reviewCount: 54,
            featured: true,
            images: ['https://images.unsplash.com/photo-1523381294911-8d3cead13475']
        })
    ];
    
    // Render products
    renderProducts(seasonalContainer, seasonal);
}

// Helper function to create mock fashion products
function createMockProduct(options) {
    const defaultDescription = "High-quality fashion item with premium design. Perfect for completing your stylish look.";
    
    return {
        id: options.id,
        name: options.name,
        category: options.category || 'Clothing',
        subCategory: options.subCategory || 'General Fashion',
        price: options.price,
        oldPrice: options.oldPrice || null,
        description: options.description || defaultDescription,
        images: options.images || ['https://images.unsplash.com/photo-1551232864-3f0890e580d9'],
        brand: options.brand || 'Generic',
        rating: options.rating || 4.0,
        reviewCount: options.reviewCount || 50,
        inStock: options.inStock !== undefined ? options.inStock : true,
        isNew: options.isNew || false,
        isSale: options.isSale || false,
        featured: options.featured || false,
        trending: options.trending || false,
        attributes: options.attributes || {
            color: options.color || 'Multiple',
            size: options.size || 'Multiple',
            material: options.material || 'Mixed'
        }
    };
}

// Setup filters for fashion page
function setupFashionFilters() {
    const sortSelect = document.getElementById('sort-select');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const categoryCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
    const applyPriceBtn = document.getElementById('apply-price');
    
    // Sort change event
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            const fashionGrid = document.getElementById('fashion-products-grid');
            
            if (!fashionGrid) return;
            
            // Get all fashion products
            let filteredProducts = [
                ...getProducts({ category: 'Clothing' }),
                ...getProducts({ category: 'Accessories' })
            ];
            
            // Sort products
            filteredProducts = sortProducts(filteredProducts, sortBy);
            
            // Render sorted products
            renderProducts(fashionGrid, filteredProducts);
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
            
            // Reset size and color selections
            document.querySelectorAll('.size-filter.selected').forEach(el => {
                el.classList.remove('selected');
            });
            
            document.querySelectorAll('.color-filter.selected').forEach(el => {
                el.classList.remove('selected');
            });
            
            // Reload all products
            loadAllFashion();
        });
    }
    
    // Apply price filter
    if (applyPriceBtn) {
        applyPriceBtn.addEventListener('click', function() {
            const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
            const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
            
            const fashionGrid = document.getElementById('fashion-products-grid');
            const fashionCount = document.getElementById('fashion-count');
            
            if (!fashionGrid) return;
            
            // Get all fashion products
            let allFashion = [
                ...getProducts({ category: 'Clothing' }),
                ...getProducts({ category: 'Accessories' })
            ];
            
            // Filter by price
            const filteredByPrice = allFashion.filter(product => {
                return product.price >= minPrice && product.price <= maxPrice;
            });
            
            // Update count
            if (fashionCount) {
                fashionCount.textContent = filteredByPrice.length;
            }
            
            // Render products
            renderProducts(fashionGrid, filteredByPrice);
        });
    }
}

// Setup size and color filters
function setupSizeColorFilters() {
    // Size filters
    const sizeFilters = document.querySelectorAll('.size-filter');
    
    sizeFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Toggle selected state
            this.classList.toggle('selected');
        });
    });
    
    // Color filters
    const colorFilters = document.querySelectorAll('.color-filter');
    
    colorFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Toggle selected state
            this.classList.toggle('selected');
        });
    });
}

// Setup pagination
function setupPagination() {
    const pagination = document.getElementById('fashion-pagination');
    
    if (!pagination) return;
    
    const pageLinks = pagination.querySelectorAll('.page-link');
    
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            pageLinks.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
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