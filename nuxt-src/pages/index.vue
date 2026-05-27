<script setup>
import { onMounted, ref } from 'vue'
const loading = ref(true)
const playing = ref(false)
const audio = ref(null)
onMounted(()=>setTimeout(()=>loading.value=false,900))
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
      <section class="section hero">
        <div class="container">
          <img :src="'/our-little-miracle/images/ultrasound-1.jpg'" alt="hero" />
          <div class="badge">FIRST REVEAL</div>
          <h1>할아버지, 할머니가 되신 걸<br>축하드려요</h1>
          <p class="lead">오늘 처음 전하는 소중한 소식, 우리 아기가 찾아왔어요.</p>
        </div>
      </section>

      <hr />

      <section class="section">
        <div class="container">
          <h2 class="title">성장 이야기</h2>
          <p class="sub">처음 만남부터 기다림까지</p>

          <article class="item">
            <div class="txt"><div class="k">STEP 01</div><h3>첫 만남</h3><p class="muted">아주 작은 점으로 시작된 기적.</p></div>
            <div class="img"><img :src="'/our-little-miracle/images/ultrasound-1.jpg'" alt="u1" /></div>
          </article>
          <article class="item rev">
            <div class="txt"><div class="k">STEP 02</div><h3>두근거림</h3><p class="muted">처음 들은 심장 소리의 감동.</p></div>
            <div class="img"><img :src="'/our-little-miracle/images/ultrasound-2.jpg'" alt="u2" /></div>
          </article>
          <article class="item">
            <div class="txt"><div class="k">STEP 03</div><h3>기다림의 시간</h3><p class="muted">사랑으로 채워지는 매일.</p></div>
            <div class="img"><img :src="'/our-little-miracle/images/family-1.jpg'" alt="family" /></div>
          </article>
        </div>
      </section>

      <hr />

      <section class="section">
        <div class="container letter">
          <h2 class="title" style="font-size:24px">사랑하는 할아버지, 할머니께</h2>
          <p>작은 생명을 기다리는 시간 동안 응원해 주셔서 감사합니다.</p>
          <p>이 기쁜 소식을 가장 먼저 전하고 싶었습니다.</p>
          <p class="end">진심으로 감사하고 사랑합니다.</p>
        </div>
      </section>

      <p class="footer">Made with love for Grandpa & Grandma</p>
    </main>

    <button class="music" @click="toggleMusic">{{ playing ? '음악 멈춤' : '음악 재생' }}</button>
    <audio ref="audio" :src="'/our-little-miracle/audio/bgm.wav'" loop preload="none" />
  </div>
</template>
