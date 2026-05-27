const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.18 });
reveals.forEach((el) => io.observe(el));

const btn = document.getElementById('musicToggle');
const bgm = document.getElementById('bgm');
let playing = false;
btn.addEventListener('click', async () => {
  try {
    if (!playing) {
      await bgm.play();
      playing = true;
      btn.textContent = '⏸️ 음악 잠시 멈추기';
    } else {
      bgm.pause();
      playing = false;
      btn.textContent = '🎵 음악 듣기';
    }
  } catch (e) {
    alert('음악 파일을 확인해 주세요 (audio/bgm.mp3)');
  }
});
