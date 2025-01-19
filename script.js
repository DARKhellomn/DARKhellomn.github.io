document.getElementById('add-guide').addEventListener('click', function() {
    const guideInput = document.getElementById('new-guide');
    const guideText = guideInput.value.trim();
    const guideList = document.getElementById('guide-list');

    if (guideText) {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = guideText;
        guideList.appendChild(card);
        guideInput.value = ''; // 입력 필드 비우기
    } else {
        alert('공략 내용을 입력하세요.');
    }
});
