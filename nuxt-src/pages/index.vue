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
        <h2 style="margin:0;color:#11866e">Our Little Miracle</h2>
        <p style="margin:.35rem 0 0;color:#6a7b86">소중한 첫 소식을 준비하고 있어요</p>
      </div>
    </div>

    <header class="top">
      <span class="material-symbols-outlined" style="color:#11866e">favorite</span>
      <strong style="color:#11866e">우리의 작은 기적</strong>
      <span class="material-symbols-outlined" style="color:#11866e">share</span>
    </header>

    <main>
      <section class="section hero">
        <div class="container block" style="padding:26px 20px 30px">
          <img :src="'/our-little-miracle/images/ultrasound-1.jpg'" class="hero-img" alt="hero" />
          <div><span class="badge joy-gradient">FIRST REVEAL</span></div>
          <h1>할아버지, 할머니가 되신 걸<br>축하드려요</h1>
          <p class="lead">오늘 처음 전하는 소중한 소식, 우리 아기가 찾아왔어요 💛</p>
        </div>
      </section>

      <div class="container"><div class="divider"></div></div>

      <section class="section">
        <div class="container">
          <h2 class="title">우리의 성장 이야기</h2>
          <p class="subtitle">처음 만남부터, 설레는 기다림까지</p>
          <div class="timeline">
            <article class="item">
              <div class="txt" style="text-align:center"><span class="kicker">STEP 01</span><h4>첫 만남</h4><p style="margin:0;color:#6a7b86">아주 작은 점으로 시작된 우리의 기적.</p></div>
              <div class="img"><img :src="'/our-little-miracle/images/ultrasound-1.jpg'" alt="u1" /></div>
            </article>
            <article class="item rev">
              <div class="txt" style="text-align:center"><span class="kicker">STEP 02</span><h4>두근거림</h4><p style="margin:0;color:#6a7b86">처음 들은 심장 소리에 웃고 울던 순간.</p></div>
              <div class="img"><img :src="'/our-little-miracle/images/ultrasound-2.jpg'" alt="u2" /></div>
            </article>
            <article class="item">
              <div class="txt" style="text-align:center"><span class="kicker">STEP 03</span><h4>기다림의 시간</h4><p style="margin:0;color:#6a7b86">사랑으로 채워가는 매일의 기록.</p></div>
              <div class="img"><img :src="'/our-little-miracle/images/family-1.jpg'" alt="family" /></div>
            </article>
          </div>
        </div>
      </section>

      <div class="container"><div class="divider"></div></div>

      <section class="section" style="padding-top:34px">
        <div class="container block letter">
          <h3 style="font-size:30px;color:#11866e;margin:0 0 12px">사랑하는 할아버지, 할머니께</h3>
          <p>작은 생명을 기다리는 시간 동안 늘 따뜻하게 응원해 주셔서 감사합니다.</p>
          <p>이 기쁜 소식을 가장 먼저 전하고 싶었습니다.</p>
          <p>앞으로도 우리 아기의 모든 계절을 함께해 주세요.</p>
          <p class="end">진심으로 감사하고 사랑합니다 💛</p>
        </div>
      </section>

      <p class="footer">Made with love for Grandpa & Grandma</p>
    </main>

    <button class="music joy-gradient" @click="toggleMusic">{{ playing ? '⏸️ 음악 멈춤' : '🎵 음악 재생' }}</button>
    <audio ref="audio" :src="'/our-little-miracle/audio/bgm.wav'" loop preload="none" />
  </div>
</template>
