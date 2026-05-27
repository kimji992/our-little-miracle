<script setup>
import { onMounted, ref } from 'vue'
const loading = ref(true)
const playing = ref(false)
const audio = ref(null)
onMounted(() => setTimeout(() => (loading.value = false), 1200))
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
        <h2 style="margin:0;color:#0a8a70">Our Little Miracle</h2>
        <p class="muted" style="margin:.4rem 0 0">환한 소식을 준비하고 있어요</p>
      </div>
    </div>

    <header class="top">
      <span class="material-symbols-outlined" style="color:#0a8a70">favorite</span>
      <strong style="color:#0a8a70">우리의 작은 기적</strong>
      <span class="material-symbols-outlined" style="color:#0a8a70">share</span>
    </header>

    <main>
      <section class="hero">
        <img :src="'/our-little-miracle/images/ultrasound-1.jpg'" class="hero-img" alt="ultrasound-main" />
        <div style="margin-top:16px"><span class="badge joy-gradient">FIRST REVEAL</span></div>
        <h1>할아버지, 할머니가 되신 걸<br>축하드려요</h1>
        <p class="lead">오늘 처음 전하는 소중한 소식, 우리 아기가 찾아왔어요 💛</p>
      </section>

      <section class="sec" style="padding-top:26px">
        <div class="container grid2">
          <div class="highlight" style="text-align:center">
            <span class="material-symbols-outlined" style="font-size:42px;color:#0a8a70">celebration</span>
            <h3 style="margin:8px 0 6px;color:#0a8a70">축하합니다</h3>
            <p style="margin:0;color:#2c8db0;font-weight:700">할아버지, 할머니가 되셨어요!</p>
          </div>
          <div class="card" style="padding:10px">
            <img :src="'/our-little-miracle/images/family-1.jpg'" alt="family" />
          </div>
        </div>
      </section>

      <section class="sec">
        <div class="container">
          <h2 class="k-title">우리의 성장 이야기</h2>
          <div class="timeline">
            <div class="row">
              <div class="text" style="text-align:center">
                <span class="chip">STEP 01</span>
                <h4 style="margin:10px 0 6px">첫 만남 · The Little Dot</h4>
                <p class="muted">아주 작은 점으로 시작된 우리의 기적.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/ultrasound-1.jpg'" alt="u1" /></div>
            </div>
            <div class="row rev">
              <div class="text" style="text-align:center">
                <span class="chip">STEP 02</span>
                <h4 style="margin:10px 0 6px">두근거림 · First Big Milestone</h4>
                <p class="muted">처음 들은 심장 소리에 웃고 울던 순간.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/ultrasound-2.jpg'" alt="u2" /></div>
            </div>
            <div class="row">
              <div class="text" style="text-align:center">
                <span class="chip">STEP 03</span>
                <h4 style="margin:10px 0 6px">기다림의 시간 · Wiggling Toes & Fingers</h4>
                <p class="muted">사랑으로 채워가는 매일의 기록.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/family-1.jpg'" alt="family2" /></div>
            </div>
          </div>
        </div>
      </section>

      <section class="sec" style="padding-top:22px">
        <div class="container grid2">
          <div class="panel" style="max-width:100%">
            <h3 style="font-size:28px;color:#0a8a70;margin-top:0">사랑하는 할아버지, 할머니께</h3>
            <p class="muted">작은 생명을 기다리는 시간 동안 늘 따뜻하게 응원해 주셔서 감사합니다.</p>
            <p class="muted">이 기쁜 소식을 가장 먼저 전하고 싶었습니다.</p>
            <p style="color:#0a8a70;font-weight:700">진심으로 감사하고 사랑합니다 💛</p>
          </div>
          <div class="panel" style="max-width:100%;background:#f9fdff">
            <h3 style="font-size:24px;color:#2c8db0;margin-top:0">앞으로의 이야기</h3>
            <p class="muted">앞으로도 우리 아기의 모든 계절을 함께해 주세요.</p>
            <p class="muted" style="margin:0">첫 웃음, 첫 걸음, 첫 단어까지<br>행복한 순간을 계속 나눌게요.</p>
          </div>
        </div>
      </section>

      <section class="sec" style="padding-top:28px;padding-bottom:56px;text-align:center">
        <p class="muted" style="margin:0">Made with love for Grandpa & Grandma</p>
      </section>
    </main>

    <button class="music joy-gradient" @click="toggleMusic">{{ playing ? '⏸️ 음악 멈춤' : '🎵 음악 재생' }}</button>
    <audio ref="audio" :src="'/our-little-miracle/audio/bgm.wav'" loop preload="none" />
  </div>
</template>
