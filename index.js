const form = document.querySelector('form');
const card_1 = document.querySelector('.card');
const card_2 = document.querySelector('.card-success');
const errorMessage = document.getElementById('error-message');
const dismissButton = document.querySelector('.dismiss-button');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailValue)) {
        errorMessage.textContent = 'Please enter a valid email address';
        return;
    }
    card_1.classList.add("hide");
    card_2.classList.remove("hide");
});

dismissButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});