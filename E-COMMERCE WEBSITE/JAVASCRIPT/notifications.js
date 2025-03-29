/**
 * Global notification system for ShopHub e-commerce website
 * Provides standardized toast notifications across the site
 */

// Notification queue to prevent overlapping
let notificationQueue = [];
let isProcessingQueue = false;

/**
 * Show a notification toast message
 * @param {string} message - Message to display
 * @param {string} type - Notification type: 'success', 'error', 'info', 'warning'
 * @param {number} duration - Duration in milliseconds
 * @param {boolean} dismissible - Whether user can dismiss the notification
 */
function showNotification(message, type = 'success', duration = 3000, dismissible = true) {
    // Add to queue
    notificationQueue.push({ message, type, duration, dismissible });
    
    // Process queue if not already processing
    if (!isProcessingQueue) {
        processNotificationQueue();
    }
}

/**
 * Process notification queue one by one
 */
function processNotificationQueue() {
    if (notificationQueue.length === 0) {
        isProcessingQueue = false;
        return;
    }
    
    isProcessingQueue = true;
    
    // Get next notification from queue
    const { message, type, duration, dismissible } = notificationQueue.shift();
    
    // Create notification container if it doesn't exist
    let notificationContainer = document.querySelector('.notification-container');
    
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
        
        // Add styles if they don't exist
        if (!document.getElementById('notification-styles')) {
            addNotificationStyles();
        }
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Add icon based on type
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
        ${dismissible ? '<button class="close-notification" aria-label="Close notification"><i class="fas fa-times"></i></button>' : ''}
    `;
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Slide in animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Set up automatic removal
    const timeoutId = setTimeout(() => {
        removeNotification(notification);
    }, duration);
    
    // Add click handler for close button
    if (dismissible) {
        const closeButton = notification.querySelector('.close-notification');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                clearTimeout(timeoutId);
                removeNotification(notification);
            });
        }
    }
}

/**
 * Remove a notification with animation
 * @param {HTMLElement} notification - Notification element to remove
 */
function removeNotification(notification) {
    notification.classList.remove('show');
    
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
        
        // Process next notification
        setTimeout(processNotificationQueue, 300);
    }, 300);
}

/**
 * Add notification styles to document
 */
function addNotificationStyles() {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        .notification-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 100%;
            pointer-events: none;
        }
        
        .notification {
            background: white;
            color: #333;
            padding: 15px 20px;
            border-radius: 4px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
            max-width: 350px;
            display: flex;
            align-items: center;
            gap: 10px;
            transform: translateX(120%);
            opacity: 0;
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease;
            pointer-events: auto;
        }
        
        .notification.show {
            transform: translateX(0);
            opacity: 1;
        }
        
        .notification.success {
            border-left: 4px solid #4CAF50;
        }
        
        .notification.error {
            border-left: 4px solid #F44336;
        }
        
        .notification.warning {
            border-left: 4px solid #FF9800;
        }
        
        .notification.info {
            border-left: 4px solid #2196F3;
        }
        
        .notification i {
            font-size: 1.2rem;
        }
        
        .notification.success i {
            color: #4CAF50;
        }
        
        .notification.error i {
            color: #F44336;
        }
        
        .notification.warning i {
            color: #FF9800;
        }
        
        .notification.info i {
            color: #2196F3;
        }
        
        .notification span {
            flex-grow: 1;
        }
        
        .close-notification {
            background: none;
            border: none;
            color: #aaa;
            cursor: pointer;
            font-size: 1rem;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
        }
        
        .close-notification:hover {
            color: #333;
        }
        
        @media (max-width: 576px) {
            .notification-container {
                top: auto;
                bottom: 20px;
                right: 50%;
                transform: translateX(50%);
                width: calc(100% - 40px);
            }
            
            .notification {
                max-width: 100%;
                width: 100%;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Add notification styles
    if (!document.getElementById('notification-styles')) {
        addNotificationStyles();
    }
}); 