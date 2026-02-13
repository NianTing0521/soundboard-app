if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log("Service Worker 註冊成功！"))
        .catch((err) => console.log("Service Worker 註冊失敗", err));
}
const buttons = document.querySelectorAll('.btn');
let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundSrc = button.getAttribute('data-sound');
        playSound(soundSrc);
    });
});

function playSound(src) {
    // 建立新的音訊物件
    const audio = new Audio(src);
    audio.play();
}

// 停止功能的進階實作 (若需要同時只能播放一個聲音)
document.getElementById('stop-btn').addEventListener('click', () => {
    // 這裡可以透過重新整理或進階控制來停止所有音訊
    window.location.reload(); 
});