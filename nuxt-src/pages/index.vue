<script setup>
import { onMounted, ref } from 'vue'
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

onMounted(() => setTimeout(() => (loading.value = false), 900))
const toggleMusic = async () => {
  if (!audio.value) return
  if (!playing.value) { await audio.value.play(); playing.value = true }
  else { audio.value.pause(); playing.value = false }
}
</script>

<template>
  <div>
    <div class="loader" :class="{ hide: !loading }"><div>Our Little Miracle</div></div>

    <header class="top">우리의 작은 기적</header>

    <main>
      <section class="hero section">
        <div class="container hero-box card">
          <img :src="'/our-little-miracle/images/ultrasound-1.jpg'" alt="hero" />
          <div class="badge">FIRST REVEAL</div>
          <h1>할아버지, 할머니가 되신 걸<br>축하드려요</h1>
          <p class="lead">오늘 처음 전하는 소중한 소식, 우리 아기가 찾아왔어요.</p>
        </div>
      </section>

      <section class="section" style="padding-top:8px">
        <div class="container">
          <h2 class="title">성장 타임라인</h2>
          <div class="timeline">
            <div v-for="(item, idx) in timeline" :key="item.step" class="tl-item" :class="{ reverse: idx % 2 === 1 }">
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
          <h2 class="title">Gallery</h2>
          <div class="gallery-grid">
            <div v-for="(img, i) in gallery" :key="i" class="g-item" :class="`g-${i % 8}`">
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
