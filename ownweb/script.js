// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Navigation active class
const navItems = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');
    });
});

sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= top && window.scrollY < top + height) {
            navItems.forEach(n => n.classList.remove('active'));
            section.id === section.name ? section.closest('li').querySelector('a').classList.add('active') : null;
        }
    });
});

// Project card animation
const projectCards = document.querySelectorAll('.project-card');
let cardIndex = 0;

function animateCard() {
    projectCards[cardIndex].style.transform = 'scale(1.05)';
    setTimeout(() => {
        projectCards[cardIndex].style.transform = 'scale(1)';
        cardIndex = (cardIndex + 1) % projectCards.length;
        animateCard();
    }, 3000); // Animation duration in milliseconds
}

animateCard(); // Start the animation

// Skill bar progress
const skillBars = document.querySelectorAll('.progress-bar');
skillBars.forEach(bar => {
    const percentage = Math.random() * 100; // Random percentage between 0 and 100
    bar.style.width = `${percentage}%`;
});