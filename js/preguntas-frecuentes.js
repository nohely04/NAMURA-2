document.addEventListener("DOMContentLoaded", function() {
    const accordionContainer = document.querySelector('#acordeón-preguntas');

    accordionContainer.addEventListener('show.bs.collapse', function (e) {
        const openAccordions = accordionContainer.querySelectorAll('.accordion-collapse.show');

        if (openAccordions.length >= 2) {
            // Encuentra el acordeón que debe ser cerrado
            const accordionToClose = openAccordions[0];
            if (accordionToClose !== e.target) {
                const buttonToClose = accordionToClose.previousElementSibling.querySelector('.accordion-button');
                accordionToClose.classList.remove('show');
                buttonToClose.classList.add('collapsed');
                buttonToClose.setAttribute('aria-expanded', 'false');
            }
        }
    });
});