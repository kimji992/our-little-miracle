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
        <h2 style="margin:0;color:#006c52">Our Little Miracle</h2>
        <p class="muted" style="margin:.4rem 0 0">초대장을 준비하고 있어요</p>
      </div>
    </div>

    <header class="top">
      <span class="material-symbols-outlined" style="color:#006c52">favorite</span>
      <strong style="color:#006c52">우리의 작은 기적</strong>
      <span class="material-symbols-outlined" style="color:#006c52">share</span>
    </header>

    <main>
      <!-- 1. hero / coming soon -->
      <section class="hero">
        <img :src="'/our-little-miracle/images/ultrasound-1.jpg'" class="hero-img" alt="ultrasound-main" />
        <div style="margin-top:16px"><span class="badge joy-gradient">FIRST REVEAL</span></div>
        <h1>할아버지, 할머니가 되신 걸<br>축하드려요</h1>
        <p class="lead">오늘 처음 전하는 소중한 소식,<br>우리 아기가 찾아왔어요 💛</p>
      </section>

      <!-- 2. congratulation section -->
      <section class="sec" style="background:#e9f9f4">
        <div class="container" style="text-align:center">
          <span class="material-symbols-outlined" style="font-size:52px;color:#006c52">celebration</span>
          <h2 class="k-title" style="color:#006c52">축하합니다</h2>
          <p style="font-size:24px;color:#006684">할아버지, 할머니가 되셨어요!</p>
          <p class="muted" style="margin:10px 0 0">가장 먼저 이 기쁨을 전해드려요.</p>
        </div>
      </section>

      <!-- 3. timeline blocks -->
      <section class="sec">
        <div class="container">
          <h2 class="k-title">Our Growing Miracle</h2>
          <div class="timeline">
            <div class="row">
              <div class="text" style="text-align:center">
                <strong>첫 만남 · The Little Dot</strong>
                <p class="muted">아주 작은 점으로 시작된 우리의 기적.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/ultrasound-1.jpg'" alt="u1" /></div>
            </div>
            <div class="row rev">
              <div class="text" style="text-align:center">
                <strong>두근거림 · First Big Milestone</strong>
                <p class="muted">처음 들은 심장 소리에 웃고 울던 순간.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/ultrasound-2.jpg'" alt="u2" /></div>
            </div>
            <div class="row">
              <div class="text" style="text-align:center">
                <strong>기다림의 시간 · Wiggling Toes & Fingers</strong>
                <p class="muted">사랑으로 채워가는 매일의 기록.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/family-1.jpg'" alt="family" /></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. letter section -->
      <section class="sec" style="background:#f4f6f8">
        <div class="panel">
          <h3 style="font-size:34px;color:#006c52;margin-top:0">사랑하는 할아버지, 할머니께</h3>
          <p class="muted">작은 생명을 기다리는 시간 동안 늘 따뜻하게 응원해 주셔서 감사합니다.</p>
          <p class="muted">이 기쁜 소식을 가장 먼저 전하고 싶었습니다.</p>
          <p class="muted">앞으로도 우리 아기의 모든 계절을 함께해 주세요.</p>
          <p style="color:#006c52;font-weight:700">진심으로 감사하고 사랑합니다 💛</p>
        </div>
      </section>

      <!-- 5. final greeting/footer style -->
      <section class="sec" style="padding-top:28px;padding-bottom:56px;text-align:center">
        <p class="muted" style="margin:0">Made with love for Grandpa & Grandma</p>
      </section>
    </main>

    <button class="music joy-gradient" @click="toggleMusic">{{ playing ? '⏸️ 음악 멈춤' : '🎵 음악 재생' }}</button>
    <audio ref="audio" :src="'/our-little-miracle/audio/bgm.wav'" loop preload="none" />
  </div>
</template>
