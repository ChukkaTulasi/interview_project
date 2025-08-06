document.querySelectorAll('.qa').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
