// Vendor Authentication (Login/Registration)

document.addEventListener('DOMContentLoaded', function() {
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }

    // Registration form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRegistration();
        });
    }
});

function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('login-message');

    // Simple validation
    if (!email || !password) {
        showMessage(messageDiv, 'Please fill in all fields', 'error');
        return;
    }

    // In a real app, you would validate against a server
    // For this demo, we'll use localStorage and mock data

    fetch('js/data/users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                // Store user ID in localStorage to simulate session
                localStorage.setItem('vendorId', user.id);
                showMessage(messageDiv, 'Login successful! Redirecting...', 'success');

                // Redirect to dashboard after short delay
                setTimeout(() => {
                    window.location.href = 'vendor-dashboard.html';
                }, 1500);
            } else {
                showMessage(messageDiv, 'Invalid email or password', 'error');
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            showMessage(messageDiv, 'Error during login. Please try again.', 'error');
        });
}

function handleRegistration() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    const businessName = document.getElementById('reg-business-name').value;
    const category = document.getElementById('reg-category').value;
    const phone = document.getElementById('reg-phone').value;
    const messageDiv = document.getElementById('register-message');

    // Validation
    if (!name || !email || !password || !confirmPassword || !businessName || !category || !phone) {
        showMessage(messageDiv, 'Please fill in all fields', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showMessage(messageDiv, 'Passwords do not match', 'error');
        return;
    }

    if (password.length < 6) {
        showMessage(messageDiv, 'Password must be at least 6 characters', 'error');
        return;
    }

    // In a real app, you would send this to a server
    // For this demo, we'll simulate adding to JSON files

    // Generate a simple ID (in a real app, this would be done by the server)
    const newUserId = 'user-' + Date.now();
    const newVendorId = 'vendor-' + Date.now();

    const newUser = {
        id: newUserId,
        name: name,
        email: email,
        password: password,
        vendorId: newVendorId
    };

    const newVendor = {
        id: newVendorId,
        businessName: businessName,
        category: category,
        email: email,
        phone: phone,
        description: '',
        image: 'assets/images/default-vendor.jpg'
    };

    // In a real app, you would POST this to a server
    // For this demo, we'll store in localStorage and pretend we updated the JSON

    // Store user in localStorage (simulating database)
    localStorage.setItem('vendorId', newVendorId);

    showMessage(messageDiv, 'Registration successful! Redirecting...', 'success');

    // Redirect to dashboard after short delay
    setTimeout(() => {
        window.location.href = 'vendor-dashboard.html';
    }, 1500);
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