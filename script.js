const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');

setTimeout(() => {
    slideLeft.style.transform = 'translateX(0)';
    slideRight.style.transform = 'translateX(0)';
}, 500);