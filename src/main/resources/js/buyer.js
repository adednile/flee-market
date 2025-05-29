// Buyer Dashboard functionality

document.addEventListener('DOMContentLoaded', function() {
    // Load vendors data
    loadVendors();

    // Set up search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const categoryFilter = document.getElementById('category-filter');

    searchBtn.addEventListener('click', filterVendors);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterVendors();
        }
    });
    categoryFilter.addEventListener('change', filterVendors);
});

function loadVendors() {
    fetch('js/data/vendors.json')
        .then(response => response.json())
        .then(data => {
            displayVendors(data);
        })
        .catch(error => {
            console.error('Error loading vendors:', error);
            document.getElementById('vendors-container').innerHTML =
                '<div class="message error">Error loading vendors. Please try again later.</div>';
        });
}

function displayVendors(vendors) {
    const vendorsContainer = document.getElementById('vendors-container');

    if (vendors.length === 0) {
        vendorsContainer.innerHTML = '<div class="message">No vendors found.</div>';
        return;
    }

    vendorsContainer.innerHTML = '';

    vendors.forEach(vendor => {
        const vendorCard = document.createElement('div');
        vendorCard.className = 'vendor-card';

        vendorCard.innerHTML = `
            <img src="${vendor.image || 'assets/images/default-vendor.jpg'}" alt="${vendor.businessName}" class="vendor-image">
            <div class="vendor-info">
                <h3>${vendor.businessName}</h3>
                <span class="vendor-category">${vendor.category}</span>
                <p class="vendor-description">${vendor.description || 'No description provided.'}</p>
                <div class="vendor-contact">
                    <a href="mailto:${vendor.email}">Email</a>
                    <a href="tel:${vendor.phone}">Call</a>
                </div>
            </div>
        `;

        vendorsContainer.appendChild(vendorCard);
    });
}

function filterVendors() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const category = document.getElementById('category-filter').value;

    fetch('js/data/vendors.json')
        .then(response => response.json())
        .then(data => {
            let filteredVendors = data;

            // Filter by search term
            if (searchTerm) {
                filteredVendors = filteredVendors.filter(vendor =>
                    vendor.businessName.toLowerCase().includes(searchTerm) ||
                    (vendor.description && vendor.description.toLowerCase().includes(searchTerm)) ||
                    vendor.category.toLowerCase().includes(searchTerm));
            }

            // Filter by category
            if (category) {
                filteredVendors = filteredVendors.filter(vendor => vendor.category === category);
            }

            displayVendors(filteredVendors);
        })
        .catch(error => {
            console.error('Error filtering vendors:', error);
            document.getElementById('vendors-container').innerHTML =
                '<div class="message error">Error filtering vendors. Please try again later.</div>';
        });
}