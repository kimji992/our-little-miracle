const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.16 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

const petals = document.querySelector('.petals');
for (let i = 0; i < 12; i++) {
  const s = document.createElement('span');
  s.style.left = `${Math.random() * 100}%`;
  s.style.animationDelay = `${Math.random() * 8}s`;
  s.style.animationDuration = `${12 + Math.random() * 9}s`;
  petals.appendChild(s);
}

const btn = document.getElementById('musicToggle');
const bgm = document.getElementById('bgm');
let playing = false;
btn.addEventListener('click', async () => {
  try {
    if (!playing) {
      await bgm.play();
      playing = true;
      btn.textContent = '⏸️ 음악 멈추기';
    } else {
      bgm.pause();
      playing = false;
      btn.textContent = '🎵 음악 듣기';
    }
  } catch {
    alert('audio/bgm.mp3 파일을 업로드해 주세요.');
  }
});
