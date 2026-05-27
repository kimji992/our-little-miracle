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
        <h2 style="margin:0;color:#006c52">우리 아기 돌잔치</h2>
        <p class="muted" style="margin:.4rem 0 0">소중한 초대장을 준비하고 있어요</p>
      </div>
    </div>

    <header class="top">
      <span class="material-symbols-outlined" style="color:#006c52">favorite</span>
      <strong style="color:#006c52">첫 생일에 초대합니다</strong>
      <span class="material-symbols-outlined" style="color:#006c52">celebration</span>
    </header>

    <main>
      <section class="hero">
        <img :src="'/our-little-miracle/images/family-1.jpg'" class="hero-img" alt="family" />
        <div style="margin-top:16px"><span class="badge joy-gradient">DOL PARTY</span></div>
        <h1>우리 아기의 첫 생일<br>함께 축하해 주세요</h1>
        <p class="lead">설레는 마음으로 돌잔치에 초대합니다 💛</p>
      </section>

      <section class="sec" style="background:#e9f9f4">
        <div class="container" style="text-align:center">
          <span class="material-symbols-outlined" style="font-size:52px;color:#006c52">cake</span>
          <h2 class="k-title" style="color:#006c52">돌잔치 안내</h2>
          <p style="font-size:22px;color:#006684;margin:0">2026.07.20 (토) 오후 1시</p>
          <p class="muted" style="margin-top:8px">OO연회장 3층 라온홀</p>
        </div>
      </section>

      <section class="sec">
        <div class="container">
          <h2 class="k-title">우리 아이 성장 이야기</h2>
          <div class="timeline">
            <div class="row">
              <div class="text" style="text-align:center">
                <strong>처음 만난 날</strong>
                <p class="muted">처음 초음파로 만난 순간, 세상이 멈춘 것 같았어요.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/ultrasound-1.jpg'" alt="ultrasound-1" /></div>
            </div>
            <div class="row rev">
              <div class="text" style="text-align:center">
                <strong>두근두근 심장 소리</strong>
                <p class="muted">작은 심장 소리를 듣고 더 큰 사랑을 배웠어요.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/ultrasound-2.jpg'" alt="ultrasound-2" /></div>
            </div>
            <div class="row">
              <div class="text" style="text-align:center">
                <strong>첫 번째 생일까지</strong>
                <p class="muted">사랑으로 자라 어느새 첫 생일을 맞이했어요.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/family-1.jpg'" alt="family-1" /></div>
            </div>
          </div>
        </div>
      </section>

      <section class="sec" style="background:#f4f6f8">
        <div class="panel">
          <h3 style="font-size:34px;color:#006c52;margin-top:0">초대의 글</h3>
          <p class="muted">저희 아이가 건강하게 첫 생일을 맞이했습니다.</p>
          <p class="muted">지금까지 보내주신 따뜻한 마음에 감사드리며,</p>
          <p class="muted">소중한 분들과 기쁨을 나누고 싶어 자리를 마련했습니다.</p>
          <p style="color:#006c52;font-weight:700">오셔서 축복해 주시면 더없이 큰 선물이 됩니다 💛</p>
        </div>
      </section>
    </main>

    <button class="music joy-gradient" @click="toggleMusic">{{ playing ? '⏸️ 음악 멈춤' : '🎵 음악 재생' }}</button>
    <audio ref="audio" :src="'/our-little-miracle/audio/bgm.wav'" loop preload="none" />
  </div>
</template>
