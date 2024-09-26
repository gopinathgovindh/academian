
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const closeIcon = document.getElementById('closeIcon');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});
