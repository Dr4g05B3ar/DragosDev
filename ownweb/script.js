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
skillBars.forEach((bar, index) => {
    const skillName = document.querySelector(`.skill-bar:nth-child(${index + 1}) .skill-name`);
    
    // Set random percentages
    const percentage = Math.floor(Math.random() * 100);
    bar.style.width = `${percentage}%`;
    bar.style.setProperty('--percentage', `${percentage}%`);
    
    // Update skill name based on percentage
    skillName.textContent = `${skillName.textContent} (${percentage}%)`;
});

// Simple progress bar test
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
progressBar.style.width = '0%';
progressBar.style.backgroundColor = '#4CAF50'; // Green

const progressBarContainer = document.getElementById('progress-container');
if (!progressBarContainer) {
    progressBarContainer = document.body;
}

progressBarContainer.appendChild(progressBar);

function increaseProgressBar() {
    let currentWidth = parseInt(progressBar.style.width.replace('%', ''));
    currentWidth += 5;
    if (currentWidth <= 100) {
        progressBar.style.width = `${currentWidth}%`;
        setTimeout(increaseProgressBar, 500); // Increase every 500ms
    }
}

increaseProgressBar();
