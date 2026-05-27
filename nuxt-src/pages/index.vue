<script setup>
import { onMounted, ref, nextTick } from 'vue'
const loading = ref(true)

const timeline = [
  {
    step: '01',
    title: '임테기 확인',
    date: '두 줄의 시작',
    text: '우리 가족의 첫 소식',
    image: '/our-little-miracle/images/timeline-2-dad.jpg'
  },
  {
    step: '02',
    title: '아빠된거 축하해',
    date: '기쁜 고백',
    text: '아빠가 되는 순간',
    image: '/our-little-miracle/images/timeline-1-test.jpg'
  },
  {
    step: '03',
    title: '초음파 사진',
    date: '초롱이 첫 인사',
    text: '작은 심장 소리와 함께',
    image: '/our-little-miracle/images/timeline-3-ultrasound.jpg'
  }
]

const gallery = [
  '/our-little-miracle/images/timeline-1-test.jpg',
  '/our-little-miracle/images/timeline-2-dad.jpg',
  '/our-little-miracle/images/timeline-3-ultrasound.jpg',
  '/our-little-miracle/images/cholong-main.jpg',
  '/our-little-miracle/images/timeline-1-test.jpg',
  '/our-little-miracle/images/timeline-2-dad.jpg',
  '/our-little-miracle/images/timeline-3-ultrasound.jpg',
  '/our-little-miracle/images/cholong-main.jpg'
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
          <video class="hero-video" autoplay loop playsinline preload="auto" controls >
            <source :src="'/our-little-miracle/videos/cholong-kick.mov'" type="video/quicktime" />
            <source :src="'/our-little-miracle/videos/kick.mp4'" type="video/mp4" />
          </video>
          <p class="hero-one-line">할아버지, 할머니 초롱이 왔어요.</p>
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

  </div>
</template>
