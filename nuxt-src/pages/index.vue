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
      <strong style="color:#006c52">성장 기록</strong>
      <span class="material-symbols-outlined" style="color:#006c52">photo_library</span>
    </header>

    <main>
      <section class="hero">
        <img :src="'/our-little-miracle/images/family-1.jpg'" class="hero-img" alt="baby-main" />
        <div style="margin-top:16px"><span class="badge joy-gradient">OUR LITTLE MIRACLE</span></div>
        <h1>작고 소중한 너의 하루하루</h1>
        <p class="lead">사랑으로 자라는 우리 아기의 성장 기록 💛</p>
      </section>

      <section class="sec">
        <div class="container">
          <h2 class="k-title">사진으로 보는 성장 이야기</h2>
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
          <h3 style="font-size:34px;color:#006c52;margin-top:0">엄마 아빠에게</h3>
          <p class="muted">작은 생명을 품고 지켜낸 모든 시간, 정말 고생 많았어요.</p>
          <p class="muted">서툴지만 누구보다 따뜻한 마음으로 하루를 채워가는 엄마 아빠를 응원합니다.</p>
          <p class="muted">지금처럼 서로를 믿고, 아기를 사랑으로 안아주세요.</p>
          <p style="color:#006c52;font-weight:700">세상에서 가장 멋진 부모님이에요 💛</p>
        </div>
      </section>
    </main>

    <button class="music joy-gradient" @click="toggleMusic">{{ playing ? '⏸️ 음악 멈춤' : '🎵 음악 재생' }}</button>
    <audio ref="audio" :src="'/our-little-miracle/audio/bgm.wav'" loop preload="none" />
  </div>
</template>
