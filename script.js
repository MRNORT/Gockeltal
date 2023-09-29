function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // You can add code here to handle the form submission (e.g., sending data to a server).
        // For now, let's log the form data.
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Clear the form after submission (you can remove this if not needed)
        form.reset();
    });
});
