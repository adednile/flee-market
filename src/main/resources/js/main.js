// Shared functions across all pages

// Check if user is logged in (for vendor pages)
function checkVendorLogin() {
    if (window.location.pathname.includes('vendor-dashboard.html') ||
        window.location.pathname.includes('vendor-profile.html')) {
        const vendorId = localStorage.getItem('vendorId');
        if (!vendorId) {
            window.location.href = 'vendor-login.html';
        }
    }
}

// Initialize the page
function initPage() {
    checkVendorLogin();

    // Add logout functionality
    const logoutLinks = document.querySelectorAll('#logout-link');
    if (logoutLinks) {
        logoutLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('vendorId');
                window.location.href = 'index.html';
            });
        });
    }
}

// Document ready
document.addEventListener('DOMContentLoaded', initPage);