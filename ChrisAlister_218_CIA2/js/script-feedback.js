const form = document.getElementById('feedbackForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        form.addEventListener('submit', function (e) {
            let isValid = true;

            // Name validation
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            // Email validation
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Valid email is required';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // Message validation
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required';
                isValid = false;
            } else {
                messageError.textContent = '';
            }

            if (!isValid) {
                e.preventDefault(); // Prevent form submission if there are errors
            }
        });