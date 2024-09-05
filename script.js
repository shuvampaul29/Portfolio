const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
document.querySelector(".visit-btn").addEventListener('click', function() {
    window.open('https://github.com/shuvampaul29', '_blank');
});

document.getElementById('CV').addEventListener('click', function() {
    window.open('Resume.pdf', '_blank');
});

document.getElementById('contact-btn').addEventListener('click', function() {
    window.location.href = 'index.html#contact';
});

document.getElementById('git-logo').addEventListener('click', function() {
    window.open('https://github.com/shuvampaul29', '_blank');
});
document.getElementById('in-logo').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/shuvam-paul-555449280/', '_blank');
});