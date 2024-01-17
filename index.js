document.addEventListener('DOMContentLoaded', function() {
    const slidePrev = document.querySelector('.slide-prev');
    const slideNext = document.querySelector('.slide-next');
    const classList = document.querySelector('.class-list');

    // 이전 목록으로 이동
    slidePrev.addEventListener('click', function() {
        const lastCard = document.querySelector('.class-list li:last-child');
        classList.insertBefore(lastCard, classList.firstChild); // 마지막 카드를 첫 번째로 이동
    });

    // 다음 목록으로 이동
    slideNext.addEventListener('click', function() {
        const firstCard = document.querySelector('.class-list li:first-child');
        classList.appendChild(firstCard); // 첫 번째 카드를 마지막으로 이동
    });
});