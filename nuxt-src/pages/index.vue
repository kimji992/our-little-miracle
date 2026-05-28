<script setup>
import { onMounted, ref, nextTick } from 'vue'
const loading = ref(true)


const timeline = [
  {
    step: '01',
    title: '초롱이가 찾아 온 날 ☀️',
    date: '두 줄의 시작',
    text: '우리 가족의 첫 소식',
    image: '/our-little-miracle/images/timeline-2-dad.jpg'
  },
  {
    step: '02',
    title: '아빠와 초롱이의 만남 🤝',
    date: '기쁜 고백',
    text: '아빠가 되는 순간',
    image: '/our-little-miracle/images/timeline-1-test.jpg'
  },
  {
    step: '03',
    title: '초롱이의 첫 심장소리 💓',
    date: '초롱이 첫 인사',
    text: '작은 심장 소리와 함께',
    image: '/our-little-miracle/images/timeline-3-ultrasound.jpg'
  }
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

    <header class="top">초롱이를 소개합니다❤️</header>

    <main>
      <section class="hero section">
        <div class="container hero-box card reveal hero-reveal">
          <div class="hero-video-wrap">
            <video class="hero-video" autoplay loop playsinline preload="auto" controls>
              <source :src="'/our-little-miracle/videos/cholong-kick.mov'" type="video/quicktime" />
              <source :src="'/our-little-miracle/videos/kick.mp4'" type="video/mp4" />
            </video>
          </div>
          <p class="hero-one-line">할아버지, 할머니 초롱이 왔어요.</p>
        </div>
      </section>

      <section class="between-baby">
        <img class="between-baby-img" :src="'/our-little-miracle/images/baby-only.png'" alt="아기 그림" />
      </section>

      <section class="section" style="padding-top:10px;padding-bottom:8px">
        <div class="container">
          <div class="letter-top card reveal">
            <p class="to">TO. 할모니 하부지</p>
            <p class="msg">내년 1월에 건강하게 만나요!</p>
            <p class="from">~ 초롱이가 -</p>
          </div>
          <div class="calendar card reveal">
            <div class="cal-head">2027년 1월</div>
            <div class="cal-grid cal-days">
              <span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span>
            </div>
            <div class="cal-grid">
              <span class="dim">27</span><span class="dim">28</span><span class="dim">29</span><span class="dim">30</span><span class="dim">31</span><span>1</span><span>2</span>
              <span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
              <span>10</span><span>11</span><span class="checked">12</span><span>13</span><span>14</span><span>15</span><span>16</span>
              <span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span>
              <span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span>
              <span>31</span><span class="dim">1</span><span class="dim">2</span><span class="dim">3</span><span class="dim">4</span><span class="dim">5</span><span class="dim">6</span>
            </div>
          </div>
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


      

      

      <p class="footer">with love</p>
    </main>

  </div>
</template>
