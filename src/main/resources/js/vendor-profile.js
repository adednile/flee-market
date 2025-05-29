// Vendor Profile Management

document.addEventListener('DOMContentLoaded', function() {
    const vendorId = localStorage.getItem('vendorId');
    if (!vendorId) {
        window.location.href = 'vendor-login.html';
        return;
    }

    // Load vendor data
    loadVendorData(vendorId);

    // Set up form submission
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            updateVendorProfile(vendorId);
        });
    }

    // Set up image upload
    const uploadBtn = document.getElementById('upload-btn');
    const imageUpload = document.getElementById('image-upload');

    if (uploadBtn && imageUpload) {
        uploadBtn.addEventListener('click', function() {
            imageUpload.click();
        });

        imageUpload.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    document.getElementById('vendor-image').src = e.target.result;

                    // In a real app, you would upload the image to a server
                    // For this demo, we'll just store the data URL in localStorage
                    localStorage.setItem('vendorImage', e.target.result);
                };

                reader.readAsDataURL(this.files[0]);
            }
        });
    }
});

function loadVendorData(vendorId) {
    // In a real app, you would fetch this from a server
    // For this demo, we'll use mock data

    fetch('js/data/vendors.json')
        .then(response => response.json())
        .then(vendors => {
            const vendor = vendors.find(v => v.id === vendorId);

            if (vendor) {
                // Populate form fields
                document.getElementById('vendor-name').value = vendor.businessName;
                document.getElementById('vendor-category').value = vendor.category;
                document.getElementById('vendor-email').value = vendor.email;
                document.getElementById('vendor-phone').value = vendor.phone;
                document.getElementById('vendor-description').value = vendor.description || '';

                // Set image
                const vendorImage = document.getElementById('vendor-image');
                if (localStorage.getItem('vendorImage')) {
                    vendorImage.src = localStorage.getItem('vendorImage');
                } else if (vendor.image) {
                    vendorImage.src = vendor.image;
                }
            } else {
                showMessage('Vendor data not found', 'error');
            }
        })
        .catch(error => {
            console.error('Error loading vendor data:', error);
            showMessage('Error loading vendor data', 'error');
        });
}

function updateVendorProfile(vendorId) {
    const businessName = document.getElementById('vendor-name').value;
    const category = document.getElementById('vendor-category').value;
    const email = document.getElementById('vendor-email').value;
    const phone = document.getElementById('vendor-phone').value;
    const description = document.getElementById('vendor-description').value;
    const messageDiv = document.getElementById('profile-message');

    // Validation
    if (!businessName || !category || !email || !phone) {
        showMessage(messageDiv, 'Please fill in all required fields', 'error');
        return;
    }

    // In a real app, you would send this to a server to update the database
    // For this demo, we'll just show a success message

    showMessage(messageDiv, 'Profile updated successfully!', 'success');

    // In a real implementation, you would:
    // 1. Send the updated data to your server
    // 2. Handle the response
    // 3. Update the UI accordingly
}

function showMessage(element, message, type) {
    element.textContent = message;
    element.className = 'message ' + type;
    element.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}