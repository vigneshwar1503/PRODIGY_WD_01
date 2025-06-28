document.querySelectorAll('button, input[type="submit"]').forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.type === 'submit') {
            e.preventDefault();
            alert('Thank you for your interest! We will contact you soon at the provided email. 📧');
        } else {
            alert('Explore our solutions to transform your business! 🚀');
        }
    });
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});