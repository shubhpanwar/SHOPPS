/**
 * Enhanced image loading utility for ShopHub e-commerce website
 * Handles image loading, placeholders, error recovery, and progressive enhancement
 */

// Configuration
const IMAGE_CONFIG = {
    placeholderColor: '#f3f3f3',
    errorIconColor: '#aaa',
    loadingTimeout: 5000, // ms
    retryCount: 2,
    lazyLoadMargin: '100px',
    preloadPages: 1, // Number of pages to preload
    lowQualityPreview: true,
    useLocalCache: true, // Use browser storage to cache frequently viewed images
    logErrors: false // Set to true for debugging
};

// Create a placeholder image in memory
const PLACEHOLDER_IMAGE_DATA = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNGM0YzRjMiLz48cGF0aCBkPSJNODIgMTI1LjVDODIgMTE3LjIxNiA4OC43MTU3IDExMC41IDk3IDExMC41SDEwM0MxMTEuMjg0IDExMC41IDExOCAxMTcuMjE2IDExOCAxMjUuNVYxMjUuNUMxMTggMTMzLjc4NCAxMTEuMjg0IDE0MC41IDEwMyAxNDAuNUg5N0M4OC43MTU3IDE0MC41IDgyIDEzMy43ODQgODIgMTI1LjVWMTI1LjVaIiBmaWxsPSIjQkRCREJEIi8+PHBhdGggZD0iTTY2IDg4QzY2IDc0LjE5MzggNzcuMTkzOCA2MyA5MSA2M0gxMDlDMTIyLjgwNiA2MyAxMzQgNzQuMTkzOCAxMzQgODhWODhDMTM0IDEwMS44MDYgMTIyLjgwNiAxMTMgMTA5IDExM0g5MUM3Ny4xOTM4IDExMyA2NiAxMDEuODA2IDY2IDg4Vjg4WiIgZmlsbD0iI0JEQkRCRCIvPjxwYXRoIGQ9Ik02NSAxNDdDODEuNTY4NSAxNDcgOTUgMTMzLjU2OSA5NSAxMTdDOTUgMTAwLjQzMSA4MS41Njg1IDg3IDY1IDg3QzQ4LjQzMTUgODcgMzUgMTAwLjQzMSAzNSAxMTdDMzUgMTMzLjU2OSA0OC40MzE1IDE0NyA2NSAxNDdaIiBmaWxsPSIjQkRCREJEIi8+PHBhdGggZD0iTTEzNSAxNDdDMTUxLjU2OSAxNDcgMTY1IDEzMy41NjkgMTY1IDExN0MxNjUgMTAwLjQzMSAxNTEuNTY5IDg3IDEzNSA4N0MxMTguNDMxIDg3IDEwNSAxMDAuNDMxIDEwNSAxMTdDMTA1IDEzMy41NjkgMTE4LjQzMSAxNDcgMTM1IDE0N1oiIGZpbGw9IiNCREJEQkQiLz48L3N2Zz4=';

// Create a smaller blurry placeholder for progressive loading
const TINY_PLACEHOLDER = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNGM0YzRjMiLz48L3N2Zz4=';

// Check if IntersectionObserver is supported
const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

// Image load tracking for performance metrics
let imageStats = {
    total: 0,
    loaded: 0,
    failed: 0,
    cached: 0,
    startTime: 0
};

/**
 * Initialize lazy loading for all product images
 */
function initImageLazyLoading() {
    // Start tracking image loading performance
    imageStats.startTime = performance.now();
    
    // Select all images with data-src attribute
    const productImages = document.querySelectorAll('img[data-src]');
    imageStats.total = productImages.length;
    
    if (!productImages.length) {
        console.log('No images to lazy load found');
        return;
    }
    
    if (hasIntersectionObserver) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: IMAGE_CONFIG.lazyLoadMargin,
            threshold: 0.01
        });
        
        productImages.forEach(img => {
            // Set placeholder
            setPlaceholder(img);
            // Observe image
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        productImages.forEach(img => {
            setPlaceholder(img);
            
            // Check if image is in viewport or close to it
            const isNearViewport = isElementNearViewport(img);
            if (isNearViewport) {
                loadImage(img);
            } else {
                // Add scroll event listener to check when image comes into view
                const lazyLoadHandler = () => {
                    if (isElementNearViewport(img) && img.getAttribute('data-src')) {
                        loadImage(img);
                        window.removeEventListener('scroll', lazyLoadHandler);
                    }
                };
                window.addEventListener('scroll', lazyLoadHandler, { passive: true });
                
                // Initial check 
                lazyLoadHandler();
            }
        });
    }
    
    // Preload nearby images based on page context
    preloadImagesBasedOnContext();
}

/**
 * Check if element is near viewport
 * @param {HTMLElement} el - Element to check
 * @returns {boolean} - Whether element is in or near viewport
 */
function isElementNearViewport(el) {
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const vertInView = (rect.top <= viewportHeight + 200 && rect.bottom >= -200);
    const horInView = (rect.left <= viewportWidth + 200 && rect.right >= -200);
    
    return vertInView && horInView;
}

/**
 * Set placeholder for image
 * @param {HTMLImageElement} img - Image element
 */
function setPlaceholder(img) {
    // Set initial placeholder if not already set
    if (!img.getAttribute('src') || img.getAttribute('src') === '') {
        img.setAttribute('src', PLACEHOLDER_IMAGE_DATA);
    }
    
    // Add loading class
    img.classList.add('loading');
    
    // Create placeholder element if it doesn't exist
    const parent = img.parentElement;
    if (!parent) return;
    
    let placeholder = parent.querySelector('.product-img-placeholder');
    
    if (!placeholder) {
        placeholder = document.createElement('div');
        placeholder.className = 'product-img-placeholder';
        placeholder.innerHTML = '<i class="fas fa-image"></i>';
        parent.appendChild(placeholder);
    }
    
    // Add ARIA for accessibility
    img.setAttribute('aria-busy', 'true');
    img.setAttribute('alt', img.getAttribute('alt') || 'Product image loading');
}

/**
 * Load image from data-src attribute with enhanced error handling
 * @param {HTMLImageElement} img - Image element
 * @param {number} retryCount - Number of retries attempted
 */
function loadImage(img, retryCount = 0) {
    const dataSrc = img.getAttribute('data-src');
    if (!dataSrc) return;
    
    // Check cache first if enabled
    if (IMAGE_CONFIG.useLocalCache) {
        const cachedImage = checkImageCache(dataSrc);
        if (cachedImage) {
            img.src = cachedImage;
            img.classList.remove('loading');
            img.classList.add('loaded');
            img.removeAttribute('data-src');
            img.setAttribute('aria-busy', 'false');
            imageStats.cached++;
            logImageStats();
            return;
        }
    }
    
    // Add loading class and blur effect for progressive loading
    img.classList.add('loading');
    if (IMAGE_CONFIG.lowQualityPreview) {
        img.style.filter = 'blur(5px)';
    }
    
    // Set up load timeout
    const timeoutId = setTimeout(() => {
        if (img.classList.contains('loading')) {
            // Image taking too long, retry or handle as error
            if (retryCount < IMAGE_CONFIG.retryCount) {
                // Retry loading
                loadImage(img, retryCount + 1);
            } else {
                // Mark as failed after retries
                handleImageError(img, 'timeout');
            }
        }
    }, IMAGE_CONFIG.loadingTimeout);
    
    // Set up load handler
    img.onload = function() {
        clearTimeout(timeoutId);
        img.classList.remove('loading');
        img.classList.add('loaded');
        img.removeAttribute('data-src');
        img.setAttribute('aria-busy', 'false');
        
        // Remove blur effect with a transition
        if (IMAGE_CONFIG.lowQualityPreview) {
            setTimeout(() => {
                img.style.filter = 'blur(0)';
            }, 10);
        }
        
        // Store in cache if enabled
        if (IMAGE_CONFIG.useLocalCache) {
            cacheImage(dataSrc, img.src);
        }
        
        // Update stats
        imageStats.loaded++;
        logImageStats();
    };
    
    // Set up error handler
    img.onerror = function() {
        clearTimeout(timeoutId);
        if (retryCount < IMAGE_CONFIG.retryCount) {
            // Retry with a different method or URL modification
            const retryUrl = getRetryUrl(dataSrc, retryCount);
            img.src = retryUrl;
            loadImage(img, retryCount + 1);
        } else {
            handleImageError(img, 'error');
        }
    };
    
    // Start loading the image
    img.src = dataSrc;
}

/**
 * Get a retry URL for failed images
 * @param {string} originalUrl - Original image URL
 * @param {number} retryCount - Current retry count
 * @returns {string} - Modified URL for retry
 */
function getRetryUrl(originalUrl, retryCount) {
    // Try some common URL modifications that might fix issues
    if (originalUrl.includes('unsplash.com') && !originalUrl.includes('ixlib=')) {
        // Add quality parameters for Unsplash
        return `${originalUrl}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
    }
    
    // Try with cache busting
    if (retryCount === 1) {
        const separator = originalUrl.includes('?') ? '&' : '?';
        return `${originalUrl}${separator}_cb=${new Date().getTime()}`;
    }
    
    // If all else fails, return the original URL
    return originalUrl;
}

/**
 * Handle image loading errors
 * @param {HTMLImageElement} img - Image element that failed to load
 * @param {string} reason - Why the image failed to load
 */
function handleImageError(img, reason = 'error') {
    img.classList.remove('loading');
    img.classList.add('error');
    
    // Remove blur effect if any
    img.style.filter = 'none';
    
    // Log the error if enabled
    if (IMAGE_CONFIG.logErrors) {
        console.warn(`Failed to load image (${reason}): ${img.getAttribute('data-src') || img.getAttribute('src')}`);
    }
    
    // Set fallback image
    img.src = PLACEHOLDER_IMAGE_DATA;
    
    // Notify accessibility
    img.setAttribute('aria-busy', 'false');
    img.setAttribute('alt', 'Image failed to load');
    
    // Show placeholder
    const parent = img.parentElement;
    if (!parent) return;
    
    let placeholder = parent.querySelector('.product-img-placeholder');
    
    if (!placeholder) {
        placeholder = document.createElement('div');
        placeholder.className = 'product-img-placeholder';
        parent.appendChild(placeholder);
    }
    
    placeholder.innerHTML = '<i class="fas fa-image"></i><span>Image not available</span>';
    placeholder.style.display = 'flex';
    
    // Update stats
    imageStats.failed++;
    logImageStats();
}

/**
 * Cache image data in localStorage
 * @param {string} url - Image URL
 * @param {string} dataUrl - Data URL of image
 */
function cacheImage(url, dataUrl) {
    try {
        // Only cache if it's not already a data URL
        if (!url.startsWith('data:')) {
            // Generate a consistent key for the URL
            const key = 'img_' + url.split('/').pop().split('?')[0];
            
            // Just store that this URL has been successfully loaded before
            localStorage.setItem(key, 'loaded');
        }
    } catch (e) {
        // Local storage might be full or disabled
        if (IMAGE_CONFIG.logErrors) {
            console.warn('Failed to cache image:', e);
        }
    }
}

/**
 * Check if image is in cache
 * @param {string} url - Image URL
 * @returns {string|null} - Cached image data URL or null
 */
function checkImageCache(url) {
    try {
        // Generate a consistent key for the URL
        const key = 'img_' + url.split('/').pop().split('?')[0];
        
        // Check if this URL has been successfully loaded before
        return localStorage.getItem(key) ? url : null;
    } catch (e) {
        return null;
    }
}

/**
 * Log image loading statistics
 */
function logImageStats() {
    if (!IMAGE_CONFIG.logErrors) return;
    
    // Only log after all images are processed or every 10 images
    if (imageStats.loaded + imageStats.failed === imageStats.total || 
        (imageStats.loaded + imageStats.failed) % 10 === 0) {
        
        const duration = performance.now() - imageStats.startTime;
        
        console.log(`Image loading stats:
            Total: ${imageStats.total}
            Loaded: ${imageStats.loaded}
            Failed: ${imageStats.failed}
            Cached: ${imageStats.cached}
            Time: ${duration.toFixed(2)}ms
            Completed: ${((imageStats.loaded + imageStats.failed) / imageStats.total * 100).toFixed(2)}%
        `);
    }
}

/**
 * Preload images based on current page context
 */
function preloadImagesBasedOnContext() {
    // Get current page context
    const isProductPage = window.location.pathname.includes('product');
    const isProductsListPage = window.location.pathname.includes('products');
    
    // Get visible product cards
    const visibleProductCards = document.querySelectorAll('.product-card');
    
    if (isProductPage) {
        // On a single product page, try to preload related product images
        const relatedProductImages = document.querySelectorAll('.related-products img[data-src]');
        if (relatedProductImages.length) {
            setTimeout(() => {
                relatedProductImages.forEach(img => {
                    const dataSrc = img.getAttribute('data-src');
                    if (dataSrc) {
                        const preloadLink = document.createElement('link');
                        preloadLink.rel = 'preload';
                        preloadLink.as = 'image';
                        preloadLink.href = dataSrc;
                        document.head.appendChild(preloadLink);
                    }
                });
            }, 1000); // Delay to prioritize visible images first
        }
    } else if (isProductsListPage) {
        // On products list, preload next page of products
        // This assumes pagination exists and uses common class names
        const nextPageLink = document.querySelector('.pagination .page-link.active + .page-link');
        if (nextPageLink) {
            // Mark intent to preload next page
            nextPageLink.setAttribute('data-preload', 'planned');
            
            // Add hover listener to preload on hover
            nextPageLink.addEventListener('mouseenter', () => {
                if (nextPageLink.getAttribute('data-preload') === 'planned') {
                    nextPageLink.setAttribute('data-preload', 'triggered');
                    prefetchNextPage(nextPageLink.getAttribute('href'));
                }
            });
            
            // If user has scrolled near bottom, preload anyway
            window.addEventListener('scroll', () => {
                if (nextPageLink.getAttribute('data-preload') === 'planned' && 
                    (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000) {
                    nextPageLink.setAttribute('data-preload', 'triggered');
                    prefetchNextPage(nextPageLink.getAttribute('href'));
                }
            }, { passive: true });
        }
    }
}

/**
 * Prefetch the next page for smoother pagination
 * @param {string} url - URL of next page
 */
function prefetchNextPage(url) {
    if (!url) return;
    
    // If it's a relative URL, make it absolute
    if (url.startsWith('#') || url === 'javascript:void(0)') {
        // Probably a client-side pagination, no need to prefetch
        return;
    }
    
    if (!url.startsWith('http')) {
        const base = window.location.origin + window.location.pathname;
        url = new URL(url, base).href;
    }
    
    // Create a prefetch link
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
}

/**
 * Custom product rendering function with proper image handling
 * @param {Object} product - Product object
 * @param {HTMLElement} container - Container to render product in
 */
function renderProductWithImageHandling(product, container) {
    if (!product || !product.images || product.images.length === 0) {
        console.error('Invalid product data:', product);
        return;
    }
    
    const productDiv = document.createElement('div');
    productDiv.className = 'product-card';
    productDiv.dataset.id = product.id;
    
    // Create product HTML with proper image handling
    productDiv.innerHTML = `
        <div class="product-img-container">
            <img class="product-img" src="${PLACEHOLDER_IMAGE_DATA}" data-src="${product.images[0]}" alt="${product.name}" />
            <div class="product-img-placeholder">
                <i class="fas fa-image"></i>
            </div>
            ${product.isNew ? '<span class="product-badge new">New</span>' : ''}
            ${product.isSale ? '<span class="product-badge sale">Sale</span>' : ''}
            <div class="product-actions">
                <button class="quick-view-btn" data-id="${product.id}" aria-label="Quick view ${product.name}">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="add-to-wishlist" data-id="${product.id}" aria-label="Add ${product.name} to wishlist">
                    <i class="far fa-heart"></i>
                </button>
                <button class="add-to-cart-btn" data-id="${product.id}" aria-label="Add ${product.name} to cart">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">
                ${renderRatingStars(product.rating)}
                <span class="review-count">(${product.reviewCount || 0})</span>
            </div>
            <div class="product-price">
                ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice}</span>` : ''}
                <span class="current-price">₹${product.price}</span>
            </div>
        </div>
    `;
    
    // Add to container
    container.appendChild(productDiv);
    
    // Initialize image for this product
    const img = productDiv.querySelector('.product-img');
    if (img && hasIntersectionObserver) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: IMAGE_CONFIG.lazyLoadMargin,
            threshold: 0.01
        });
        
        imageObserver.observe(img);
    } else if (img) {
        // For browsers without IntersectionObserver, load if in viewport
        if (isElementNearViewport(img)) {
            loadImage(img);
        } else {
            // Set up scroll listener
            const scrollHandler = () => {
                if (isElementNearViewport(img) && img.getAttribute('data-src')) {
                    loadImage(img);
                    window.removeEventListener('scroll', scrollHandler);
                }
            };
            window.addEventListener('scroll', scrollHandler, { passive: true });
            
            // Check initial position
            scrollHandler();
        }
    }
    
    // Make product card accessible
    productDiv.setAttribute('tabindex', '0');
    productDiv.setAttribute('aria-label', `${product.name}, ${product.price} rupees`);
    
    return productDiv;
}

/**
 * Render rating stars
 * @param {number} rating - Product rating (0-5)
 * @returns {string} HTML for rating stars
 */
function renderRatingStars(rating) {
    if (!rating) return '<div class="stars" aria-label="Not rated yet">Not rated yet</div>';
    
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHTML = `<div class="stars" aria-label="Rated ${rating} out of 5 stars">`;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Half star if needed
    if (halfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    starsHTML += '</div>';
    return starsHTML;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initImageLazyLoading();
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initImageLazyLoading,
        loadImage,
        renderProductWithImageHandling,
        renderRatingStars,
        handleImageError
    };
} 