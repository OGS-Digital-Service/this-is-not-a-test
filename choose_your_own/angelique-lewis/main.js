        function showThankYou(response) {
        const message = document.getElementById('thank-you');
        if (response === 'yes') {
            message.innerHTML = "<h3> We're glad you were able to complete your task today. Thank you for the feedback!</h3>"
        } else {
            message.innerHTML = "<h3> Sorry to hear that, We'll use your feedback to improve our services.</h3>"
        }
        message.classList.remove('hidden');

        // hide button after user gives live feedback
        const buttons = document.querySelectorAll('#survey button');
        buttons.forEach(btn => btn.style.display = 'none');
    }