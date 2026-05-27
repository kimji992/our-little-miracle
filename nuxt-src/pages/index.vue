<script setup>
import { onMounted, ref } from 'vue'
const loading = ref(true)
const playing = ref(false)
const audio = ref(null)
onMounted(() => setTimeout(() => (loading.value = false), 1100))
const toggleMusic = async () => {
  if (!audio.value) return
  if (!playing.value) { await audio.value.play(); playing.value = true }
  else { audio.value.pause(); playing.value = false }
}
</script>

<template>
  <div>
    <div class="loader" :class="{ hide: !loading }">
      <div style="text-align:center">
        <h2 style="margin:0;color:#0f8b6d">Our Little Miracle</h2>
        <p style="margin:.45rem 0 0;color:#5a6672">첫 공개를 준비하고 있어요</p>
      </div>
    </div>

    <header class="top">
      <span class="material-symbols-outlined" style="color:#0f8b6d">kid_star</span>
      <span class="brand">할아버지·할머니께 드리는 첫 소식</span>
      <span class="material-symbols-outlined" style="color:#0f8b6d">auto_stories</span>
    </header>

    <main>
      <section class="hero container">
        <span class="kicker grad">FIRST REVEAL</span>
        <div class="hero-grid">
          <div>
            <h1 class="hero-title">할아버지, 할머니가 되신 걸<br>축하드려요</h1>
            <p class="hero-sub">오늘 우리 아기를 처음으로 보여드려요.<br>가장 먼저 축복을 전하고 싶은 분들은 언제나 할아버지, 할머니예요 💛</p>
          </div>
          <div>
            <img :src="'/our-little-miracle/images/ultrasound-1.jpg'" class="hero-main" alt="ultrasound-main" />
            <div class="strip">
              <img :src="'/our-little-miracle/images/ultrasound-2.jpg'" alt="ultrasound-sub" />
              <img :src="'/our-little-miracle/images/family-1.jpg'" alt="family" />
            </div>
          </div>
        </div>
      </section>

      <section class="sec container">
        <h2 class="title">성장 기록 미리보기</h2>
        <div class="deck">
          <article class="card"><h4>처음 만난 날</h4><p>초음파로 처음 만난 순간, 세상이 조용해지고 심장만 크게 들렸어요.</p></article>
          <article class="card"><h4>두근두근 소식</h4><p>작은 심장 소리가 들리던 날, 우리 가족의 시간이 더 따뜻해졌어요.</p></article>
          <article class="card"><h4>오늘의 행복</h4><p>하루하루 자라는 모습을 보며, 감사한 마음이 더 커지고 있어요.</p></article>
        </div>
      </section>

      <section class="sec container">
        <h2 class="title">할아버지·할머니께</h2>
        <div class="feature">
          <div class="stat"><b>THANK YOU</b><span>늘 먼저 안아주셔서 고마워요</span></div>
          <div class="stat"><b>BLESSING</b><span>가장 따뜻한 축복을 부탁드려요</span></div>
          <div class="stat"><b>TOGETHER</b><span>아기의 모든 순간을 함께해 주세요</span></div>
        </div>
      </section>

      <section class="sec container" style="padding-bottom:50px">
        <div class="msg">
          <p>사랑하는 할아버지, 할머니.</p>
          <p>작은 생명이 찾아온 이후의 모든 날이 기적처럼 느껴집니다.</p>
          <p>이 기쁜 첫 소식을 가장 먼저 전할 수 있어 저희도 참 행복합니다.</p>
          <p class="end">진심으로 감사하고, 사랑합니다 💛</p>
        </div>
      </section>
    </main>

    <button class="music grad" @click="toggleMusic">{{ playing ? '⏸️ 음악 멈춤' : '🎵 음악 재생' }}</button>
    <audio ref="audio" :src="'/our-little-miracle/audio/bgm.wav'" loop preload="none" />
  </div>
</template>
