document.addEventListener('DOMContentLoaded', () => {
    // Keyboard Navigation Improvements
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals or menus
            const openModals = document.querySelectorAll('[aria-expanded="true"]');
            openModals.forEach(modal => {
                modal.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Improve form accessibility
    const form = document.querySelector('.contact-form');
    if (form) {
        const formInputs = form.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            // Add aria-required attribute
            if (input.required) {
                input.setAttribute('aria-required', 'true');
            }
            
            // Add error handling
            input.addEventListener('invalid', (e) => {
                e.preventDefault();
                input.setAttribute('aria-invalid', 'true');
                
                // Create error message
                const errorId = `error-${input.id}`;
                let errorElement = document.getElementById(errorId);
                
                if (!errorElement) {
                    errorElement = document.createElement('div');
                    errorElement.id = errorId;
                    errorElement.className = 'error-message';
                    errorElement.setAttribute('role', 'alert');
                    input.parentNode.insertBefore(errorElement, input.nextSibling);
                }
                
                errorElement.textContent = input.validationMessage;
                input.setAttribute('aria-describedby', errorId);
            });
            
            // Clear error state on input
            input.addEventListener('input', () => {
                if (input.hasAttribute('aria-invalid')) {
                    input.removeAttribute('aria-invalid');
                    const errorElement = document.getElementById(`error-${input.id}`);
                    if (errorElement) {
                        errorElement.remove();
                    }
                }
            });
        });
    }

    // Accessible Loading States
    const loadingStates = {
        start: (element, text = 'Loading...') => {
            element.setAttribute('aria-busy', 'true');
            element.setAttribute('aria-label', text);
            if (element.tagName === 'BUTTON') {
                element.disabled = true;
            }
        },
        end: (element, originalLabel) => {
            element.setAttribute('aria-busy', 'false');
            element.setAttribute('aria-label', originalLabel);
            if (element.tagName === 'BUTTON') {
                element.disabled = false;
            }
        }
    };

    // Accessible Animations
    const animateElement = (element) => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion) {
            element.classList.add('animate');
        }
    };

    // Modal functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    const modalImages = document.querySelectorAll('.modal-image');

    // Open modal when clicking on an image
    modalImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.dataset.modalSrc || this.src;
            modalImg.alt = this.alt;
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal when clicking on X
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === "block") {
            modal.style.display = "none";
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
});