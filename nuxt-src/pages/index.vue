<script setup>
import { onMounted, ref } from 'vue'
const loading = ref(true)
const playing = ref(false)
const audio = ref(null)
onMounted(()=>setTimeout(()=>loading.value=false,1200))
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
        <h2 style="margin:0;color:#006c52">우리의 작은 기적</h2>
        <p class="muted" style="margin:.4rem 0 0">소중한 순간들을 불러오고 있어요</p>
      </div>
    </div>

    <header class="top">
      <span class="material-symbols-outlined" style="color:#006c52">favorite</span>
      <strong style="color:#006c52">우리 채널의 작은 기적</strong>
      <span class="material-symbols-outlined" style="color:#006c52">photo_library</span>
    </header>

    <main>
      <section class="hero">
        <img :src="'/our-little-miracle/images/family-1.jpg'" class="hero-img" alt="baby-main" />
        <div style="margin-top:16px"><span class="badge joy-gradient">OUR LITTLE MIRACLE</span></div>
        <h1>작고 소중한 너의 하루하루</h1>
        <p class="lead">구독해 주신 부모님과 함께 쓰는 성장 스토리 💛</p>
      </section>

      <section class="sec">
        <div class="container">
          <h2 class="k-title">부모님 구독자 전용 성장 피드</h2>
          <div class="timeline">
            <div class="row">
              <div class="text" style="text-align:center">
                <strong>처음 만난 순간</strong>
                <p class="muted">아주 작은 모습으로 우리에게 찾아왔어요.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/ultrasound-1.jpg'" alt="ultrasound-1" /></div>
            </div>

            <div class="row rev">
              <div class="text" style="text-align:center">
                <strong>두근두근 심장 소리</strong>
                <p class="muted">작은 심장 박동이 큰 감동이 되었던 날.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/ultrasound-2.jpg'" alt="ultrasound-2" /></div>
            </div>

            <div class="row">
              <div class="text" style="text-align:center">
                <strong>웃음이 늘어난 요즘</strong>
                <p class="muted">하루하루 더 사랑스러워지는 우리 아기.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/family-1.jpg'" alt="baby-family" /></div>
            </div>
          </div>
        </div>
      </section>

      <section class="sec" style="background:#f4f6f8">
        <div class="panel">
          <h3 style="font-size:34px;color:#006c52;margin-top:0">우리 채널 VIP 구독자, 엄마 아빠께</h3>
          <p class="muted">첫 구독부터 지금까지, 가장 가까이서 응원해 주셔서 고마워요.</p>
          <p class="muted">매일 업데이트되는 웃음과 사랑을 제일 먼저 받아보는 특별한 구독자예요.</p>
          <p class="muted">앞으로도 우리 아기의 모든 시즌을 함께 구독해 주세요.</p>
          <p style="color:#006c52;font-weight:700">평생 이용권 구독자, 엄마 아빠 사랑해요 💛</p>
        </div>
      </section>
    </main>

    <button class="music joy-gradient" @click="toggleMusic">{{ playing ? '⏸️ 음악 멈춤' : '🎵 음악 재생' }}</button>
    <audio ref="audio" :src="'/our-little-miracle/audio/bgm.wav'" loop preload="none" />
  </div>
</template>
