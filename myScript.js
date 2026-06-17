// 🔥 수정된 부분: .trap-card 와 .result-card 둘 다 찾으라고 쉼표(,)로 연결해 줍니다!
const cards = document.querySelectorAll('.trap-card, .result-card');

// 각각의 카드에 클릭 스위치를 달아줍니다.
cards.forEach(card => {
    card.addEventListener('click', () => {
        // 카드를 클릭하면 'active' 디자인을 켰다 껐다(toggle) 합니다.
        card.classList.toggle('active');
    });
});