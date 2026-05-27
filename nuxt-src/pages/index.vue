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
      <strong style="color:#006c52">할아버지·할머니께 드리는 첫 소식</strong>
      <span class="material-symbols-outlined" style="color:#006c52">photo_library</span>
    </header>

    <main>
      <!-- 기 : 첫 공개 -->
      <section class="hero">
        <img :src="'/our-little-miracle/images/ultrasound-1.jpg'" class="hero-img" alt="ultrasound-main" />
        <div style="margin-top:16px"><span class="badge joy-gradient">FIRST REVEAL</span></div>
        <div style="margin-top:14px">
          <img :src="'/our-little-miracle/images/ultrasound-2.jpg'" alt="ultrasound-sub" style="width:110px;height:110px;border-radius:16px;object-fit:cover;border:4px solid #fff;box-shadow:0 8px 18px rgba(0,0,0,.12)" />
        </div>
        <h1>할아버지, 할머니가 되신 걸<br>축하드려요</h1>
        <p class="lead">오늘, 우리 아기를 처음으로 공개해요. 함께 축복해 주세요 💛</p>
      </section>

      <!-- 승 : 기쁨이 커지는 성장 -->
      <section class="sec">
        <div class="container">
          <h2 class="k-title">기쁨이 커진 순간들</h2>
          <div class="timeline">
            <div class="row">
              <div class="text" style="text-align:center">
                <strong>처음 만난 날</strong>
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
          </div>
        </div>
      </section>

      <!-- 전 : 가족이 되는 마음 -->
      <section class="sec" style="background:#e9f9f4">
        <div class="container" style="text-align:center">
          <span class="material-symbols-outlined" style="font-size:52px;color:#006c52">diversity_3</span>
          <h2 class="k-title" style="color:#006c52">가족이 되는 마음</h2>
          <p style="font-size:22px;color:#006684;margin:0">하루하루 커지는 기쁨을<br>할아버지, 할머니와 가장 먼저 나누고 싶었어요.</p>
          <div style="max-width:360px;margin:18px auto 0" class="card">
            <img :src="'/our-little-miracle/images/family-1.jpg'" alt="family" />
          </div>
        </div>
      </section>

      <!-- 결 : 축하와 감사 -->
      <section class="sec" style="background:#f4f6f8">
        <div class="panel">
          <h3 style="font-size:34px;color:#006c52;margin-top:0">사랑하는 할아버지, 할머니께</h3>
          <p class="muted">작은 생명을 기다리는 시간 동안 늘 곁에서 응원해 주셔서 감사합니다.</p>
          <p class="muted">첫 공개의 기쁨을 가장 먼저 전할 수 있어 더 행복합니다.</p>
          <p class="muted">앞으로도 우리 아기의 모든 순간을 함께 지켜봐 주세요.</p>
          <p style="color:#006c52;font-weight:700">진심으로 감사하고 사랑합니다 💛</p>
        </div>
      </section>
    </main>

    <button class="music joy-gradient" @click="toggleMusic">{{ playing ? '⏸️ 음악 멈춤' : '🎵 음악 재생' }}</button>
    <audio ref="audio" :src="'/our-little-miracle/audio/bgm.wav'" loop preload="none" />
  </div>
</template>
