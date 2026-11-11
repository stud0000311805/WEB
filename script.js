const menu = document.querySelector('.mobile_menu');
const menuButton = document.querySelector('.menu_button');
const closeButton = document.querySelector('.menu_close');

menuButton.onclick = function () {
    menu.classList.add('open');
};

closeButton.onclick = function () {
    menu.classList.remove('open');
};


const faqButtons = document.querySelectorAll('.faq_question');

faqButtons.forEach(function (faqButton) {
    faqButton.onclick = function () {
        const faqItem = faqButton.parentElement;
        const faqImage = faqButton.querySelector('img');

        if (faqItem.classList.contains('is-open')) {
            faqItem.classList.remove('is-open');
            faqImage.src = 'src/ico/+blue.svg';
        } else {
            faqItem.classList.add('is-open');
            faqImage.src = 'src/ico/+silver.svg';
        }
    };
});
