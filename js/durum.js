let soundList = {
    A: './kick.wav',
    S: './openhat.wav',
    D: './ride.wav',
    F: './snare.wav',
    G: './tink.wav',
    H: './tom.wav',
    J: './hihat.wav',
    K: './clap.wav',
    L: './boom.wav',
};

function playSound(key) {
    const sound = soundList[key]; // Tuşa karşılık gelen ses dosyası
    if (sound) { // Eğer ses tanımlıysa
        const audio = new Audio(sound); // Yeni bir ses nesnesi oluştur
        audio.play(); // Sesi çal
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const key = button.getAttribute('data-key'); // Butona ait veri-anahtarı al
        playSound(key); // İlgili sesi çal
    });
});
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase(); // Basılan tuşu al ve büyük harfe çevir
    playSound(key); // İlgili sesi çal
});