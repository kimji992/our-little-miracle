<script setup>
import { onMounted, ref, nextTick } from 'vue'
const loading = ref(true)
const playing = ref(false)
const audio = ref(null)

const timeline = [
  {
    step: '01',
    title: '처음 만난 날',
    date: 'First Reveal',
    text: '아주 작은 점으로 시작된 우리의 기적',
    image: '/our-little-miracle/images/ultrasound-1.jpg'
  },
  {
    step: '02',
    title: '두근거림',
    date: 'Heartbeat Day',
    text: '처음 들은 심장 소리에 웃고 울던 순간',
    image: '/our-little-miracle/images/ultrasound-2.jpg'
  },
  {
    step: '03',
    title: '기다림의 시간',
    date: 'Growing Love',
    text: '사랑으로 채워지는 매일의 기록',
    image: '/our-little-miracle/images/family-1.jpg'
  }
]

const gallery = [
  '/our-little-miracle/images/ultrasound-1.jpg',
  '/our-little-miracle/images/ultrasound-2.jpg',
  '/our-little-miracle/images/family-1.jpg',
  '/our-little-miracle/images/ultrasound-1.jpg',
  '/our-little-miracle/images/ultrasound-2.jpg',
  '/our-little-miracle/images/family-1.jpg',
  '/our-little-miracle/images/ultrasound-1.jpg',
  '/our-little-miracle/images/family-1.jpg'
]

onMounted(async () => {
  setTimeout(() => (loading.value = false), 900)
  await nextTick()
  const els = document.querySelectorAll('.reveal')
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        io.unobserve(entry.target)
      }
    })
  }, { threshold: 0.18 })
  els.forEach((el) => io.observe(el))
})
const toggleMusic = async () => {
  if (!audio.value) return
  if (!playing.value) { await audio.value.play(); playing.value = true }
  else { audio.value.pause(); playing.value = false }
}
</script>

<template>
  <div>
    <div class="loader" :class="{ hide: !loading }">
      <div class="loader-box">
        <img :src="'/our-little-miracle/images/ultrasound-1.jpg'" alt="loading-ultrasound" class="loader-img" />
        <div class="loader-text">손주 만나러 가는중</div>
        <div class="loader-progress"><span class="loader-bar"></span></div>
      </div>
    </div>

    <header class="top">초롱이를 소개합니다.</header>

    <main>
      <section class="hero section">
        <div class="container hero-box card reveal hero-reveal">
          <video class="hero-video" :src="'/our-little-miracle/videos/kick.mp4'" autoplay muted loop playsinline controls :poster="'/our-little-miracle/images/ultrasound-1.jpg'"></video>
          <div class="badge">FIRST REVEAL</div>
          <h1>할아버지, 할머니가 되신 걸<br>축하드려요</h1>
          <p class="lead">오늘 처음 전하는 소중한 소식, 우리 아기가 찾아왔어요.</p>
        </div>
      </section>

      <section class="section" style="padding-top:8px">
        <div class="container">
          <h2 class="title reveal">성장 타임라인</h2>
          <div class="timeline">
            <div v-for="(item, idx) in timeline" :key="item.step" class="tl-item reveal" :class="{ reverse: idx % 2 === 1 }">
              <div class="tl-dotline">
                <div class="tl-dot">{{ item.step }}</div>
              </div>
              <div class="tl-card card">
                <div class="tl-text">
                  <div class="tl-date">{{ item.date }}</div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.text }}</p>
                </div>
                <img :src="item.image" :alt="item.title" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="padding-top:0">
        <div class="container">
          <h2 class="title reveal">Gallery</h2>
          <div class="gallery-grid">
            <div v-for="(img, i) in gallery" :key="i" class="g-item reveal" :class="`g-${i % 8}`">
              <img :src="img" :alt="`gallery-${i}`" />
            </div>
          </div>
        </div>
      </section>

      <p class="footer">with love</p>
    </main>

    <button class="music" @click="toggleMusic">{{ playing ? '음악 멈춤' : '음악 재생' }}</button>
    <audio ref="audio" :src="'/our-little-miracle/audio/bgm.wav'" loop preload="none" />
  </div>
</template>
